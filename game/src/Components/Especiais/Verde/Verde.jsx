import React, { useState } from "react";
import { ReactComponent as Icon } from "./verde.svg";
import "./Verde.css"

const Verde = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Verde" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Verde</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Ataque: A energia verde pode ser canalizada para curar aliados, fortalecer plantas para ataques surpresa ou manipular o ambiente natural
                    Defesa: A conexão com a natureza permite a criação de barreiras naturais e a manipulação de plantas para bloquear ataques</p>
            )}
        </div>
    );
};

export default Verde;