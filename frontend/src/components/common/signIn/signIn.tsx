import { Formik } from 'formik';
import { Form as FormFormik } from 'formik';
import * as React from 'react';
import { Form } from '../input/form.stories';
import styles from './styles.module.scss';


// import { withFormik } from 'storybook-formik';
// import * as Yup from 'yup';
// import 'assets/styles/fonts.css';
// import 'assets/styles/tailwind.css';


type Props = {
    projectName?: string,
    projectSubTitle?: string,
    pageName?: string,
    loginDescription?: string,
    signUp?: string,
    passwordProblem?: string,
    additionalButt?: string,
    onClick?: () => void
}

const SignIn: React.FC<Props>= (props) =>{
    const { projectName, projectSubTitle, pageName, additionalButt, onClick, loginDescription, passwordProblem, signUp} = props


    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = () => {
        console.log("Formik")
    }

    return (<div className={styles.container}>
        <div className={styles.logoBackgroundIcon}>
            <div className={styles.logoDescription}>{projectSubTitle}</div>
            <div className={styles.logoTitle}>{projectName}</div>
        </div>
        <div className={styles.signInWrapper}>
            <div className={styles.title}>{pageName}</div>
            <div className={styles.description}>{loginDescription}</div>
            <Formik initialValues={Form.parameters.formik.initialValues} validationSchema={Form.parameters.formik.validationSchema} onSubmit={onSubmit}>
                {formik => {
                    return <FormFormik>
                        <div className={styles.input}>
                            <Form />
                        </div>
                        <div className={styles.container}>
                            <div className={styles.settingAccount} onClick={onClick}>{signUp}</div>
                            <div className={styles.settingAccount} onClick={onClick}>{passwordProblem}</div>
                        </div>
                        <input className={styles.buttSignIn} type='button' value={pageName} onClick={onSubmit}/>
                    </FormFormik>
                }}
            </Formik>
            <div className={styles.linesContainer}>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <input type='button' value={additionalButt} onClick={onClick} className={styles.buttSignInWithGoogle}/>
        </div>
    </div>)
}

export default SignIn;
