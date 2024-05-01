import { useEffect, useState } from "react";
import { getPromosRest } from "../utils/fetchs/getPromosRest";

export function usePerfilRest({ restId }) {
    const [promos, setPromos] = useState([])
    const [cocinasRest, setCocinasRest] = useState([])
    const [recetasRestaurante, setRecetasRestaurante] = useState([])


    useEffect(() => {
        const fetch = async () => {
            const data = await getPromosRest({ restId })
            setPromos(data.promosRest)
            setCocinasRest(data.tiposCocinas)
            setRecetasRestaurante(data.recetasRest)


        }
        fetch()
    }, [])

    return { promos, setPromos, cocinasRest, recetasRestaurante }
}