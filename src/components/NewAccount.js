import React, { useEffect, useState } from "react";
import customerService from "../services/CustomerService";
import { useNavigate, useParams } from "react-router-dom";
import Shared from "./Shared";
import axios from 'axios';

function NewAccount() {

    const { customerId } = useParams();
    const url = 'http://localhost:3004/customers';
    //console.log(customerId);

    const [customer,setCustomer]=useState(null)
    const [id, setId] = useState(0);
    const [accountNum, setAccountNum] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios.get(url +'/' + customerId).
        then(response => {
            setCustomer(response.data)
        })
    }, [url])

    function handleIdChange(event) {
        setId(event.target.value);
    }

    function handleAccountNumChange(event) {
        setAccountNum(event.target.value);
    }

    function handleBalanceChange(event) {
        setBalance(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        const data = { id, accountNum, balance,customer };
        console.log(data)
        customerService.addAccount(data)
            .then((response) => {
                if (response.ok) {
                    alert("Customer added successfully!");
                    setId(0);
                    setAccountNum(0);
                    setBalance(0);
                    setCustomer(null);
                } else {
                    alert("Error adding customer!");
                }
            })
            .catch((error) => {
                alert("Error adding customer!");
                console.error(error);
            });
    }

    const navigate = useNavigate()
    return (
        <>
            <Shared/>
            <h4 className="text-center mt-3"> New Account for </h4>
            <form onSubmit={handleSubmit} className="container mt-5">
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        value={id}
                        onChange={handleIdChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountNum">Account number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accountNum"
                        value={accountNum}
                        onChange={handleAccountNumChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="balance">Balance :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="balance"
                        value={balance}
                        onChange={handleBalanceChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Customer
                </button>
            </form>
        </>
    );
}

export default NewAccount;