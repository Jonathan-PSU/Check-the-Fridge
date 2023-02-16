import React, { Component, useEffect, useState } from 'react';
import './FetchData.css';

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('ApplicationUser/get')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setUsers(data);
            })
    }, [])

    return (
        <main>
            
                <table>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                {
                    (users != null) ? users.map((user) =>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    ) : <div>Loading...</div>
                }
                </table>  
            
        </main>
    )
}
export default FetchData;