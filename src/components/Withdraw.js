import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import accountService from "../services/AccountService";
import Shared from "./Shared";

function Withdraw() {

    const [amount, setAmount] = useState(0);
    const [balance,setBalance]=useState(0);
    const [inputError, setInputError] = useState('');

    const {accountId}=useParams();

    const [account,setAccount]=useState(null);
    useEffect(()=>{
        accountService.getOneAccount(accountId).then(response=>{
            setAccount(response.data)
            setBalance(response.data.balance)
            console.log(response.data.balance)
        })
    },[])

    function handleAmountChange(event) {
        const newValue = parseInt(event.target.value);
        if ( newValue > balance) {
            setInputError('Insufficient funds');
        } else {
            setInputError('');
        }
        if (!isNaN(newValue) && newValue >= 0) {
            setAmount(newValue);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (amount > balance) {
            //alert("Insufficient funds");
            event.preventDefault();
        } else {
            accountService.handleTransaction(accountId,balance,amount,"")
           // alert(`You withdrew ${amount} FCFA`);
        }
        setAmount(0);
        window.location.reload();
    };
    const navigate=useNavigate();

    return (
        <>
            <Shared />
            <h4 className="text-center mt-3"> Account balance is {account?.balance} F </h4>
            <div className="container" >
                <div className = "col d-flex justify-content-end mt-3">
                    <button  type = "button" className = "btn btn-primary" onClick = {() => navigate('/deposit/' + accountId)}>Deposit money</button>
                </div>
                <form onSubmit={handleSubmit} className="container mt-5">
                    <div className="form-group">
                        <label htmlFor="amount">Withdraw Amount :</label>
                        <input type="number" className="form-control mt-3" id="amount" min="0" value={amount} onChange={handleAmountChange} required/>
                        {inputError && <span className="text-danger mt-2">{inputError}</span>}
                    </div>
                    <div className="d-flex justify-content-center p-2 m-3">
                        <button type="submit" className="btn btn-primary mt-3"> Withdraw </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Withdraw;
