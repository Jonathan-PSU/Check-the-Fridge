import React, { useEffect, useState } from 'react';
import './FetchData.css';

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [userID, setUserID] = useState([0,]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);  

    useEffect(() => {
        fetch('ApplicationUser/GetUsers')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setUsers(data);
            })
    }, [])

    async function login(uname, pass) {
        await fetch('ApplicationUser/Login/' + uname + '/' + pass, { method: 'POST' })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then((responseJson) => {
                setUserID(responseJson);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleSubmit(event) {
        login(username, password);
        event.preventDefault();
    }
    
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

            <form onSubmit={(event) => handleSubmit(event)} >          
                    <input type="text"  name="name" onChange={(e) => setUsername(e.target.value)} />              
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <br></br>
            <div>
                <h3>Id retrieved: <p>{userID}</p></h3>             
            </div>
            
        </main>
    )
}
export default FetchData;