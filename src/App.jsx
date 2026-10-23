import React, { useEffect, useState } from 'react'
import "./App.css"
import Card from './components/card/Card'

const App = () => {
    const [users, setUsers] = useState([]);
    // 1. Changed to standard camelCase: setIsLoading
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            try {
                setIsLoading(true);

                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await response.json();

                setUsers(users);

            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchUser();
    }, [])

    // Fixed spelling of Loading
    if (isLoading) return <p>Loading...</p> 

    return (
        <>
            <h1>User List</h1>
            <div className="container" id="userContainer">
                {/* 2. Wrapped the map function in curly braces {} */}
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </>
    )
}

export default App