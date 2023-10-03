import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/index.tsx"
import { About } from "./about/index.tsx"
import { Contact } from "./contact/index.tsx"
import { Products } from "./products/index.tsx"

const router = createBrowserRouter ([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/about",
        element: <About/>
    }
    {
        path:"/contact",
        element: <Contact/>
    }
    {
        path:"/products",
        element: <Products/>
    }
]);

export{router};