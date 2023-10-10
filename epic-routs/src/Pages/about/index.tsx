import { Link } from "react-router-dom"

export function About() {
    return(
    <>
       <h1> Howdy, welcome to about this stuff</h1>
       <Link to="/">Back home</Link>
       <br/>
       <Link to="/products/Fish">Our product list</Link>
    </>
    )
}