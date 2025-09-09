import { useFormik } from "formik";
import * as yup from "yup";
export default function YupValidation() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0
        },
        validationSchema: yup.object({
            UserName: yup.string().required('userName Required').min(4, 'Name too short').max(10, 'Name too Long....'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div className="container-fluid">
            <form>
                <h2>User Details</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input type="text" /></dd>
                    <dd className="text-danger">Email Required</dd>
                    <dt>Age</dt>
                    <dd><input type="text" /></dd>
                    <dd className="text-danger">Age are Required</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" /></dd>
                    <dd className="text-danger">Mobile Number are Required</dd>
                </dl>
                <button className="btn btn-success" type="submit">Register</button>
            </form>

        </div>
    )
}