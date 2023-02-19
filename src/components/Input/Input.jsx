import React from "react";

function Input({
  type,
  value,
  defaultValue,
  onChange,
  name,
  label,
  placeholder,
  onClick,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      />
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}

export default Input;
