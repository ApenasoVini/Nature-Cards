import React, { useState } from "react";
import { ReactComponent as Icon } from "./assets/img/ar.svg";
import "./assets/css/Cards.css"

const Ar = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Carta" style={{ borderColor: "#b1b1b1", backgroundColor: "#ebebff", color: "#707070" }} onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Ar</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">O ar pode criar tornados, cortando tudo em seu caminho, ou ser concentrado em rajadas rápidas e precisas</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A habilidade de controlar correntes de ar permite evasões ágeis, e a criação de barreiras invisíveis oferece proteção contra ataques diretos</p>
                </p>
            )}
        </div>
    );
};

export default Ar;