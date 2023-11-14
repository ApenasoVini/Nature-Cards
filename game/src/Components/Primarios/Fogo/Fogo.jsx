import React, { useState } from "react";
import { ReactComponent as Icon } from "./fogo.svg";
import "./Fogo.css"

const Fogo = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Fogo" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Fogo</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Fogo;