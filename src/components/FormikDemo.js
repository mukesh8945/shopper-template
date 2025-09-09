import { useFormik } from "formik";
export default function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Subscribe: true
        },
        onSubmit: values => {
            alert(`${values.UserName}\n${values.Password}\n${values.City}\n Subscription: ${(values.Subscribe == true) ? "SubScribe" : "UnSubScribe"}`);
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName} /></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Bihar</option>
                        </select>
                    </dd>
                    <dt>SubScribe</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" onChange={formik.handleChange} value={formik.values.Subscribe} /></dd>
                </dl>
                <button>Register</button>

            </form>
        </div>
    )
}