import React from "react"
import ReactDOM from "react-dom"
import logo from "../assets/airbnb-logo.png"


export default function Navbar(){

    return (
        <>
        <nav>
          <img src={logo}  className="nav--logo"/>
        </nav>
        </>)
}