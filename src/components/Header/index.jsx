import React from "react";
import image from "@/assets/img/perfil.jpg";
import "./styles.css"

export function Header() {
    return (
        <header className="Header">
            <img className="Header-img" src={image}/>
            <h1 className="Header-h1">@jesusmarzor</h1>
        </header>
    )
}