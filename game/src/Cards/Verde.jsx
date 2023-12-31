import React, { useState } from "react";
import { ReactComponent as Icon } from "./assets/img/verde.svg";
import "./assets/css/Cards.css"

const Verde = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Carta" style={{ borderColor: "#043300", backgroundColor: "#00771a", color: "#5eff00" }} onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Verde</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">A energia verde pode ser canalizada para curar aliados, fortalecer plantas para ataques surpresa ou manipular o ambiente natural</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A conexão com a natureza permite a criação de barreiras naturais e a manipulação de plantas para bloquear ataques</p>
                </p>
            )}
        </div>
    );
};

export default Verde;