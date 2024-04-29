import { URL } from "./constants"

export async function homeRestaurantes() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}/home/restaurantes`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))

}