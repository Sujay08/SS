import styles from './onboarding.module.css'
import common from '../../styles/common.module.css'
import hat from '../../assets/hat.png'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from "yup"
import {useNavigate} from "react-router-dom"

interface FormValues {
    setPassword: string
    confirmPassword: string
}

function Password() {

    const navigate = useNavigate()

    const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        
        if(values.setPassword === values.confirmPassword){
            setTimeout(() => {
                setSubmitting(false)
                resetForm();
                navigate('/dashboard')
            }, 1000);
        }else{
            console.log('Wrong Password Yo!')
            setSubmitting(false)
        }

    }

    const validationSchema = Yup.object({
        setPassword: Yup
            .string()
            .required("Please set your password")
            .min(5,"Password must be atleast 5 characters long")
            .matches(/^\S+$/, "Spaces are not allowed"),
        confirmPassword: Yup
            .string()
            .required("Please confirm your password")
            .min(5,"Password must be atleast 5 characters long")
            .matches(/^\S+$/, "Spaces are not allowed")
    })

    const initialValues: FormValues = {
        setPassword: "",
        confirmPassword: "",
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
                                        <label htmlFor="">Set Password</label>

                                        <Field type="password" name="setPassword" className={common.formControl} placeholder="Set Password" />
                                        <ErrorMessage name="setPassword" component="div" className='error' />
                                    </div>

                                    <div className={common.formGroup}>
                                        <label htmlFor="">Confirm Password</label>

                                        <Field type="password" name="confirmPassword" className={common.formControl} placeholder="Confirm Password" />
                                        <ErrorMessage name="confirmPassword" component="div" className='error' />
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