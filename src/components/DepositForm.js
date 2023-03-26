import React, { useState } from 'react';

function DepositForm({ handleDeposit }) {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDeposit(amount);
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button type="submit">Deposit</button>
        </form>
    );
}

export default DepositForm;
