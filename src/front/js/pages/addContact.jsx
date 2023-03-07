import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddContact = () => {
    const { store, actions } = useContext(Context)

    return (<div className="container mt-4 bg-light p-3">
        <div className="d-flex align-items-center">
            <h1>Add Contact</h1>
            <Link to="/"><button type="button" className="btn btn-primary m-3">Go Back</button></Link>
        </div>
        <form className="row g-3">
            <div className="col-md-6">
                <label for="full-name" className="form-label">Full Name:</label>
                <input type="text" className="form-control" id="full-name" name="full-name" placeholder="Enter full name" />
            </div>
            <div className="col-md-6">
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className="col-12">
                <label for="address" className="form-label">Address:</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" />
            </div>
            <div className="col-md-6">
                <label for="phone" className="form-label">Phone:</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone number" />
            </div>
            <div className="col-md-12 d-flex align-items-end justify-content-center">
                <button type="button" className="btn btn-primary w-50 mt-4" onClick={() => {
                    const full_name = document.getElementById("full-name").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const address = document.getElementById("address").value;

                    const newContact = {
                        full_name,
                        email,
                        phone,
                        address,
                        agenda_slug: "agenda_de_david",
                    };
                    actions.addContact(newContact);


                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You have added a new contact to the list',
                        showConfirmButton: true,
                    });

                    document.getElementById("full-name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("address").value = "";
                }}>Submit</button>
            </div>


        </form>

    </div>)
}

export default AddContact;