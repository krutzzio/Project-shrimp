function createFormData({ profile }) {

    const registerData = new FormData()
    for (const prop in profile) {
        if (prop === "photo") {
            registerData.append("photo", profile.photo)
        } else {
            registerData.append(prop, profile[prop])
        }
    }
    const requestOptions = {
        method: 'POST',
        'Content-Type': 'multipart/form-data',
        credentials: 'include',
        body: registerData,
    }
    return requestOptions
}

export async function registroCliente({ client }) {
    const URL = `http://192.168.1.229:3000/api/registerUser`
    const requestOptions = createFormData({ profile: client })

    return fetch(URL, requestOptions)
        .then(resp => {
            if (resp.ok) return true
            else return false
        })
        .catch(err => {
            console.log(err)
            return false
        })
}


export async function registroRest({ rest }) {
    const URL = `http://192.168.1.229:3000/api/registerRest`
    const requestOptions = createFormData({ profile: rest })

    return fetch(URL, requestOptions)
        .then(resp => {
            if (resp.ok) return true
            else return false
        })
        .catch(err => {
            console.log(err)
            return false
        })
}