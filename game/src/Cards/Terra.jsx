import React, { useState } from "react";
import { ReactComponent as Icon } from "./assets/img/terra.svg";
import "./assets/css/Cards.css"

const Terra = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Carta" style={{ borderColor: "#327700", backgroundColor: "#74553d", color: "#311c00" }} onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Terra</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">A terra pode ser moldada em projéteis sólidos ou terremotos, causando dano físico e desestabilizando os oponentes</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A capacidade de invocar rochas e criar barreiras sólidas oferece uma defesa robusta contra ataques diretos</p>
                </p>
            )}
        </div>
    );
};

export default Terra;