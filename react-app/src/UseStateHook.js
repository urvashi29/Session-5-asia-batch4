import React, { useState } from "react";

const UseStateHook = () => {
  //[state variable, method to update it]
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);

  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  });

  const [arr, setArr] = useState([90, 39, 20, 39]);

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

  const handleChange = () => {
    setFirstName("alex");
    setAge(25);
    setPerson({ ...person, designation: "manager" });
    setArr([...arr, 90, 39]);

    //updating array of object
    let empCopy = [...empData];
    empCopy[1].designation = "manager";
    setEmpData(empCopy);
  };

  return (
    <div>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.designation}</p>
      <p>
        {arr.map((e) => (
          <p>{e}</p>
        ))}
      </p>

      <p>
        {empData.map((emp) => {
          return (
            <p key={emp.id}>
              {emp.designation} {emp.country}
            </p>
          );
        })}
      </p>

      <h2>Updation</h2>
      <button onClick={() => setFirstName("alex")}>Update String</button>
      <button onClick={() => setAge(25)}>Update age</button>

      <button onClick={() => setPerson({ ...person, designation: "manager" })}>
        Update object
      </button>

      <button onClick={() => setArr([...arr, 90, 39])}>Update Array</button>

      <button onClick={handleChange}>Update</button>
    </div>
  );
};

export default UseStateHook;

// const obj = {
//     name:'alina',
//     age: 90
// }
