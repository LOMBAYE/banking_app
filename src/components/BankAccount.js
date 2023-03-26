import React, { useState } from 'react';

function BankModal(props) {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount !== '') {
            props.onSubmit(amount);
            setAmount('');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{props.title}</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                    <button onClick={props.onClose}>Close</button>
                </form>
            </div>
        </div>
    );
}

export default BankModal;
