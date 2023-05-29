import React from 'react'

function ContactPage() {
    return (
        <div className='container'>
            <h2 className='py-3'>Contact Page</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="query" />
                    <label className="form-check-label" for="query">Your Query</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactPage