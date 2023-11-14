import React, { useState } from "react";
import { ReactComponent as Icon } from "./lava.svg";
import "./Lava.css"

const Lava = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Lava" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Lava</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Texto</p>
            )}
        </div>
    );
};

export default Lava;