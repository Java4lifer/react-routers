import { Link } from "react-router-dom"

export function Home() {
    return(
        <>
        <div>
            <h1>Welcome home, sucka</h1>
            <Link to="/about">About us</Link>
            <br/>
            <Link to="/products/21">Products</Link>
        </div>
        </>
    )
}