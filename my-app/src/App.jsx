import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopSection from "./Components/TopSection";
import Summary from "./Components/Summary";
import AccountTracking from "./Components/AccountTracking";
import LeftToSpend from "./Components/LeftToSpend";
import Expenses from "./Components/Expenses";
import SignIn from "./Components/SignIn";

const initialState = {
  signedIn: false,
  signInEmail: "",
  signInPassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "signedIn": {
      return { ...state, signedIn: true };
    }
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ signedIn }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TopSection />
      <Summary />
      {signedIn && <AccountTracking />}
      {signedIn && <LeftToSpend />}
      {signedIn && <Expenses />}
      {!signedIn && <SignIn />}
    </>
  );
}

export default App;

/*


*/
