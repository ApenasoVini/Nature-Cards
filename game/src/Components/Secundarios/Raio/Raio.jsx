import React, { useState } from "react";
import { ReactComponent as Icon } from "./raio.svg";
import "./Raio.css"

const Raio = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Raio" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Raio</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Raio;