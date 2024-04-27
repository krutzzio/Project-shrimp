import { createContext, useState } from "react";

const infoClient = {
    nombre: "",
    correo: "",
    password: "",
    photo: null,
    cp: "",
    dieta: "",
}


export const UserInfoContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function UserInfoProvider({ children }) {

    const [user, setUser] = useState(infoClient)


    return (
        <UserInfoContext.Provider value={{ user, setUser }}>
            {children}
        </UserInfoContext.Provider>
    )
}