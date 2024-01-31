// All the functions exported in this file are serverSide, thus they are neither executed nor send to the client
'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
};

const invoicePath = '/dashboard/invoices'

const CreateInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.'
    }),
    amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invocie Status'
    }),
    date: z.string()
})

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id:true,
    date:true
})

export async function createInvoice(prevState: State, formData : FormData) {

    const validatedFields = CreateInvoiceFormSchema.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    // const rawFormData = Object.fromEntries(formData.entries())

    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100
    const [date] = new Date().toISOString().split('T')
    // const date = new Date().toISOString().split('T')[0] 

    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `
    } catch (error){
        return {
            message: 'DataBase Error: Failed to create invoice'
        }
    }

    revalidatePath(invoicePath)
    redirect(invoicePath)
}

const UpdateInvoice = CreateInvoiceSchema.omit({
    id: true,
    date: true
})

export async function updateInvoice ( id: string, prevState: State, formData: FormData) {
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        status: formData.get('status'),
        amount: formData.get('amount')
    })

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update Invoice.',
        };
    }

    const { customerId, status, amount } = validatedFields.data
    const amountInCents = amount * 100

    try {
        await sql `
            UPDATE Invoices
            SET customer_id = ${customerId}, status = ${status}, amount = ${amountInCents}
            WHERE id = ${id}
        `
    } catch (error){
        return{
            message: 'DataBase Error: Failed to update invoice'
        }
    }

    revalidatePath(invoicePath)
    redirect(invoicePath)
}

export async function deleteInvoice( id: string ) {
    console.log(id)
    try{
        await sql `DELETE FROM Invoices WHERE id = ${id}`
    } catch (error) {
        return {
            message: 'DataBase Error: Failed to update invoice'
        }
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }