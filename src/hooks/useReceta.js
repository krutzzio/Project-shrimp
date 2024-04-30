import { useEffect, useState } from "react";
import { getReceta } from "../utils/fetchs/getReceta";

export function useReceta({ recetaId }) {
    const [restauranteReceta, setRestauranteReceta] = useState({})
    const [receta, setReceta] = useState({})
    const [alergias, setAlergias] = useState([])
    const [ingredientesRecetas, setIngredientesRecetas] = useState([])
    const [procedimientosReceta, setProcedimientosReceta] = useState([])


    useEffect(() => {
        const fetch = async () => {
            const data = await getReceta({ recetaId })
            setRestauranteReceta(data.restauranteReceta)
            setReceta(data.receta)
            setAlergias(data.alergias)
            setIngredientesRecetas(data.ingredientesRecetas)
            setProcedimientosReceta(data.procedimientosReceta)
        }
        fetch()
    }, [])

    return { restauranteReceta, receta, alergias, ingredientesRecetas, procedimientosReceta }
}