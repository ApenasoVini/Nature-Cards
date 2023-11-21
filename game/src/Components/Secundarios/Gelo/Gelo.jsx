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
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">O gelo pode criar projéteis afiados e escorregadios, causando dano direto e reduzindo a mobilidade do oponente</p>
                    <b className="Info">Defesa</b> <p className="Descricao">Barreiras de gelo sólido podem ser erguidas para bloquear ataques e criar zonas defensivas</p>
                </p>
            )}
        </div>
    );
};

export default Gelo;