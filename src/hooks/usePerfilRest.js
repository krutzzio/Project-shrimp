import { useEffect, useState } from "react";
import { RestProfile } from "../utils/fetchs/RestProfile";

export function usePerfilRest({ restId }) {
    const [promos, setPromos] = useState([])
    const [cocinasRest, setCocinasRest] = useState([])
    const [recetasRestaurante, setRecetasRestaurante] = useState([])


    useEffect(() => {
        const fetch = async () => {
            const data = await RestProfile({ restId })
            setPromos(data.promosRest)
            setCocinasRest(data.tiposCocinas)
            setRecetasRestaurante(data.recetasRest)
        }
        fetch()
    }, [])

    return { promos, setPromos, cocinasRest, recetasRestaurante }
}