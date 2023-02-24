import React, { useState } from "react";
import UseStateHook from "./UseStateHook";
import LifecycleComponent from "./LifecycleComponent";
import UseEffectHook from "./UseEffectHook";
import Display from "./Display";
import SuspenseComponent from "./SuspenseComponent";

const App = () => {
  const [empData, setEmpData] = useState([
    {
      id: 1,
      designation: "developer",
      country: "India",
    },
    {
      id: 2,
      designation: "developer",
      country: "canada",
    },
    {
      id: 3,
      designation: "developer",
      country: "australia",
    },
  ]);

  const [firstName, setFirstName] = useState(90);
  const [age, setAge] = useState(90);
  const [strOrNum, setStrOrNum] = useState(true);
  const [status, setStatus] = useState(true);
  const [arr, setArr] = useState([90, 90, 89]);
  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  });

  const random = () => {};
  return (
    <>
      <SuspenseComponent />
      <UseStateHook />
      <LifecycleComponent />
      <Display
        empData={empData}
        age={age}
        firstName={firstName}
        strOrNum={strOrNum}
        status={status}
        arr={arr}
        random={random}
      />
    </>
  );
};

export default App;
