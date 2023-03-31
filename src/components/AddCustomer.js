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
                    //alert("Error adding customerrrr!");
                }
            })
            .catch((error) => {
                alert("Error adding customer!");
                console.error(error);
            });
        window.location.reload();
    }

    const navigate=useNavigate()
    return (
        <>
            <Shared />
            <h3 className="text-center mt-3">Add a new customer</h3>
         <div className="container" >
             <form onSubmit={handleSubmit} className="container mt-3">
                 <div className="form-group">
                     <label htmlFor="firstname">First Name</label>
                     <input type="text" className="form-control mt-3" id="firstname" placeholder="Enter firstname" value={firstname} onChange={handleFirstNameChange} required/>
                 </div>
                 <div className="form-group mt-2">
                     <label htmlFor="lastname">Last Name</label>
                     <input type="text" className="form-control mt-2" id="lastname" placeholder="Enter lastname" value={lastname} onChange={handleLastNameChange} required/>
                 </div>
                 <div className="form-group mt-2">
                     <label htmlFor="phone">Phone</label>
                     <input type="text" className="form-control mt-2" id="phone" placeholder="Enter phone number" value={phone} onChange={handlePhoneChange} required/>
                 </div>
                 <div className="d-flex justify-content-center">
                     <button type="submit" className="btn btn-primary mt-4 btn-group">
                         Submit
                     </button>
                 </div>
             </form>
         </div>
        </>
    );
}

export default AddCustomer;
