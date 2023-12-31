import React, { useState } from "react";
import { ReactComponent as Icon } from "./assets/img/fogo.svg";
import "./assets/css/Cards.css"

const Fogo = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Carta" style={{ borderColor: "#5e0000", backgroundColor: "#990000", color: "#ff0000" }} onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Fogo</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">O fogo lança chamas intensas que queimam seus adversários, causando danos contínuos ao longo do tempo</p>
                    <b className="Info">Defesa</b> <p className="Descricao">A intensidade das chamas cria uma barreira ardente, dificultando ataques diretos e proporcionando uma zona de controle</p>
                </p>
            )}
        </div>
    );
};

export default Fogo;