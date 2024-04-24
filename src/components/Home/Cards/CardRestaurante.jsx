import { Chip } from "@nextui-org/react";
import restaurante1 from "../../../assets/perfilRestaurante/perfilRestaurante1.jpg";
import fav from "../../../assets/iconos/iconos_Favorito.svg";

export function CardRestaurante() {

    return (

        <div className="flex flex-col gap-2 relative">

            <article className="relative flex justify-center items-center">
                <Chip color="primary" className="absolute z-20 top-[1rem] left-[1rem] text-white">Italiano</Chip>
                <button >
                    <img className="absolute z-20 w-8 top-[1rem] right-[1rem]" src={fav} />
                </button>

                <h1
                    className="absolute z-20 bottom-[3rem] left-[1rem] text-3xl pr-3 md:text-2xl text-white font-bold leading-7"
                >
                    Don Corleone
                </h1>

                <img
                    className="shadow-lg rounded-xl w-full md:max-w-60 h-80 object-cover"
                    src={restaurante1}
                    alt=""
                />
                <Chip color="primary" className="absolute z-20 bottom-[1rem] left-[1rem] text-white">2 recetas</Chip>
            </article>
        </div>

    );
}