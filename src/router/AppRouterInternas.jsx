import { Route, Routes } from "react-router-dom"
import { PersonajePage, PersonajesPage } from "../pages"
import { Navbar } from "../components/ui/Navbar"
import { AppRouterPrivate } from "./AppRouterPrivate"


export const AppRouterInternas = () => {
    return (
        <AppRouterPrivate>
            <Navbar />
            <Routes>
                <Route path="/personajes" element={<PersonajesPage />} />
                <Route path="/personaje/:id" element={<PersonajePage />} />
            </Routes>
        </AppRouterPrivate>

    )
}
