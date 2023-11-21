import React, { useState } from "react";
import { ReactComponent as Icon } from "./trevas.svg";
import "./Trevas.css"

const Trevas = () => {
    const [frente, mudarLado] = useState(true);

    const clique = () => {
        mudarLado(!frente);
    };

    return (
        <div className="Trevas" onClick={clique}>
            {frente ? (
                <React.Fragment>
                    <p className="Nome">Trevas</p>
                    <Icon className="Icon" />
                </React.Fragment>
            ) : (
                <p className="Descricao">Ataque: As trevas podem ser utilizadas para criar sombras traiçoeiras e drenar energia vital
                    Defesa: A capacidade de se fundir nas sombras oferece evasão, enquanto barreiras de escuridão podem proteger contra ataques diretos
                </p>
            )}
        </div>
    );
};

export default Trevas;