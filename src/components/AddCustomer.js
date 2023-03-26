import React, { useState } from "react";
import customerService from "../services/CustomerService";
import {useNavigate} from "react-router-dom";
import Shared from "./Shared";

function AddCustomer() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    function handleIdChange(event) {
        setId(event.target.value);
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = { id, firstName, lastName, phone };
        customerService.addACustomer(data)
            .then((response) => {
                if (response.ok) {
                    alert("Customer added successfully!");
                    setId("");
                    setFirstName("");
                    setLastName("");
                    setPhone("");
                } else {
                    alert("Error adding customer!");
                }
            })
            .catch((error) => {
                alert("Error adding customer!");
                console.error(error);
            });
    }

    const navigate=useNavigate()
    return (
        <>
            <Shared />
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
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
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
