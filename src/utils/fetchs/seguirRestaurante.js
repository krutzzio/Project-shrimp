import { URL } from "./constants"

export async function seguirRestaurante({ restId }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}/seguirRest/${restId}`, requestOptions)
        .then(resp => resp.json())
        .then(data => data.in)
        .catch(err => console.log(err))
}