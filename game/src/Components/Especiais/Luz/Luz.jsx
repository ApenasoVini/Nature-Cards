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
                <p className="Descricao">Ataque: A luz pode ser canalizada para cegar adversários, quebrar energias negativas e curar de forma poderosa
                    Defesa: A luz pode ser utilizada para criar escudos resplandecentes que refletem ataques e dissipam as trevas ao seu redor</p>
            )}
        </div>
    );
};

export default Luz;