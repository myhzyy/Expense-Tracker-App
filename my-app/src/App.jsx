import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopSection from "./Components/TopSection";
import Summary from "./Components/Summary";
import AccountTracking from "./Components/AccountTracking";
import LeftToSpend from "./Components/LeftToSpend";
import Expenses from "./Components/Expenses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopSection />
      <Summary />
      <AccountTracking />
      <LeftToSpend />
      <Expenses />
    </>
  );
}

export default App;
