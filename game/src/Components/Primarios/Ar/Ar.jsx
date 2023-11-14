import React, { useState } from "react";
import { ReactComponent as Icon } from "./ar.svg";
import "./Ar.css"

const Ar = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Ar" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Ar</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Ar;