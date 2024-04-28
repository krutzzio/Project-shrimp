import { useEffect, useState } from "react";
import { homeRecetas } from "../utils/fetchs/homeRecetas";

export function useHomeRecetas() {
    const [recetasRecomendadas, setRecetasRecomendadas] = useState([])
    const [recetasCercanas, setRecetasCercanas] = useState([])
    const [recetasNuevas, setRecetasNuevas] = useState([])




    useEffect(() => {
        const fetch = async () => {
            const data = await homeRecetas()
            setRecetasRecomendadas(data.recetasRecomendadas)
            setRecetasCercanas(data.recetasCercanas)
            setRecetasNuevas(data.recetasNuevas)
        }
        fetch()
    }, [])

    return { recetasRecomendadas, recetasCercanas, recetasNuevas }
}