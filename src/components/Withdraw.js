import React, { useState } from "react";

function Withdraw(props) {
    const [amount, setAmount] = useState(0);

    const handleChange = (event) => {
        setAmount(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleWithdraw(amount);
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Withdraw amount:
                <input type="number" value={amount} onChange={handleChange} />
            </label>
            <button type="submit">Withdraw</button>
        </form>
    );
}

export default Withdraw;
