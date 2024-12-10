import { useState } from "react";
import "./App.css";
import SignIn from "./Components/SignIn";

// State management
function App() {
  // const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  // const addOne = () => {
  //   setCounter(counter + 1);
  // };

  // const minusOne = () => {
  //   setCounter(counter - 1);
  // };

  const imageHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* <button onClick={addOne}>+</button>
      <p>{counter} </p>
      <button onClick={minusOne}>-</button> */}
      <button
        onClick={imageHandler}
        className="bg-blue-200 rounded-md py-[2px] px-[1px] "
      >
        {show ? "Hide" : "Show"} Image
      </button>

      {show && (
        <img
          className="mt-2"
          width={"150px"}
          src="https://images.desenio.com/zoom/wb0038-8batman-downpour50x70-85109-612.jpg?auto=compress%2Cformat&fit=max&w=3840"
        />
      )}

      <SignIn />
    </div>
  );
}

export default App;
