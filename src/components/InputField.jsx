export default function InputField({ setup, state }) {
  const { span, type, placeholder, autofocus, required } = setup;
  const [getter, setter] = state;

  return (
    <div className="input-field">
      <label>
        <span>{span}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          onChange={(event) => setter(event.target.value)}
          autoFocus={autofocus}
          required={required}
        />
      </label>
    </div>
  );
}
