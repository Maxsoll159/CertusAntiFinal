import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRickandMortyId } from "../../helper/apiRickandMorty"

export const PersonajePage = () => {
    const [personaje, setPersonaje] = useState({})
    const params = useParams()
    const {id} = params
    console.log(params)

    useEffect(()=>{
        getRickandMortyId(id).then((res)=>setPersonaje(res))
    },[])

    return (
        <div>PersonajePage con ID {id}
        
            <img src={personaje.image} />
        </div>
    )
}
