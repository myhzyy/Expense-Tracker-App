import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.signIn}>
      <h1 className={styles.signInHeader}>Sign in</h1>
      <h1>Email</h1>
      <input type="text" placeholder="type here" />
      <h1>Password</h1>
      <input type="text" placeholder="type here" />
      <h1>Income</h1>
      <input type="text" placeholder="type here" />

      <button>Sign In</button>
    </div>
  );
}

export default SignIn;

/*
        <input type="text" value={inputValue}
         onChange={handleChange} />


*/
