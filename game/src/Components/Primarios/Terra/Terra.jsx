import React, { useState } from "react";
import { ReactComponent as Icon } from "./terra.svg";
import "./Terra.css"

const Terra = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Terra" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Terra</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Terra;