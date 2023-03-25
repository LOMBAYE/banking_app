import React, { useEffect, useState } from "react";
import HelloWorld from "../components/HelloWorld";
import axios from 'axios';
import { useParams } from "react-router-dom";

// type CustomProps = {
//     name: string;
//     age: number;
// };


function Details() {
    const { id } = useParams()
    const url = `http: //localhost:3004/customers/${id}`;
    const [customer, setCustomer] = useState(null)

    useEffect(() => {
        axios.get(url).
        then(response => {
            setCustomer(response.data)
        })
    }, [url])

    if (customer) {

        return ( <
            div >
            <
            h2 > Detail of a { customer.name } < /h2> <
            HelloWorld / >
            <
            /div>
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