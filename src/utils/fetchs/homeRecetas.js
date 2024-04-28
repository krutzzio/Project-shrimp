import { URL } from "./constants"

export async function homeRecetas() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    try {
        const resp = await fetch(`${URL}/home/recetas`, requestOptions);
        const data = await resp.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}