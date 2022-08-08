// npm
import { useState } from "react";

// files
import onValidate from "../scripts/onValidate";

export default function InputField({ setup, state, validation }) {
  const { span, type, placeholder, autofocus, required } = setup;
  const [getter, setter] = state;
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="input-field">
      <label>
        <span>{span}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          onBlur={() => onValidate(validation, getter, setter, setErrorMsg)}
          onChange={(event) => setter(event.target.value)}
          autoFocus={autofocus}
          required={required}
        />
        <small className="error">{errorMsg}</small>
      </label>
    </div>
  );
}
