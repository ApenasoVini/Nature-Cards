import React from "react";
import { ReactComponent as Icon } from "./agua.svg";
import "./Agua.css"

export default () => {
    return (
        <div className="Container">
            <div className="Background">
                <p>Água</p>
                <Icon className="Icon"></Icon>
            </div>
        </div>
    )
};

