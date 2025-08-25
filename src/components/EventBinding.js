import { useState, useEffect } from "react"
export default function EventBinding() {
    const [UserName, setUserName] = useState('John');
    function handleUserName(e) {
        setUserName(e.target.value);

    }
    return (
        <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" value={UserName} onChange={handleUserName} /></dd>
            </dl>
            <h1>Hello...!{UserName}</h1>
        </div>
    )
}