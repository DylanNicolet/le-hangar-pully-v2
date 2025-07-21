import React from "react";
import ModalSoins from "../components/ModalSoins";
import database from "../soinSpeciauxText.json";

const data = database.soinSpeciauxText;

export default function InfoSoin() {
    // States
    const [selectedCard, setSelectedCard] = React.useState(null);

    // Functions
    const openModal = (cardData) => setSelectedCard(cardData);
    const closeModal = () => setSelectedCard(null);

    return (
        <section className="info-soin">
            <h2>Soins Spéciaux</h2>

            <p>Cliquez pour afficher plus de détails</p>
            
            <section className="card-container">
                {data.map((card, index) => (
                    <button key={index} className="card-with-modal" onClick={() => openModal(card)}>
                        {card.key}
                    </button>
                ))}
            </section>

            {selectedCard && (
                <ModalSoins data={selectedCard} onClose={closeModal} />
            )}
        </section>
    );
}