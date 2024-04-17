import { createContext, useState } from "react";

export const ThemeContext = createContext({ userType: false })

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {

    const [userType, setUserType] = useState(false)

    return (
        <ThemeContext.Provider value={{ userType, setUserType }}>
            {children}
        </ThemeContext.Provider>
    )

}