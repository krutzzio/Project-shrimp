import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/fetchs/userProfile";

export function usePerfilCliente() {
    const [restaurantesGuardados, setRestaurantesGuardados] = useState([])
    const [recetasGuardadas, setRecetasGuardadas] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = await getUserInfo()
            setRestaurantesGuardados(data.restUser)
            setRecetasGuardadas(data.recetasUser)
        }
        fetch()
    }, [])

    return { restaurantesGuardados, recetasGuardadas }
}