import React from "react"
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import About from "./src/pages/About"
import Home from "./src/pages/Home"

const myRouter = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/about',
        element : <About/>
    }
])

function App(){

    return <main>
        <Outlet></Outlet>
    </main>
}




const root = ReactDOM.createRoot( document.getElementById("root"))

root.render(<RouterProvider router={myRouter} />)
