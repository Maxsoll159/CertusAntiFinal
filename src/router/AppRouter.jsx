import { Route, Routes } from "react-router-dom"
import { HomePage, PersonajePage, PersonajesPage } from "../pages"
import { Navbar } from "../components/ui/Navbar"
import { AppRouterInternas } from "./AppRouterInternas"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<AppRouterInternas />} />
            </Routes>
        </>
    )
}
