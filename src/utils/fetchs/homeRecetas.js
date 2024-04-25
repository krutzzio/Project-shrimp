export function homeRecetas() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`http://localhost:3000/api/home/recetas`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
}