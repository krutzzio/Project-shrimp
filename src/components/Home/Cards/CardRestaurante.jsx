/* eslint-disable react/prop-types */
import { Card, CardFooter, Chip } from "@nextui-org/react";
import restaurante1 from "../../../assets/perfilRestaurante/perfilRestaurante1.jpg";
import fav from "../../../assets/iconos/iconos_Favorito.svg";
import favRelleno from "../../../assets/iconos/iconos_FavoritoRelleno.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { seguirRestaurante } from "../../../utils/fetchs/seguirRestaurante";

export function CardRestaurante({ restInfo }) {
    const { restaurante, tipoCocinaRestaurante, restInUser } = restInfo

    const [restGuardado, setRestGuardado] = useState(restInUser)

    const handleSeguirRest = async (event) => {
        event.preventDefault();
        const restUser = await seguirRestaurante({ restId: restaurante.id })
        setRestGuardado(restUser)
    }

    return (
        <Link to={`/perfil-restaurante/${restaurante.id}`} className="max-w-md min-w-50 items-center flex flex-col">
            <div className="relative shadow-lg my-4 rounded-2xl w-[15rem]">
                <Card isFooterBlurred className="border-none">
                    <Chip color="primary" className="absolute z-20 top-[0.5rem] left-[0.5rem] text-white">{tipoCocinaRestaurante.length > 1 ? "Varios" : `${tipoCocinaRestaurante[0].nombre_tipo}`}</Chip>
                    <img
                        alt="Foto del restaurante"
                        className="object-cover h-64"
                        src={restaurante1}
                    />
                    <CardFooter className="justify-between before:bg-white/10 overflow-hidden p-2 py-4 absolute before:rounded-xl rounded-large bottom-2 left-0.5 w-[98%] mx-auto  h-24 z-10">
                        <div className="flex flex-col absolute z-11 gap-2 h-fit leading-4">
                            <p className="text-lg font-bold text-white text-wrap leading-6">{restaurante.nombre}</p>
                            <p className="text-md text-white">{restaurante.direccion}</p>
                        </div>
                        <img onClick={handleSeguirRest} className="h-6 items-start z-10" src={restGuardado ? favRelleno : fav} alt="Guardar en favoritos" />
                    </CardFooter>
                </Card>
            </div>
        </Link>

    );
}