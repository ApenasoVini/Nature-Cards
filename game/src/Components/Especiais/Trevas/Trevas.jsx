import React, { useState } from "react";
import { ReactComponent as Icon } from "./trevas.svg";
import "./Trevas.css"

const Trevas = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Trevas" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Trevas</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Trevas;