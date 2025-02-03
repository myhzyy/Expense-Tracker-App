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

  console.log(income);

  return (
    <>
      <TopSection />
      <Summary />
      {!signedIn && <SignIn dispatch={dispatch} />}
      {signedIn && <AccountTracking income={income} email={email} />}
      {signedIn && <LeftToSpend />}
      {signedIn && <Expenses />}
    </>
  );
}

export default App;
