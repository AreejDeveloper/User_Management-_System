import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const ViewUser = () => {

    const { userId } = useParams();
    const initialState = {
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    };
    const [user, setUsers] = useState(initialState);
    const { name, username, email, phone, website } = user;

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setUsers(response.data);
    }

    return (
        <div className='container py-4'>
            <h2 className='text-center mb-4'>View User Data</h2>
            <form>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={user.name} readonly/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">User Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={user.username} readonly />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" readonly>Email</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={user.email} readonly/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" readonly>Phone</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={user.phone} readonly/>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ViewUser;