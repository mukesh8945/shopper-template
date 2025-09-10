import { useFormik } from "formik";
import * as yup from "yup";
export default function YupValidation() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0
        },
        validationSchema: yup.object({
            UserName: yup.string().required('userName Required').min(4, 'Name too short').max(10, 'Name too Long....'),
            Email: yup.string().email(),
            Age: yup.number().required('Number Required').positive().integer(),
            Mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div className="container-fluid">
            <form>
                <h2>User Details</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input{...formik.getFieldProps("Age")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input {...formik.getFieldProps("Mobile")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button className="btn btn-success" type="submit">Register</button>
            </form>

        </div>
    )
}