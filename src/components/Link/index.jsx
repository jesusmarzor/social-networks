import React, { useEffect, useRef } from "react";
import "./styles.css"

export function Link({label, url, color}) {
    const refLink = useRef();

    useEffect( () => {
        refLink.current.style.borderColor = "transparent";
        refLink.current.style.background = color;
        refLink.current.style.color = "white";
    })

    const onMouseLeaveHandler = () => {
        refLink.current.style.borderColor = "transparent";
        refLink.current.style.background = color;
        refLink.current.style.color = "white";
    };

    const onMouseEnterHandler = () => {
        refLink.current.style.borderColor = color;
        refLink.current.style.background = "transparent";
        refLink.current.style.color = color;
    };

    return(
        <li className="Link">
            <a onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} ref={refLink} className="Link-a" href={url} target="_blank">{label}</a>
        </li>
    )
}