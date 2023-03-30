import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import customerService from "../services/CustomerService";

function Customers() {

    const [listOfCustomers, setListOfCustomers] = useState([])


    useEffect(() => {
        customerService.getAllCustomers().
        then(response => {
            setListOfCustomers(response.data)
        })
    }, [])

    console.log(listOfCustomers);

    const navigate = useNavigate()
    return ( <
        >

        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col d-flex justify-content-end mt-3" >
        <
        button className = "btn btn-primary"
        onClick = {
            () => navigate('/addCustomer')
        } > Add a new customer < /button> < /
        div > <
        /div> < /
        div > <
        table className = "table container table-striped mt-4" >
        <
        thead >
        <
        tr className = "bg-primary mt-bordered" >
        <
        th scope = "col" > # < /th> <
        th scope = "col" > Firstname < /th> <
        th scope = "col" > Lastname < /th> <
        th scope = "col" > Phone < /th> <
        th className = "text-center" > Actions < /th> < /
        tr > <
        /thead> <
        tbody > {
            listOfCustomers.map((customer, i) =>
                <
                tr  >
                <
                th scope = "row" > {++i } < /th> <
                td > { customer.firstname } < /td> <
                td > { customer.lastname } < /td> <
                td > { customer.phone } < /td> <
                td className = "text-center" >
                <
                button type = "button"
                className = "btn btn-primary"
                onClick = {
                    () => navigate('/newAccount/' + customer.id)
                } > Create a new account < /button> <
                button type = "button"
                className = "btn btn-outline-dark m-lg-2"
                onClick = {
                    () => navigate('/details/' + customer.id)
                } > Details < /button> < /
                td > <
                /tr>
            )
        }

        <
        /tbody> < /
        table > <
        />
    )
}
export default Customers;