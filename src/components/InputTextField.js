import React from "react";

function InputTextField({ label, ...rest }) {
  return (
    <>
      <label>{label}</label>
      <div className="input-field">
        <input autoComplete="new-password" type="text" required {...rest} />
      </div>
    </>
  );
}

export default InputTextField;
