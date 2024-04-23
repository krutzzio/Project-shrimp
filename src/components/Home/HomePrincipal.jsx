import { Link } from 'react-router-dom'
import Receta from "../Recetas_componente";

export default function HomePrincipal() {

    return (
        <div className="flex flex-col mt-4">
            <h1 className="text-2xl font-bold">Te puede gustar</h1>
            <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide">
                <div className="relative flex gap-4">
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                </div>
            </div>
            <h1 className="text-2xl font-bold">Popular ahora mismo</h1>
            <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide">
                <div className="relative flex gap-4">
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                </div>
            </div>
            <h1 className="text-2xl font-bold">Cerca de tu zona</h1>
            <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide">
                <div className="relative flex gap-4">
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                    <Link className="max-w-fit min-w-50 items-center flex flex-col">
                        <Receta />
                    </Link>
                </div>
            </div>
        </div>
    )
}
