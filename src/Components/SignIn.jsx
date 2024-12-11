/* eslint-disable react/prop-types */
//Listening to user inputs
import { toast } from "react-toastify";
import { useState } from "react";

const SignIn = ({ setData, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { name, email, password, age } = formData;
  const sendData = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || password == "" || age == "") {
      toast.error("You need to type your data");
    } else {
      setData(formData);
      setShowForm(false);
      toast.success("Your data have been sent succefully");
    }
  };
  return (
    <div className="mt-4 text-center">
      <form className="flex flex-col gap-2">
        <input
          name="name"
          onChange={onChangeHandler}
          type="text"
          placeholder="Your name"
          className="border-blue-400 border-[1px] "
        />
        <input
          name="email"
          onChange={onChangeHandler}
          type="email"
          placeholder="Your email"
          className="border-blue-400 border-[1px] "
        />
        <input
          name="age"
          onChange={onChangeHandler}
          type="text"
          placeholder="Your age"
          className="border-blue-400 border-[1px] "
        />
        <input
          name="password"
          onChange={onChangeHandler}
          type="password"
          placeholder="Your password"
          className="border-blue-400 border-[1px] "
        />
        <button onClick={sendData}>Send</button>
      </form>
    </div>
  );
};

export default SignIn;
