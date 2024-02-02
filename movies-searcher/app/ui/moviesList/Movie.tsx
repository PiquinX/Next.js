import { type Movie } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default async function Movie ({ title, img, type, year, id }: Movie){
    return(
        <div className="flex flex-col py-4 px-6 gap-5 border rounded-md">
            <Link 
                href={`/info/${id}`}
                className="hover:text-und">
                <h3 className="truncate" >{title}</h3>
            </Link>
            <Link 
                href={`/info/${id}`}>
                <img
                    src={img} 
                    alt={`${title} poster`}
                    width={1000}
                    height={760} 
                    className='h-96'
                />
            </Link>
            
            <div className="flex justify-between">
                <p>{type}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}