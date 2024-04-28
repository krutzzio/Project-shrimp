/* eslint-disable react/prop-types */
import { Card, CardFooter, Chip } from "@nextui-org/react";
import restaurante1 from "../../../assets/perfilRestaurante/perfilRestaurante1.jpg";
import fav from "../../../assets/iconos/iconos_Favorito.svg";
import { Link } from "react-router-dom";

export function CardRestaurante({ restInfo }) {
    const { restaurante, tipoCocinaRestaurante, restInUser } = restInfo

    return (

        <Link to={"/perfil/restaurante-cliente"} className="max-w-md min-w-50 items-center flex flex-col">
            <div className="relative shadow-lg my-4 rounded-2xl w-[15rem]">
                <Card isFooterBlurred className="border-none">
                    <Chip color="primary" className="absolute z-20 top-[0.5rem] left-[0.5rem] text-white">{tipoCocinaRestaurante.length > 1 ? "Varios" : `${tipoCocinaRestaurante.nombre_tipo}`}</Chip>
                    <img
                        alt="Foto del restaurante"
                        className="object-cover h-64"
                        src={restaurante1}
                    />
                    <CardFooter className="justify-between before:bg-white/10 overflow-hidden p-2 py-4 absolute before:rounded-xl rounded-large bottom-2 w-[98%] shadow-small h-20 z-10">
                        <div className="flex flex-col absolute z-11 gap-2 h-fit leading-4">
                            <p className="text-lg font-bold text-white text-wrap leading-6">{restaurante.nombre}</p>
                            <p className="text-md text-white">Barcelona</p>
                        </div>
                        <img className="h-6 items-start" src={fav} alt="Guardar en favoritos" />
                    </CardFooter>
                </Card>
            </div>
        </Link>

    );
}