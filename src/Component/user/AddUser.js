import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const AddUser = () => {

    const history = useNavigate();
    const initialState = {
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    };
    const [user, setUsers] = useState(initialState);
    const { name, username, email, phone, website } = user;

    const OnChnageInput = event => {
        console.log(event.target.name);
        console.log(event.target.value);
        setUsers({ ...user, [event.target.name]: event.target.value });
    };
    const onFormSubmit = async(event) => {
        event.preventDefault();
        if (!user.name) {
            alert("User name can not be empty...");
            return;
        }
        if (!user.username) {
            alert("username can not be empty...");
            return;
        }
        if (!user.email) {
            alert("User email can not be empty...");
            return;
        }
        if (!user.phone) {
            alert("User phone number can not be empty...");
            return;
        }
        await axios.post("http://localhost:5000/user",user);
        history({pathname:'/'});
    };

    return (
        <div className='container'>
            <div className='w-75 max-auto p-5 shadow'>
                <h2 className='text-center mb-4'>ADD User</h2>
                <form onSubmit={(event) => {onFormSubmit(event)} }>
                    <div className='form-group mb-2'>
                        <input type='text' className='form-control'
                            placeholder='enter your full name...'
                            name="name"
                            value={name}
                            onChange={(event) => OnChnageInput(event)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <input type='text' className='form-control'
                            placeholder='enter your user name*...'
                            name="username"
                            value={username}
                            onChange={(event) => OnChnageInput(event)}
                        />
                    </div>

                    <div className='form-group mb-2'>
                        <input type='email' className='form-control'
                            placeholder='enter your email*...'
                            name="email"
                            value={email}
                            onChange={(event) => OnChnageInput(event)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <input type='text' className='form-control'
                            placeholder='enter your phone number*...'
                            name="phone"
                            value={phone}
                            onChange={(event) => OnChnageInput(event)}
                        />
                    </div>
                    <div className='form-group mb-4'>
                        <input type='text' className='form-control'
                            placeholder='enter your website here...'
                            name="website"
                            value={website}
                            onChange={(event) => OnChnageInput(event)}
                        />
                    </div>
                    <button type="submit" className='btn btn-info text-white col-12'>Add User</button>
                </form>
            </div>

        </div>
    )
}

export default AddUser;