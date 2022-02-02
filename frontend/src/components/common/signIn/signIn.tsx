import * as React from 'react';
import styles from './styles.module.scss';


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
    
    return (<div className={styles.container}>
        <div className={styles.logoBackgroundIcon}>
            <div className={styles.logoDescription}>{projectSubTitle}</div>
            <div className={styles.logoTitle}>{projectName}</div>
        </div>
        <div className={styles.signInWrapper}>
            <div className={styles.title}>{pageName}</div>
            <div className={styles.description}>{loginDescription}</div>
            <div className={styles.input}></div>
            <div className={styles.input}></div>
            <div className={styles.container}>
                <div className={styles.settingAccount} onClick={onClick}>{signUp}</div>
                <div className={styles.settingAccount} onClick={onClick}>{passwordProblem}</div>
            </div>
            <input type='button' value={pageName} onClick={onClick} className={styles.buttSignIn}/>
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
