import { useEffect, useState } from "react";
import { homeRecetas } from "../utils/fetchs/homeRecetas";

export function useHomeRecetas() {
    const [recetasHome, setRecetasHome] = useState([])

    useEffect(() => {
        setRecetasHome(homeRecetas())
        console.log(homeRecetas())
    }, [])

    return { recetasHome }
}