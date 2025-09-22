import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function UserLogin() {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({ UserName: '', Password: '' });

    function handleUserName(e) {
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }

    function handlePassword(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }

    function handleLogin() {
        setCookie("username", userDetails.UserName, { path: "/", expires: new Date("September 22, 2025") });
        alert("Login Success...");
    }

    function handleSignout() {
        removeCookie('username');
        alert('Signed out success fully.....');
    }


    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={handleUserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="text" /></dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr />
            <h3>Home <button onClick={handleSignout} className="btn btn-warning">Signout</button></h3>
            Hello !{cookies.username}
        </div>
    )
}