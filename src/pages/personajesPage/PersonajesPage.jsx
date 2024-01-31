import { useEffect, useState } from "react"
import { getRickandMorty } from "../../helper/apiRickandMorty"
import { CardPersonajes } from "./components/CardPersonajes"

export const PersonajesPage = () => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        getRickandMorty().then(res => setPersonajes(res.results))
    }, [])

    console.log("personajes", personajes)

    return (
        <section className="container mx-auto">
            <article className="grid grid-cols-4 gap-5">
                {
                    personajes.map((personaje)=>(
                        <CardPersonajes key={personaje.id} {...personaje} />
                    ))
                }

            </article>
        </section>
    )
}
