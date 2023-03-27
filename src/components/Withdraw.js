import React, {useEffect, useState} from "react";
import Shared from "./Shared";
import {useParams} from "react-router-dom";
import axios from 'axios';

function Withdraw() {

    const [amount, setAmount] = useState(0);
    const [balance,setBalance]=useState(0)

    const url = 'http://localhost:3004/accounts';
    const {accountId}=useParams()
    const accountUrl=url +'/'+ accountId;

    const [account,setAccount]=useState(null);
    useEffect(()=>{
        axios.get(accountUrl).
        then(response=>{
            setAccount(response.data)
            setBalance(response.data.balance)
            console.log(response.data.balance)
        })
    },[url])
    function handleAmountChange(event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 0) {
            setAmount(newValue);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (amount > balance) {
            alert("Insufficient funds");
            event.preventDefault();
        } else {
            axios.put(accountUrl,{balance: balance - amount})
            alert(`You withdrew ${amount} FCFA`);
        }
        //handleWithdraw(amount);
        setAmount(0);
    };

    return (
        <>
            <Shared />
            <h4 className="text-center mt-3"> Withdraw from account  </h4>
            <form onSubmit={handleSubmit} className="container mt-5">
                <div className="form-group">
                    <label htmlFor="amount">Withdraw Amount :</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount" min="0"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                    />
                </div>
                <div className="d-flex justify-content-center ">
                    <button type="submit" className="btn btn-primary mt-3"> Withdraw </button>
                    <button type="button" className="btn btn-danger mt-3"> Cancel </button>
                </div>
            </form>
        </>
    );
}

export default Withdraw;
