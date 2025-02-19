import { useState, useReducer, act } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopSection from "./Components/TopSection";
import Summary from "./Components/Summary";
import AccountTracking from "./Components/AccountTracking";
import LeftToSpend from "./Components/LeftToSpend";
import Expenses from "./Components/Expenses";
import SignIn from "./Components/SignIn";

let initialState = {
  submittedData: {
    email: "",
    password: "",
    income: "",
    signedIn: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return { ...state, submittedData: { ...action.payload, signedIn: true } };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ submittedData }, dispatch] = useReducer(reducer, initialState);
  const { email, password, income, signedIn } = submittedData;
  const [userSubmissions, setUserSubmissions] = useState([]);

  const total = userSubmissions.reduce(
    (accumulator, currentAccumulator) =>
      accumulator + Number(currentAccumulator.itemAmount),
    0
  );

  const totalMinusExpenses = income - total;

  console.log(userSubmissions);

  return (
    <>
      <TopSection />
      <Summary />
      {!signedIn && <SignIn dispatch={dispatch} />}
      {signedIn && (
        <AccountTracking income={income} email={email} total={total} />
      )}
      {signedIn && (
        <LeftToSpend totalMinusExpenses={totalMinusExpenses} income={income} />
      )}
      {signedIn && (
        <Expenses
          userSubmissions={userSubmissions}
          setUserSubmissions={setUserSubmissions}
        />
      )}
    </>
  );
}

export default App;

//./ impletment backend
