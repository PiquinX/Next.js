'use server'

// All the functions exported in this file are serverSide, thus they are neither executed nor send to the client

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const invoicePath = '/dashboard/invoices'

const CreateInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
})

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id:true,
    date:true
})

export async function createInvoice(formData : FormData) {

    const { customerId, status, amount } = CreateInvoiceFormSchema.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })
    // const rawFormData = Object.fromEntries(formData.entries())

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

export async function updateInvoice (id: string, formData: FormData) {
    const { customerId, status, amount } = UpdateInvoice.parse({
        customerId: formData.get('customerId'),
        status: formData.get('status'),
        amount: formData.get('amount')
    })

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
    throw new Error('Failed to Delete Invoice');

    try {
        await sql `
        DELETE FROM Invoice WHERE id = ${id}
        `
        revalidatePath(invoicePath)
        return { message: 'Deleted Invoice.' }
    } catch (error){
        return { message: 'DataBase Error: Failed to delete invoice' }
    }
    
}