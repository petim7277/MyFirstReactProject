import React from "react";
import NavBar from "../Reusables/NavBar";
import Footer from "../Reusables/Footer";
import {Outlet} from "react-router-dom";



const Layout = ()=>{
    return(
        <>
         <NavBar/>
         <Outlet/>
         <Footer/>
        </>

    )
}
 export default Layout;
