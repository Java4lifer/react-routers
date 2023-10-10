import { Outlet } from "react-router-dom"
import { Header } from "../Header/index.tsx"

export function Layout() {
    return(
        <>
            <Header/>
            <Outlet/>
            <br/>
            <footer>
                <span>The end of racism</span>
            </footer>
        </>
    )
}