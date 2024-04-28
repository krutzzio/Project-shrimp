import { useEffect, useState } from "react";
import { homeRecetas } from "../utils/fetchs/homeRecetas";

export function useHomeRecetas() {
    const [recetasRecomendadas, setRecetasRecomendadas] = useState([])
    const [recetasCercanas, setRecetasCercanas] = useState([])
    const [recetasNuevas, setRecetasNuevas] = useState([])
    const RECETAS_LOADING = Array(4).fill(null)


    useEffect(() => {
        const fetch = async () => {
            const data = await homeRecetas()
            setRecetasRecomendadas(data.recetasRecomendadas)
            setRecetasCercanas(data.recetasCercanas)
            setRecetasNuevas(data.recetasNuevas)
        }
        fetch()
    }, [])

    return { recetasRecomendadas, recetasCercanas, recetasNuevas, RECETAS_LOADING }
}