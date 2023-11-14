import React, { useState } from "react";
import { ReactComponent as Icon } from "./luz.svg";
import "./Luz.css"

const Luz = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Luz" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Luz</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Luz;