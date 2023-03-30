import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import accountService from "../services/AccountService";
import Shared from "./Shared";

function Deposit(){

    const [amount, setAmount] = useState(0);
    const [balance,setBalance]=useState(0);

    function handleAmountChange(event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 0) {
            setAmount(newValue);
        }
    }

    const {accountId}=useParams()

    const [account,setAccount]=useState(null);
    useEffect(()=>{
        accountService.getOneAccount(accountId).
            then(response=>{
                setAccount(response.data)
                setBalance(response.data.balance)
            console.log(response.data.balance)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(amount+balance)
        accountService.handleTransaction(accountId,balance,amount,"deposit")
        window.location.reload();
    };
    const navigate=useNavigate();

    return (
        <>
            <Shared />
            <h4 className="text-center mt-3"> Account balance is {account?.balance} F </h4>
            <div className="container">
                <div className = "col d-flex justify-content-end mt-3">
                    <button  type = "button" className = "btn btn-primary" onClick = {() => navigate('/withdraw/' + accountId)}>Withdraw money</button>
                </div>
                <form onSubmit={handleSubmit} className="container mt-5">
                    <div className="form-group">
                        <label htmlFor="amount">Amount :</label>
                        <input type="number" className="form-control" id="amount" min="0" value={amount} onChange={handleAmountChange} required/>
                    </div>
                    <div className="d-flex justify-content-center p-2 m-3">
                        <button type="submit" className="btn btn-primary mt-3"> Deposit </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Deposit;