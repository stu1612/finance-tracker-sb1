// npm
import { useState } from "react";

// files
import InputField from "../components/InputField";
import form from "../data/login.json";
import validateEmail from "../scripts/validateEmail";
import validateString from "../scripts/validateString";

export default function Login() {
  const [email, setEmail] = useState("stu.bolderson@aol.com");
  const [password, setPassword] = useState("abc123");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>login</h2>
      <InputField
        setup={form.email}
        state={[email, setEmail]}
        validation={validateEmail}
      />
      <InputField
        setup={form.password}
        state={[password, setPassword]}
        validation={validateString}
      />

      <button className="btn">Login</button>
    </form>
  );
}
