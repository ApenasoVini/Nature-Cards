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
                <p className="Descricao">Ataque: A terra pode ser moldada em projéteis sólidos ou terremotos, causando dano físico e desestabilizando os oponentes
                    Defesa: A capacidade de invocar rochas e criar barreiras sólidas oferece uma defesa robusta contra ataques diretos</p>
            )}
        </div>
    );
};

export default Terra;