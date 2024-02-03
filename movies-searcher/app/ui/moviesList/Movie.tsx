import { type Movie } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default async function Movie ({ title, img, type, year, id }: Movie){
    return(
        <Link 
            href={`/info/${id}`}
        >
            <div className="flex group flex-col py-4 px-6 gap-5 border rounded-md">
                <h3 className="truncate hover:underline" >{title}</h3>
                <img
                    src={img} 
                    alt={`${title} poster`}
                    width={1000}
                    height={760} 
                    className='h-96 relative duration-100 group-hover:scale-105'
                />
                <div className="flex justify-between">
                    <p>{type}</p>
                    <p>{year}</p>
                </div>
            </div>
        </Link>
    )
}