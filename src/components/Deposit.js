import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Shared from "./Shared";

function Deposit(){

    const [amount, setAmount] = useState(0);
    const [balance,setBalance]=useState(0)
    function handleAmountChange(event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 0) {
            setAmount(newValue);
        }
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(amount+balance)
        axios.put(accountUrl,{balance:amount +balance})
        //handleDeposit(amount);
        setAmount('');
    };
    return (
        <>
            <Shared />
            <h4 className="text-center mt-3"> Deposit to account  </h4>
            <form onSubmit={handleSubmit} className="container mt-5">
                <div className="form-group">
                    <label htmlFor="amount">Amount :</label>
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
                    <button type="submit" className="btn btn-primary mt-3"> Deposit </button>
                    <button type="button" className="btn btn-danger mt-3"> Cancel </button>
                </div>
            </form>
        </>
    );
}

export default Deposit;