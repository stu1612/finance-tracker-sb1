// npm
import { useState } from "react";

// files
import form from "../data/userForm.json";
import InputField from "../components/InputField";
import useSignup from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, error, loading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {!loading ? <h2>Signup</h2> : <h2>Loading</h2>}
      <InputField setup={form.email} state={[email, setEmail]} />
      <InputField setup={form.password} state={[password, setPassword]} />
      <InputField setup={form.name} state={[displayName, setDisplayName]} />
      {!loading && <button className="btn">Signup</button>}
      {loading && (
        <button className="btn" disabled>
          Signup
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
