import { useEffect, useState } from "react";
import { getReceta } from "../utils/fetchs/getReceta";
import { seguirRestaurante } from "../utils/fetchs/seguirRestaurante";
import { seguirReceta } from "../utils/fetchs/seguirReceta";

export function useReceta({ recetaId }) {
    const [restauranteReceta, setRestauranteReceta] = useState({})
    const [receta, setReceta] = useState({})
    const [tipoCocina, setTipoCocina] = useState({})
    const [alergias, setAlergias] = useState([])
    const [ingredientesRecetas, setIngredientesRecetas] = useState([])
    const [procedimientosReceta, setProcedimientosReceta] = useState([])

    const [restGuardado, setRestGuardado] = useState()
    const [recetaGuardada, setRecetaGuardada] = useState()

    const handleSeguirReceta = async (event) => {
        event.preventDefault();
        const recetaUser = await seguirReceta({ recetaId: receta.id })
        setRecetaGuardada(recetaUser)
    }

    const handleSeguirRest = async (event) => {
        event.preventDefault();
        const restUser = await seguirRestaurante({ restId: restauranteReceta.id })
        setRestGuardado(restUser)
    }

    useEffect(() => {
        const fetch = async () => {
            const data = await getReceta({ recetaId })
            setRestauranteReceta(data.restauranteReceta)
            setReceta(data.receta)
            setTipoCocina(data.tipoCocina)
            setAlergias(data.alergias)
            setIngredientesRecetas(data.ingredientesRecetas)
            setProcedimientosReceta(data.procedimientosReceta)
            setRestGuardado(data.restauranteReceta.restInUser)
            setRecetaGuardada(data.receta.recetaInUser)
        }
        fetch()
    }, [])

    return {
        restauranteReceta, receta, tipoCocina, alergias, ingredientesRecetas, procedimientosReceta,
        restGuardado, handleSeguirRest, recetaGuardada, handleSeguirReceta
    }
}