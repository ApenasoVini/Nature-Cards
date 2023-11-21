import React, { useState } from "react";
import { ReactComponent as Icon } from "./cristal.svg";
import "./Cristal.css"

const Cristal = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Cristal" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Cristal</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">Energias podem ser canalizadas através dos cristais, criando ataques poderosos de luz</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A habilidade de criar escudos cristalinos fornece uma defesa durável contra ataques mágicos e físicos</p>
                </p>
            )}
        </div>
    );
};

export default Cristal;