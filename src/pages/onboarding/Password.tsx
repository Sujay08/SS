import styles from './onboarding.module.css'
import common from '../../styles/common.module.css'
import hat from '../../assets/hat.png'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from "yup"


interface FormValues {
    password: string
}

function Password() {



    const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        console.log(values)
        setTimeout(() => {
            setSubmitting(false)
            resetForm();
        }, 1000);
    }

    const validationSchema = Yup.object({
        password: Yup
            .string()
            .required("Password is required")
            .min(5,"password must be atleast 5 characters long")
            .matches(/^\S+$/, "Spaces are not allowed")
    })

    const initialValues: FormValues = {
        password: ""
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.tp}>
                <div className={styles.ts}>
                    <div className={styles.userblock}>
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                        <p>Welcome, Sujay</p>
                    </div>
                    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <div className={common.formGroup}>
                                        <img src={hat} alt="" className={common.hat} />
                                        <label htmlFor="">Password</label>

                                        <Field type="password" name="password" className={common.formControl} placeholder="Enter Password" />
                                        <ErrorMessage name="password" component="div" className='error' />
                                    </div>
                                    <button type="submit" className={common.lightBtn} disabled={isSubmitting}>
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

export default Password