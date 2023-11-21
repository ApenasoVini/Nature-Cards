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
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">O fluxo de lava derrete tudo em seu caminho, causando dano contínuo e infligindo queimaduras</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A lava pode ser solidificada em escudos resistentes, proporcionando uma defesa impenetrável contra ataques físicos</p>
                </p>
            )}
        </div>
    );
};

export default Lava;