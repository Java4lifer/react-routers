import {Link} from "react-router-dom"

export function Header() {
    return(
        <>
        <header>
            <h2>Team Cirno■</h2>
            <div>
                <Link to="/">Home,  </Link>
                <Link to="/about"> About,  </Link>
                <Link to="/contacts"> Contacts</Link>
            </div>
        </header>
        </>
    )
}