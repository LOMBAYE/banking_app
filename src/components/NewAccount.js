import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import accountService from "../services/AccountService";
import customerService from "../services/CustomerService";
import Shared from "./Shared";

function NewAccount() {

    const { customerId } = useParams();

    const [customer,setCustomer]=useState(null)
    const [accountNum, setAccountNum] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        customerService.getACustomer(customerId).
        then(response => {
            setCustomer(response.data)
            console.log(response.data)
        })
    }, [])


    function handleAccountNumChange(event) {
        setAccountNum(event.target.value);
    }

    function handleBalanceChange(event) {
        setBalance(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        const data = { accountNum, balance};
        console.log(data)
        accountService.addAccount(customer.id,data)
            .then((response) => {
                if (response.ok) {
                   // alert("Customer added successfully!");
                    setAccountNum(0);
                    setBalance(0);
                    setCustomer(null);
                } else {
                    //alert("Error adding customer!");
                }
            })
            .catch((error) => {
                //alert("Error adding customerrr!");
              //  console.error(error);
            });
        window.location.reload();
    }

    return (
        <>
            <Shared />
            <h4 className="text-center mt-3"> New Account for {customer?.firstname} </h4>
            <div className="container" >
                <form onSubmit={handleSubmit} className="container mt-5">
                    <div className="form-group">
                        <label htmlFor="accountNum">Account number</label>
                        <input type="number" className="form-control mt-3 " id="accountNum" min="1" value={accountNum} onChange={handleAccountNumChange} required/>
                    </div>
                    <div className="form-group mt-3 ">
                        <label htmlFor="balance">Balance </label>
                        <input type="number" className="form-control mt-3" id="balance" min="1"  value={balance} onChange={handleBalanceChange} required/>
                    </div>
                    <div className="d-flex justify-content-center p-2 ">
                        <button type="submit" className="btn btn-primary mt-3">Add Account </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewAccount;
