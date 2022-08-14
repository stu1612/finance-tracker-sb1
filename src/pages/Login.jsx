// npm
import { useState } from "react";

// files
import form from "../data/userForm.json";
import InputField from "../components/InputField";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>login</h2>
      <InputField setup={form.email} state={[email, setEmail]} />
      <InputField setup={form.password} state={[password, setPassword]} />
      {!loading && <button className="btn">Login</button>}
      {loading && (
        <button className="btn" disabled>
          Login
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
