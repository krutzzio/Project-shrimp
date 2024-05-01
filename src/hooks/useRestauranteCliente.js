import { useEffect, useState } from "react";
import { RestauranteClient } from "../utils/fetchs/RestauranteClient";
import { seguirRestaurante } from "../utils/fetchs/seguirRestaurante";

export function useRestauranteCliente({ restId }) {
    const [recetasRest, setRecetasRest] = useState([])
    const [restaurante, setRestaurante] = useState({})
    const [cocinasRest, setCocinasRest] = useState([])
    const [restGuardado, setRestGuardado] = useState()

    const handleSeguirRest = async (event) => {
        event.preventDefault();
        const restUser = await seguirRestaurante({ restId: restaurante.id })
        setRestGuardado(restUser)
    }
    useEffect(() => {
        const fetch = async () => {
            const data = await RestauranteClient({ restId })
            setRestaurante(data.restaurante)
            setCocinasRest(data.tiposCocinas)
            setRecetasRest(data.recetasRestaurante)
            setRestGuardado(data.restInUser)
        }
        fetch()
    }, [])

    return { recetasRest, restaurante, restGuardado, handleSeguirRest,cocinasRest }
}