import React, { useContext, useState } from "react";

const userDetailsContext = React.createContext(null); //global-scope access across function
export default function ReactHookContext() {
    const [userdetails] = useState({
        UserName: 'john',
        Email: 'rk40@gmail.com'
    });
    return (
        <userDetailsContext.Provider value={userdetails}>
            <div className="container-fluid">
                <h2>Site Index - {userdetails.UserName}</h2>
                <HeaderComponent />
            </div>
        </userDetailsContext.Provider >
    )
}

function HeaderComponent() {
    const userdetails = useContext(userDetailsContext);
    return (
        <div className="bg-info text-white" style={{ height: '250px', padding: '20px' }}>
            <h2>Home - {userdetails.UserName}</h2>
            <NavbarComponent />
        </div>
    )
}

function NavbarComponent() {
    const userdetails = useContext(userDetailsContext);
    return (
        <div className="btn btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userdetails.Email}</button>
            </div>
        </div>
    )
}