import React, { useState } from "react";
import { ReactComponent as Icon } from "./ar.svg";
import "./Ar.css"

const Ar = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Ar" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Ar</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Ataque: O ar pode criar tornados, cortando tudo em seu caminho, ou ser concentrado em rajadas rápidas e precisas
                    Defesa: A habilidade de controlar correntes de ar permite evasões ágeis, e a criação de barreiras invisíveis oferece proteção contra ataques diretos</p>
            )}
        </div>
    );
};

export default Ar;