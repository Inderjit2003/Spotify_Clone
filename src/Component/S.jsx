import React  from 'react';
import axios from 'axios';
import LHome from './LHome';

export default function Signup() {


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/signup', {username,email,password,});
            console.log(response.data); // Handle response data (e.g., show success message)
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form >
                <h1>Signup</h1>
                <input type="text" placeholder="Username" name="username" />
               
                <input type="email" placeholder="Email" name="email" />
             
                <input type="password" placeholder="Password" name="password" />
              
                <button type="submit" onClick={onSubmit}>Signup</button>
            </form>
        </div>
    );
}
