import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"

export const PublicRoot = () => {
    return <div className="w-full h-screen bg-slate-200">
     
        <Navbar/>
       <Outlet/>
    </div>
}