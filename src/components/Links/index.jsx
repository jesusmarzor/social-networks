import React from "react";
import links from "@/utils/links"
import { Link } from "@/components/Link";

export function Links() {
    return(
        <ul className="Links">
            {
                links.map( ({label, url, color}) => {
                    return <Link
                        key={label}
                        label = {label}
                        url = {url}
                        color = {color}
                    />
                })
            }
        </ul>
    )
}