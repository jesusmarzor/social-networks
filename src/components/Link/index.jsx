import React, { useEffect, useRef } from "react";
import "./styles.css"

export function Link({label, url, color, textColor}) {
    const refLink = useRef();

    useEffect( () => {
        onMouseLeaveHandler()
    })

    const onMouseLeaveHandler = () => {
        if(label === "Instagram") {
            refLink.current.style.borderImage = color;
            refLink.current.style.borderImageSlice = "1 fill"
        } else {
            refLink.current.style.borderColor = "transparent";
            refLink.current.style.background = color;
        }
        refLink.current.style.color = "white";
    };

    const onMouseEnterHandler = () => {
        if(label === "Instagram") {
            refLink.current.style.borderImage = "transparent";
            refLink.current.style.borderImageSlice = "1 1 1 1";
        } else {
            refLink.current.style.borderColor = color;
            refLink.current.style.background = "transparent";
        }
        refLink.current.style.color = textColor;
    };

    return(
        <li className="Link">
            <a ref={refLink} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className="Link-a" href={url} target="_blank">{label}</a>
        </li>
    )
}