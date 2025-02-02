import { useReducer } from "react";
import styles from "./SignIn.module.css";

const signInState = {
  email: "",
  password: "",
  income: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };

    case "password":
      return { ...state, password: action.payload };

    case "income":
      return { ...state, income: action.payload };

    default:
      throw new Error("Action unknown");
  }
}

function SignIn() {
  const [{ email, password, income }, dispatch] = useReducer(
    reducer,
    signInState
  );

  return (
    <div className={styles.signIn}>
      <h1 className={styles.signInHeader}>Sign in</h1>
      <h1>Email</h1>
      <input
        type="text"
        onChange={(event) =>
          dispatch({ type: "email", payload: event.target.value })
        }
        placeholder="type here"
      />
      <h1>Password</h1>
      <input
        type="text"
        onChange={(event) =>
          dispatch({ type: "password", payload: event.target.value })
        }
        placeholder="type here"
      />
      <h1>Income</h1>
      <input
        type="text"
        onChange={(event) =>
          dispatch({ type: "income", payload: event.target.value })
        }
        placeholder="type here"
      />

      <button>Sign In</button>
    </div>
  );
}

export default SignIn;

/*
        <input type="text" value={inputValue}
         onChange={handleChange} />

*/
