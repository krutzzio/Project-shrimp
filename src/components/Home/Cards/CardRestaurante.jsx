import { Chip, Image } from "@nextui-org/react";
import restaurante1 from "../../../assets/perfilRestaurante/perfilRestaurante1.jpg";

export function CardRestaurante() {

    return (

        <div className="flex flex-col gap-2 relative">
            
            <article className="relative flex justify-center items-center">
                <Chip color="primary" className="absolute z-20 top-[1rem] left-[1rem] text-white">Italiano</Chip>
                <h1
                    className="absolute z-20 bottom-[3rem] left-[1rem] text-3xl text-white font-bold shadow-lg"
                >
                    Don Corleone
                </h1>
                    <Image
                        className="shadow-lg w-full md:max-w-60 h-80 object-cover"
                        src={restaurante1}
                        alt=""
                    /> 
                    <Chip color="primary" className="absolute z-20 bottom-[1rem] left-[1rem] text-white">2 recetas</Chip>
            </article>
        </div>

    );
}