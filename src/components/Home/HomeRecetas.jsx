import { CardReceta } from "./Cards/CardReceta";
import flechader from "../../assets/iconos/iconos_flecha_der.svg"
import flechaizq from "../../assets/iconos/iconos_flecha_izq.svg"
import { useHomeRecetas } from "../../hooks/useHomeRecetas";
import { useEffect } from "react";


export default function HomeRecetas() {

    const { recetasRecomendadas, recetasCercanas, recetasNuevas } = useHomeRecetas()
    useEffect(() => {
        console.log(recetasRecomendadas,)
        console.log(recetasCercanas)
        console.log(recetasNuevas)
    }, [recetasRecomendadas, recetasCercanas, recetasNuevas])


    return (

        <div className="flex flex-col mt-6 md:mt-8 gap-4">
            {/*Primer Carrousel */}
            <div className='flex flex-col'>
                {/*Título + Botones */}
                <div className="flex items-end justify-between">
                    <h1 className="text-2xl font-bold ml-2">Te puede gustar</h1>
                    {/*Botones */}
                    <div className="hidden md:flex md:gap-1">
                        <button type="button" data-carousel-prev>
                            <img src={flechaizq} className="w-8" />
                        </button>
                        <button type="button" data-carousel-next>
                            <img src={flechader} className="w-8" />
                        </button>
                    </div>
                </div>
                {/*Imágenes Carrousel */}
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="flex gap-4 ml-2">
                        {
                            recetasRecomendadas
                                ? recetasRecomendadas?.map(receta => <CardReceta key={receta.receta.id} recetaInfo={receta} />)
                                : <h1>Hola</h1>
                        }
                    </div>
                </div>
            </div>
            {/*Segundo Carrousel */}
            <div className='flex flex-col'>
                <div className="flex items-end justify-between">
                    <h1 className="text-2xl font-bold ml-2">Cerca de tu zona</h1>
                    <div className="hidden md:flex md:gap-1">
                        <button type="button" data-carousel-prev>
                            <img src={flechaizq} className="w-8" />
                        </button>
                        <button type="button" data-carousel-next>
                            <img src={flechader} className="w-8" />
                        </button>
                    </div>
                </div>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4 ml-2">
                        {
                            recetasCercanas
                                ? recetasCercanas?.map(receta => <CardReceta key={receta.receta.id} recetaInfo={receta} />)
                                : <h1>Hola</h1>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col font-bold'>
                <div className="flex items-end justify-between">
                    <h1 className="text-2xl font-bold ml-2">Prueba algo nuevo</h1>
                    <div className="hidden md:flex md:gap-1">
                        <button type="button" data-carousel-prev>
                            <img src={flechaizq} className="w-8" />
                        </button>
                        <button type="button" data-carousel-next>
                            <img src={flechader} className="w-8" />
                        </button>
                    </div>
                </div>
                <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
                    <div className="relative flex gap-4 ml-2">
                        {
                            recetasNuevas
                                ? recetasNuevas?.map(receta => <CardReceta key={receta.receta.id} recetaInfo={receta} />)
                                : <h1>Hoola</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
