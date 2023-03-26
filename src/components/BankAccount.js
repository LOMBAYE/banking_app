import React, { useState } from "react";
import TransactionModal from "./TransactionModal";

const BankAccount = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionType, setTransactionType] = useState("");

    const handleDeposit = () => {
        setTransactionType("deposit");
        setShowModal(true);
    };

    const handleWithdrawal = () => {
        setTransactionType("withdraw");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTransactionType("");
    };

    const handleTransactionSubmit = (amount) => {
        if (transactionType === "deposit") {
            // handle deposit logic
        } else if (transactionType === "withdraw") {
            // handle withdrawal logic
        }
        handleCloseModal();
    };

    return (
        <div>
            <h1>Account Balance: $100</h1>
            <button onClick={handleDeposit}>Deposit Funds</button>
            <button onClick={handleWithdrawal}>Withdraw Funds</button>
            <TransactionModal
                isOpen={showModal}
                onClose={handleCloseModal}
                type={transactionType}
                onSubmit={handleTransactionSubmit}
            />
        </div>
    );
};

export default BankAccount;
