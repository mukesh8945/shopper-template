import { useState } from "react"
export function FormComponent() {
    const [users] = useState([
        { UserId: 'john' },
        { UserId: 'john12' },
        { UserId: 'david' },
        { UserId: 'john_nit' }
    ]);

    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);
    const [cityMsg, setCityMsg] = useState('');
    const [userDetails, setUserDetails] = useState({ userId: '', Password: '', City: '' });

    function VerifyUserId(e) {
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserMsg('User Id Taken - Try Another');
                setUserValid(false);
                break;
            } else {
                setUserMsg('User Id Available');
                setUserValid(true);
            }
        }
    }

    function HideUserMsg(e) {
        if (e.target.value === "") {
            setUserMsg('User Id Required');
        } else {
            setUserMsg('');
        }
    }

    function VerifyPassword(e) {
        if (e.target.value.match('/^(?=.*[A-Z])\w{4,10}$/')) {
            setPwdMsg('Strong Password');
        } else {
            if (e.target.value.length < 4) {
                setPwdMsg('Poor Password');
            } else {
                setPwdMsg('Weak password');
            }
        }
    }

    function HidePasswordMsg() {
        setPwdMsg('');
        setCapsStatus(false);
    }

    function VerifyCaps(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.which >= 65 && e.which <= 90) {
            setCapsStatus(true);
        } else {
            setCapsStatus(false);
        }
    }

    function VerifyCity(e) {
        if (e.target.value === "notcity") {
            setCityMsg('Please select City');
        } else {
            setCityMsg('');
        }
    }

    function HandleUserChange(e) {
        setUserDetails({
            UserId: e.target.value,
            Password: userDetails.Password,
            City: userDetails.City
        })
    }

    function HandlePasswordChange(e) {
        setUserDetails({
            UserId: e.target.UserId,
            Password: e.target.value,
            City: userDetails.City
        })
    }

    function VerifyCity(e) {
        if (e.target.value === "notcity") {
            setCityMsg('Please select City');
        } else {
            setCityMsg('');
            setUserDetails({
                ...userDetails,
                City: e.target.value
            });
        }
    }

    function RegisterClick() {
        alert(JSON.stringify(userDetails));
    }


    return (
        <div className="container-fluid m-2 p-2">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <input type="text" onChange={HandleUserChange} onBlur={HideUserMsg} onKeyUp={VerifyUserId} />
            </dl>
            <dd className={(isUserValid == true) ? 'text-success' : 'text-danger'}>{userMsg}</dd>
            <dt>Password</dt>
            <dd>
                <input type="password" onChange={HandlePasswordChange} onKeyPress={VerifyCaps} onBlur={HidePasswordMsg} onKeyUp={VerifyPassword} />
            </dd>
            <dd>{pwdMsg}</dd>
            <dd className={(capsStatus === true) ? 'd-block' : 'd-none'}>
                <span className="text-warning"> <span className="bi bi-exclamation-triangle">Caps ON</span></span>
            </dd>
            <dl>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity}>
                        <option value="notcity">Select your City</option>
                        <option value="hyderabd">Hyderabad</option>
                        <option value="delhi">Delhi</option>
                        <option value="bhopal">Bhopal</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>
            </dl>
            <button onClick={RegisterClick}>Register</button>

        </div>
    )
}
