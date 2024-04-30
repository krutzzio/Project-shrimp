import { URL } from "./constants"

export async function crearPromo({ codigo, restId, userInsta }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ codigo, restId, userInsta })
    };

    return fetch(`${URL}/promos`, requestOptions)
        .then(resp => resp.json())
        .then(data => data.in)
        .catch(err => console.log(err))
}