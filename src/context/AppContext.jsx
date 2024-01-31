import { createContext, useEffect, useState } from "react";

export const ContextLogin = createContext()

export const AppContext = ({ children }) => {

    const [usuario, setUsuario] = useState("")

    useEffect(() => {
        let user = localStorage.getItem('nombre')
        if (user) {
            setUsuario(user)
        }
    }, [])


    return (
        <ContextLogin.Provider value={{ usuario, setUsuario }}>
            {children}
        </ContextLogin.Provider>
    )
}