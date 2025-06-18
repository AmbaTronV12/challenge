import React from 'react';
import styles from './login.module.css'
import { userlogin, padlock } from '../../asset';


function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>LOGIN</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <img src={userlogin} alt="User Icon" className={styles.icon} />
            <input type="text" id="username" className={styles.input} required placeholder='Masukan Username Anda'/>
          </div>
          <div className={styles.formGroup}>
            <img src={padlock} alt="Password Icon" className={styles.icon} />
            <input type="password" id="password" className={styles.input} required placeholder='Masukan Password Anda' />
          </div>
          <button type="submit" className={styles.button}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
