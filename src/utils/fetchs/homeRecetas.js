export async function homeRecetas() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    try {
        const resp = await fetch(`http://localhost:3000/api/home/recetas`, requestOptions);
        const data = await resp.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}