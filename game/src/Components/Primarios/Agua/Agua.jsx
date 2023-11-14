import React, { useState } from "react";
import { ReactComponent as Icon } from "./agua.svg";
import "./Agua.css"

const Agua = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Agua" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Água</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Agua;