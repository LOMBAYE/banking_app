import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Shared from "../components/Shared";
import customerService from "../services/CustomerService";
import accountService from "../services/AccountService";



function Details() {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [accountsOfCustomer,setAccountsOfCustomer]=useState([])

    useEffect(() => {
        customerService.getACustomer(id).
        then(response => {
            setCustomer(response.data)
        })
    }, [])

    useEffect(()=>{
        accountService.getAllAccounts().then(
            response=>{
                setAccountsOfCustomer(response.data.filter(
                    obj=>obj.customer.id===parseInt(id)
                ))}
        )
        },[])

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
                                    <button type="button" className="btn btn-primary" onClick = {() => navigate('/withdraw/' + account.id)} >Withdraw</button>
                                    <button type="button" className="btn btn-info m-2" onClick = {() => navigate('/deposit/' + account.id)}>Deposit</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                )}

            </div>
            </>
        )
    }


}
export default Details;