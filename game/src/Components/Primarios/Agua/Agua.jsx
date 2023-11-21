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
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao"> A água pode se transformar em lâminas afiadas, criando ataques cortantes, ou em ondas poderosas para varrer adversários </p>
                    <b className="Info">Defesa</b> <p className="Descricao"> A fluidez da água permite esquivas e a formação de barreiras que absorvem e dissipam ataques</p>
                </p>
            )}
        </div >
    );
};

export default Agua;