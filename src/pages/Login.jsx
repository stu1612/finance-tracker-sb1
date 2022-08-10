// npm
import { useState } from "react";

// files
import form from "../data/form.json";
import InputField from "../components/InputField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>login</h2>
      <InputField setup={form.email} state={[email, setEmail]} />
      <InputField setup={form.password} state={[password, setPassword]} />
      <button className="btn">Login</button>
    </form>
  );
}
