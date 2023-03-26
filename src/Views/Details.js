import React, { useEffect, useState } from "react";
import HelloWorld from "../components/HelloWorld";
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
import Shared from "../components/Shared";
import TransactionModal from "../components/TransactionModal";

// type CustomProps = {
//     name: string;
//     age: number;
// };


function Details() {
    const { id } = useParams()
    const url = 'http://localhost:3004/customers';
    const [customer, setCustomer] = useState(null)
    const [accountsOfCustomer,setAccountsOfCustomer]=useState([])

    useEffect(() => {
        axios.get(url +'/' + id).
        then(response => {
            setCustomer(response.data)
            console.log(response.data)
        })
    }, [url])

    useEffect(() => {
        axios.get(url +'/' + id).
        then(response => {
            setAccountsOfCustomer(response.data.accounts)
            console.log(response.data.accounts)
        })
    }, [url])

    //Deposit or withdraw
    const [showModal, setShowModal] = useState(false);
    const [transactionType, setTransactionType] = useState("");

    const handleDeposit = () => {
        setTransactionType("deposit");
        setShowModal(true);
    };

    const handleWithdrawal = () => {
        setTransactionType("withdraw");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTransactionType("");
    };

    const handleTransactionSubmit = (amount) => {
        if (transactionType === "deposit") {
            // handle deposit logic
            alert("deposit")
        } else if (transactionType === "withdraw") {
            // handle withdrawal logic
            alert("submitted")
        }
        handleCloseModal();
    };
//
    const navigate = useNavigate()


    if (customer) {
        return (
            <>
            <Shared/>
            <h1 class="title text-center mt-3">Details of {customer.firstname} {customer.lastname} 's account</h1>
            <div className="container mt-5">
                {accountsOfCustomer && (
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr className="bg-primary mt-bordered">
                            <th scope="col">#</th>
                            <th scope="col">BankAccount</th>
                            <th scope="col">Balance</th>
                            <th className="text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {accountsOfCustomer.map((account, i) =>
                            <tr>
                                <td>{++i}</td>
                                <td> {account.accountNum}</td>
                                <td>{account.balance} FCFA</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-primary" onClick = {
                                        () => navigate('/accounts/' + account.id)
                                    } >Withdraw</button>
                                    <button type="button" className="btn btn-info m-2" onClick = {
                                        () => navigate('/accounts/' + account.id)
                                    }>Deposit</button>
                                </td>
                                <TransactionModal
                                    isOpen={showModal}
                                    onClose={handleCloseModal}
                                    type={transactionType}
                                    onSubmit={handleTransactionSubmit}
                                />
                            </tr>
                        )}
                        </tbody>
                    </table>
                )}

            </div>
            </>
        )
    }
    return ( <
        div >
        <
        HelloWorld / >
        <
        /div>
    )

}
export default Details;