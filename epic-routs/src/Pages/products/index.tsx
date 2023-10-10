import { Link, useParams } from "react-router-dom"

export function Products() {
    const {id} = useParams()

    return(
        <>
        <div>
            <h1>Here is a list of products: (They aren't real)</h1>
            <Link to="/">Back home</Link>
            <br/>
            <Link to="/contact">Contact us</Link>
            <br/>
            <p>Product ID is "{id}"</p>
        </div>
        </>
    )
}