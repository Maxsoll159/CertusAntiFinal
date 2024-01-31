import { useContext } from "react"
import { ContextLogin } from "../../../context/AppContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigation = useNavigate()

    const {usuario,setUsuario} = useContext(ContextLogin)

    const handleChange = (e) => {
        setUsuario(e.target.value)
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        if(usuario.length > 0){
           localStorage.setItem("nombre", usuario)
           navigation("/personajes", {replace: true})
        }else{
            alert("Debe ingresa un nombre")
        }
    }

    return (
        <form onSubmit={handleLogin} className="mt-5">
            <label htmlFor="username" className="font-semibold space-y-3 block">Ingresa tu nombre:</label>
            <input onChange={handleChange} className="border p-2 rounded-md mt-3 hover:border-blue-500 outline-none" type="text" placeholder="Ingresa tu nombre" />
            <button className="block bg-blue-500 text-white font-semibold  rounded-lg py-2 px-10  mt-5">Ingresar</button>
        </form>
    )
}
