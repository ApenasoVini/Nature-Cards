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
                <p className="Descricao">Ataque: O fluxo de lava derrete tudo em seu caminho, causando dano contínuo e infligindo queimaduras
                    Defesa: A lava pode ser solidificada em escudos resistentes, proporcionando uma defesa impenetrável contra ataques físicos</p>
            )}
        </div>
    );
};

export default Lava;