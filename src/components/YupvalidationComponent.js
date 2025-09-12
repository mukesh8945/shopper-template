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
                        City: yup.string()
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values, null, 2));
                    }
                }
            >

                <Form>
                    {
                        <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd><Field name="UserName" type="text" /></dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dt>Age</dt>
                                <dd><Field name="Age" type="text"></Field></dd>
                                <dt>City</dt>
                                <dd>
                                    <Field as="select" name="city">
                                        <option>Delhi</option>
                                        <option>Hyderabad</option>
                                    </Field>
                                </dd>
                            </dl>
                            <button>Register</button>
                        </div>
                    }
                </Form>
            </Formik>


        </div >
    );
}