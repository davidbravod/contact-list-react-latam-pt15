import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const ContactList = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => { }, [store.listaContactos])

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex align-items-center">
                    <h1>Contact List</h1>
                    <Link to="/add-contact"><button type="button" className="btn btn-primary m-3">Add New Contact</button></Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.listaContactos && store.listaContactos.length > 0 ? <>
                            {store.listaContactos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.full_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <div>
                                                <Link to={"/edit-contact/" + index}><i className="fa-solid fa-pencil"></i></Link>
                                                <i className="fa-solid fa-trash-can ms-4" onClick={() => actions.deleteContact(index)}></i>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </> : (
                            <tr>
                                <td colSpan="6" className="text-center">There are no contacts to show</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactList;