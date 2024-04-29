import { URL } from "./constants"


export function getUserInfo() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}/profileUser`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
}