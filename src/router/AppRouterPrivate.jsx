import { useContext, useEffect, useState } from "react"
import { ContextLogin } from "../context/AppContext"
import { Navigate } from "react-router-dom"

export const AppRouterPrivate = ({children}) => {

    const {usuario} = useContext(ContextLogin)
    console.log(usuario)

    const [pendiente, setPediente] = useState(true)

    useEffect(()=> {
        setPediente(false)
    }, [usuario])

    if(pendiente){
        return <div>Cargando...</div>
    }

    return  usuario ? children : <Navigate to="/" />
}
