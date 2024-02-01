import { type Movie } from "@/app/lib/definitions";
import Image from "next/image";

export default async function Movie ({ title, img, type, year }: Movie){
    return(
        <div className="flex flex-col py-4 px-6  gap-5 border rounded-md">
            <h3 className="truncate" >{title}</h3>
            <img
                src={img} 
                alt={`${title} poster`}
                width={1000}
                height={760} 
                className='h-96'
            />
            <div className="flex justify-between">
                <p>{type}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}