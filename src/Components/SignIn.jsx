//Listening to user inputs

import { useState } from "react";

const SignIn = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [bg, setBg] = useState("slate");

  const fNamechangeHandler = (e) => {
    setFName(e.target.value);
  };

  const lNamechangeHandler = (e) => {
    setLName(e.target.value);
  };

  const sendData = (e) => {
    e.preventDefault();
    setBg("green");
    console.log(fName, lName);
  };

  return (
    <div className="mt-4 text-center">
      <form className="flex flex-col">
        <label>firstName</label>
        <input
          onChange={fNamechangeHandler}
          className="border-[1px] border-amber-700 rounded-md"
          type="text"
        />
        <label>
          <legend></legend>lastName
        </label>
        <input
          onChange={lNamechangeHandler}
          className="border-[1px] border-amber-700 rounded-md"
          type="text"
        />

        <button onClick={sendData} className={`border-[1px] mt-2 bg-${bg}-400`}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default SignIn;
