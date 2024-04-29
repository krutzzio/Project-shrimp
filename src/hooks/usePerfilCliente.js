import { useEffect, useState } from "react";
import { homeRestaurantes } from "../utils/fetchs/homeRestaurantes";

export function usePerfilCliente() {
    const [restaurantesGuardados, setRestaurantesGuardados] = useState([])
    const [recetasGuardadas, setRecetasGuardadas] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = await homeRestaurantes()
            setRestaurantesGuardados(data.restUser)
            setRecetasGuardadas(data.recetasUser)
        }
        fetch()
    }, [])

    return { restaurantesGuardados, recetasGuardadas }
}