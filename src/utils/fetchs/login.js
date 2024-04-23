export function loginProfile({ loginInfo, userType }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginInfo)
    };

    return fetch(`http://localhost:3000/api/${userType ? `/loginRest` : `/loginUser`}`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
}