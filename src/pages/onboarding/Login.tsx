import styles from './onboarding.module.css'
import common from '../../styles/common.module.css'
import hat from '../../assets/hat.png'
import {useNavigate} from "react-router-dom"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from "yup";

interface FormValues {
    mobile: String;
}

function Login() {

    const navigate = useNavigate()

    // Yup validation schema
    const validationSchema = Yup.object({
        mobile: Yup
            .string()
            .min(10, "Phone number must be 10 characters")
            .max(10, "Phone number must be 10 characters")
            .required("Phone number is required")
            .matches(/^\d+$/, "Phone number must contain only digits")
    });

    // Form submission handler
    const handleSubmit = (
        values: FormValues,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
    ) => {
        console.log("Form data:", values);
        // Simulate an API call
        setTimeout(() => {
            setSubmitting(false);
            resetForm(); // Reset form after submission
            navigate('/password')
            
        }, 1000);
    };

    const initialValues: FormValues = {
        mobile: "810571780"
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.tp}>
                <div className={styles.ts}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <div className={common.formGroup}>
                                        <img src={hat} alt="" className={common.hat} />
                                        <label htmlFor="">Login with mobile number</label>
                                        <Field type="tel" name="mobile" className={common.formControl} placeholder="Phone Number" max="10" />
                                        <ErrorMessage name="mobile" component="div" className="error" />

                                    </div>
                                    <button disabled={isSubmitting} type='submit' className={common.lightBtn}>
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </div>


                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>
    )
}

export default Login