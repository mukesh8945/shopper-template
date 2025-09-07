import { useFormik } from "formik";
export default function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
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
                </dl>
                <button>Register</button>
            </form>
            <h2>UserDetails</h2>
            <p>{formik.values.UserName}</p>
            <p>{formik.values.Password}</p>
            <p>{formik.values.City}</p>
        </div>
    )
}