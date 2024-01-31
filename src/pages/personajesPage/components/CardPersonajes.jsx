import { Link } from "react-router-dom"

export const CardPersonajes = ({id, name, status, gender, origin, location, image }) => {
    return (
        <div tabindex="0" className="shadow-xl focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
            <div>
                <img alt={name} src={image} tabindex="0" className="focus:outline-none w-full h-44" />
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                        </svg>
                    </div>

                    <p tabindex="0" className={`${status === "Dead" ? "bg-red-200 text-red-500" : status === "Alive" ? "bg-green-200 text-green-500" : "bg-slate-200 text-slate-500"} rounded-full font-bold px-5`}>{status}</p>

                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">{name}</h2>
                    </div>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{gender === "Male" ? "Hombre" : "Mujer"}</p>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{location.name}</p>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{origin.name}</p>
                </div>


                <Link className="bg-violet-500 text-white p-2 rounded-full" to={`/personaje/${id}`}>Ver Mas</Link>
            </div>
        </div>
    )
}
