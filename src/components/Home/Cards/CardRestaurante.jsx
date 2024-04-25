import { Card, CardFooter, Chip, Image } from "@nextui-org/react";
import restaurante1 from "../../../assets/perfilRestaurante/perfilRestaurante1.jpg";
import fav from "../../../assets/iconos/iconos_Favorito.svg";
import { Link } from "react-router-dom";

export function CardRestaurante() {

    return (

        <Link className="max-w-fit min-w-50 items-center flex flex-col">
            <div className="flex flex-col gap-1 relative shadow-lg my-4 rounded-2xl">
            <Card
                isFooterBlurred
                className="border-none"
            >
                <Chip color="primary" className="absolute z-20 top-[0.5rem] left-[0.5rem] text-white">Italiano</Chip>
                <Image
                    alt="Foto del restaurante"
                    width={250}
                    height={200}
                    radius="none"
                    className="object-cover h-72"
                    src={restaurante1}
                />
                <CardFooter
                    className="justify-between before:bg-white/10 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
                >
                    <div className="flex absolute z-11 gap-2 items-center">
                        <div className="flex flex-col leading-3">
                            <p className="text-xl font-bold text-white leading-6">Don Kamaron</p>
                            <p className="text-md text-white">Barcelona</p>
                        </div>
                    </div>
                    <Link>
                        <img className="h-6" src={fav} alt="Guardar en favoritos" />
                    </Link>
                </CardFooter>
            </Card>
            </div>
        </Link>

    );
}