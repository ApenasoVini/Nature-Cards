import React, { useState } from "react";
import { ReactComponent as Icon } from "./assets/img/raio.svg";
import "./assets/css/Cards.css"

const Raio = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Carta" style={{ borderColor: "#a7aa00", backgroundColor: "#fbff00", color: "#000000" }} onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Raio</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p>
                    <b className="Info">Ataque</b> <p className="Descricao">Descargas elétricas rápidas e devastadoras, capazes de atingir alvos com precisão e velocidade</p>
                        <b className="Info">Defesa</b> <p className="Descricao">A eletricidade pode ser canalizada para criar escudos elétricos que absorvem e dissipam ataques inimigos</p>
                </p>
            )}
        </div>
    );
};

export default Raio;