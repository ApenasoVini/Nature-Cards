import React, { useState } from "react";
import { ReactComponent as Icon } from "./verde.svg";
import "./Verde.css"

const Verde = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Verde" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Verde</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Verde;