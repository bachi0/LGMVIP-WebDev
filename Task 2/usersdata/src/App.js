import React, { useState } from "react";
import './styles.css';

const App=()=> {
  const[users, setUsers] = useState([]);

  const loadUsers=async()=>{
    console.log("Hello");
    const response = await fetch("https://reqres.in/api/users?page=1" );
    const jsonR = await response.json();
    setUsers(jsonR.data);
  };
return (
    <div className="App">
      <header>
      <button onClick={loadUsers} class="btn btn-light btn-md">  Click to Get User's Data</button>
      </header>
      <ul class ="Bullets">

        {users.map(({ id , email, first_name, last_name, avatar }) => (
          <li class="li"key = {id}> 
            <img class="dp" src={avatar}></img>
            <li class="lione">Name : {first_name} {last_name}</li>
            <li class="lione">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;