import React, { useState } from "react";
import customerService from "../services/CustomerService";
import {useNavigate} from "react-router-dom";
import Shared from "./Shared";

function AddCustomer() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");


    function handleFirstNameChange(event) {
        setFirstname(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastname(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = { firstname, lastname, phone };
        console.log(data)
        customerService.addACustomer(data)
            .then((response) => {
                if (response.ok) {
                    alert("Customer added successfully!");
                    setFirstname("");
                    setLastname("");
                    setPhone("");
                } else {
                    alert("Error adding customerrrr!");
                }
            })
            .catch((error) => {
                alert("Error adding customer!");
                console.error(error);
            });
        navigate('/customers');
    }

    const navigate=useNavigate()
    return (
        <>
            <Shared />
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={firstname}
                    onChange={handleFirstNameChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={lastname}
                    onChange={handleLastNameChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
                Add Customer
            </button>
        </form>
        </>
    );
}

export default AddCustomer;
