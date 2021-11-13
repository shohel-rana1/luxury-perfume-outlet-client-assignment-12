import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = { email };
        fetch('https://agile-headland-59879.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true)
                }
            })

        e.preventDefault();
    }
    return (
        <div className="my-5">
            <h2 className="my-5">Make an admin</h2>
            <form onSubmit={handleSubmit} className="">
                <input type="email" onBlur={handleOnBlur} placeholder="Email" /> &nbsp;
                <Button type="submit" variant="secondary">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;