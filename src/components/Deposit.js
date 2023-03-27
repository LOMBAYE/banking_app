import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import Shared from "./Shared";
import accountService from "../services/AccountService";

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
        alert(amount+balance)
        accountService.handleTransaction(accountId,balance,amount,"deposit")
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