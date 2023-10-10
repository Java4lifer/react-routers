import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../Components/Layout/index.tsx"
import { Home } from "./home/index.tsx"
import { About } from "./about/index.tsx"
import { Contact } from "./contact/index.tsx"
import { Products } from "./products/index.tsx"
import { NotFound } from "./NotFound/notFound.tsx"

const router = createBrowserRouter ([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/products/:id",
                element: <Products/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    }
    
    
]);

export{router};