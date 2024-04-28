import { URL } from "./constants"

export async function homeRecetas() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}/home/recetas`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))

}