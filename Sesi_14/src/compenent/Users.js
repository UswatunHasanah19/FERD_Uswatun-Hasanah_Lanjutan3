import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([])
    let history= useHistory();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data.slice(0, 20)))
    })
return (
    <div>
        <button className="btn btn-success btn-md mb-4" role="button" onClick={()=>{history.push("/");}}>
            Back to Home
        </button>
        <table className="table">
            
            <tbody>
                {
                    users.map((users, index) => (
                        <tr key={index}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                        </tr>
                    ))

                }
            </tbody>
        </table>
    </div>
)
}
