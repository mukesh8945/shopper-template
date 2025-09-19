import { useState, useEffect } from "react";
export default function ReactHookDemo() {
    const [msg, setMsg] = useState();
    function handleSuccessClick() {
        setMsg(<SuccessComponent />);
    }

    function handleErrorClick() {
        setMsg(<ErrorComponent />);
    }

    return (
        <div className="container-fluid">
            <button onClick={handleSuccessClick} className="btn btn-success m-2">Success</button>
            <button onClick={handleErrorClick} className="btn btn-warning m-2">Invalid</button>
            <hr />
            <div>
                {msg}
            </div>
        </div>
    )
}

function SuccessComponent() {
    useEffect(() => {
        alert('Success Component will Mount');
        return (() => {
            alert('Success Component will Unmount');
        });
    }, []);
    return (
        <div>
            <h2 className="text-success">Login Success..</h2>
        </div>
    )
}

function ErrorComponent() {
    useEffect(() => {
        alert('Error Component will Mount');
        return (() => {
            alert('Error Component will Unmount');
        });
    }, []);
    return (
        <div>
            <h2 className="text-danger">Login Invalid</h2>
        </div>
    )
}