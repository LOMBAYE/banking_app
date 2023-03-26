import React, { useState } from 'react';
import DepositForm from './DepositForm';

function BankApp() {
    const [balance, setBalance] = useState(0);

    const handleDeposit = (amount) => {
        setBalance(balance + parseFloat(amount));
    };

    return (
        <div>
            <h1>Bank App</h1>
            <h2>Balance: ${balance.toFixed(2)}</h2>
            <DepositForm handleDeposit={handleDeposit} />
        </div>
    );
}

export default BankApp;
