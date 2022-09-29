import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Guser from './Guser';
import './components/Stylee.css';

function GithubUser() {

    const [userData, setUserData] = useState({});
    const [id, setId] = useState('');

    const GetUser = () => {
        axios.get(`https://api.github.com/users/${id}`).then((response) => {
            console.log(response);
            setUserData(response.data);

        })

    }

   const handleChange = (e) => {
         setId(e.target.value);
         
    }
   
    return (
        <div className='main'>
            <h1>Github User Details</h1>
            <input className="input" onChange={handleChange} placeholder="Enter the userName.." />
            <br /><br />

            <button className='btn' onClick={GetUser}>Get Info</button>

            <Guser userData={userData} />

        </div>
    );
}

export default GithubUser;


