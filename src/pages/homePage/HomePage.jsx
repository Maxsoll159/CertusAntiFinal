import { Login } from "./components/Login"

export const HomePage = () => {
  return (
    <main className="container mx-auto">
        <article className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
            <div>
                <h1 className="font-bold text-2xl text-blue-800">Aplicativo Rick and Morty</h1>
                <Login />
            </div>
            <div>
                <img src="https://e1.pngegg.com/pngimages/248/746/png-clipart-rick-and-morty-hq-resource-rick-and-morty.png" alt="rick and Morty" className="mx-auto animate-bounce transition duration-75 ease-in-out" width={300} height={300} />
            </div>
        </article>
    </main>
  )
}
