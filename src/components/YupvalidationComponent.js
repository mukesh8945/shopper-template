import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';
export default function YupvalidationComponent() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Email: '',
                    Age: '',
                    City: ''
                }
            }
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4, 'Name to short').max(10, 'Name to Long').required('Name Required'),
                        Email: yup.string().email('invalid email').required('Email required'),
                        Age: yup.number().required('Age Required').typeError('Age must be number'),
                        City: yup.string().required('City Name Reqwired')
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values, null, 2));
                    }
                }
            >
                {
                    fields =>
                        <Form>
                            {
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        <dd><Field name="UserName" type="text" /></dd>
                                        <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                                        <dt>Email</dt>
                                        <dd><Field name="Email" type="text"></Field></dd>
                                        <dd className="text-danger"><ErrorMessage name="Email" /></dd>
                                        <dt>Age</dt>
                                        <dd><Field name="Age" type="text"></Field></dd>
                                        <dd className="text-danger"><ErrorMessage name="Age" /></dd>
                                        <dt>City</dt>
                                        <dd>
                                            <Field as="select" name="City">
                                                <option value="">Select a city</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                            </Field>
                                            <ErrorMessage name="City" component="div" className="text-danger"></ErrorMessage>
                                        </dd>
                                    </dl>
                                    <button disabled={(fields.isValid) ? false : true} className="btn btn-success" type="submit">Register</button>
                                </div>
                            }
                        </Form>
                }

            </Formik>


        </div >
    );
}