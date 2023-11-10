import React from "react";
import { ReactComponent as Icon } from "./fogo.svg";
import "./Fogo.css"

export default () => {
    return (
        <div className="Fogo">
            <p>Fogo</p>
            <Icon className="Icon"></Icon>
        </div>
    )
};