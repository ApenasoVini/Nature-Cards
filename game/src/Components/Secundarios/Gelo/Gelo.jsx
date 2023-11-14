import React, { useState } from "react";
import { ReactComponent as Icon } from "./gelo.svg";
import "./Gelo.css"

const Gelo = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Gelo" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Gelo</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Gelo;