import { URL } from "./constants"

export async function seguirReceta({ recetaId }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}/seguirReceta/${recetaId}`, requestOptions)
        .then(resp => resp.json())
        .then(data => data.in)
        .catch(err => console.log(err))
}