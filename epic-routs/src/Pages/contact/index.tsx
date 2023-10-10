import { Link } from "react-router-dom"

export function Contact() {
    return(
        <>
        <div>
            <h1>Welcome to contacts, sucka</h1>
            <Link to="/">Back home</Link>
            <br/>
            <Link to="/about">About us</Link>
        </div>
        </>
    )
}