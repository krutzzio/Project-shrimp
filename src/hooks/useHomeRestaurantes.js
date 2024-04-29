import { useEffect, useState } from "react";
import { homeRestaurantes } from "../utils/fetchs/homeRestaurantes";

export function useHomeRestaurantes() {
    const [restaurantesRecomendados, setRestaurantesRecomendados] = useState([])
    const [restaurantesCercanos, setRestaurantesCercanos] = useState([])
    /* const [restaurantesNuevas, setRestaurantesNuevos] = useState([]) */


    useEffect(() => {
        const fetch = async () => {
            const data = await homeRestaurantes()
            setRestaurantesRecomendados(data.restaurantesRecomendados)
            setRestaurantesCercanos(data.restaurantesCercanos)
/*             setRestaurantesNuevos(data.recetasNuevas)
 */        }
        fetch()
    }, [])

    return { restaurantesRecomendados, restaurantesCercanos }
}