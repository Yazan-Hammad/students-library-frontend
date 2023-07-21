import React from "react";

function InputDropDownList({ label, defaultValue, values, ...rest }) {
  const options = values.map((value, index) => <option value={value} key={index}>{value}</option>);

  return (
    <>
      <label>{label}</label>
      <select className="my-dropdown" required {...rest}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options}
      </select>
    </>
  );
}

export default InputDropDownList;
