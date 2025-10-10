import { useNavigate } from "react-router-dom";

export default function Register() {
    let navigate = useNavigate();
    function HandleClick() {
        navigate("/login");
    }
    return (
        <div className="container-fluid">
            <h2>User Register.</h2>
            <button onClick={HandleClick}>Go to Login</button>
        </div>
    )
}