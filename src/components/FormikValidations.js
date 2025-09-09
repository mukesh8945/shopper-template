import { useFormik } from "formik"
export default function FormikValidations() {
    function VerifyUserDetails(userDetails) {
        const errors = {};
        if (userDetails.userName === "") {
            errors.userName = "User Name Required";
        } else if (userDetails.userName.length < 4) {
            errors.userName = "Name too short";
        } else if (userDetails.userName.length > 10) {
            errors.userName = "Name too long....";
        }
        if (userDetails.Age === "") {
            errors.Age = "Age Required";
        } else if (isNaN(userDetails.Age)) {
            errors.Age = "Age Must Be Number";
        }
        if (userDetails.Email === "") {
            errors.Email = "Email are Required";
        } else if (userDetails.Email.indexOf("@") <= 2) {
            errors.Email = "Invalid Email";
        }
        if (userDetails.Mobile === "") {
            errors.Mobile = "Mobile number Required";
        } else if (userDetails.Mobile.match(/^\+91\d{10}$/)) {

        } else {
            errors.Mobile = "Invalid Mobile Number";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },
        validate: VerifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (

        < div className="container-fluid" >
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <h2>Register User</h2>
                    <dt>UserName</dt>
                    <dd><input type="text" name="userName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.userName}</dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>

        </div >
    )
}