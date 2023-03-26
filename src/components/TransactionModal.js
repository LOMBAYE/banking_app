import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const TransactionModal = ({ isOpen, onClose, type, onSubmit }) => {
    const [amount, setAmount] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(amount);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>{type === "withdraw" ? "Withdraw" : "Deposit"} Funds</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </label>
                <button type="submit">{type === "withdraw" ? "Withdraw" : "Deposit"}</button>
                <button type="button" onClick={onClose}>
                    Cancel
                </button>
            </form>
        </Modal>
    );
};

export default TransactionModal;
