import React, { useState } from "react";
import Withdraw from "./Withdraw";

function Account(props) {
    const [balance, setBalance] = useState(1000);

    const handleWithdraw = (amount) => {
        if (amount > balance) {
            alert("Insufficient funds");
        } else {
            setBalance(balance - amount);
            alert(`You withdrew ${amount} dollars`);
        }
    };

    return (
        <div>
            <h1>Account Balance: {balance}</h1>
            <Withdraw handleWithdraw={handleWithdraw} />
        </div>
    );
}

export default Account;
