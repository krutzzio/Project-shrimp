import { URL } from "./constants"
import { getUserInfo } from "./userInfo";


export function loginProfile({ loginInfo, userType }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginInfo)
    };

    return fetch(`${URL}${userType ? `/loginRest` : `/loginUser`}`, requestOptions)
        .then(resp => resp.json())
        .then(data => {
            const { id } = data
            return getUserInfo({ id, userType })
        })
        .catch(err => console.log(err))
}