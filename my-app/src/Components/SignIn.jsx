import { useReducer } from "react";
import styles from "./SignIn.module.css";

function SignIn({ dispatch }) {
  const [formState, setFormState] = useReducer(
    (state, action) => ({ ...state, [action.type]: action.payload }),
    { email: "", password: "", income: "" }
  );

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "submit", payload: formState });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ type: name, payload: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.signIn}>
        <h1 className={styles.signInHeader}>Sign in</h1>
        <h1>Email</h1>
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="type here"
        />
        <h1>Password</h1>
        <input
          type="text"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="type here"
        />
        <h1>Income</h1>
        <input
          type="text"
          name="income"
          value={formState.income}
          onChange={handleChange}
          placeholder="type here"
        />

        <button>Sign In</button>
      </div>
    </form>
  );
}

export default SignIn;
