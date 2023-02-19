import React from "react";

function Select({ label, onChange, defaultValue, options, name }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={onChange} defaultValue="">
        <option value={""}>{defaultValue}</option>
        {Object.entries(options).map((item) => {
          return (
            <option key={item} value={item[0]}>
              {item[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
