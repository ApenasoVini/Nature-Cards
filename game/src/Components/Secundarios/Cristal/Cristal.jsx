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
                <p className="Descricao">Ataque: Energias podem ser canalizadas através dos cristais, criando ataques poderosos de luz
                    Defesa: A habilidade de criar escudos cristalinos fornece uma defesa durável contra ataques mágicos e físicos</p>
            )}
        </div>
    );
};

export default Cristal;