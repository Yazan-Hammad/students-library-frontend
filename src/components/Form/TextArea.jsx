import React from "react";

function TextArea({
  label,
  width,
	title,
  height,
  type,
  id = "test text field id",
  placeholder,
  embeddedProps: { value, onChange, onBlur, onFocus, error, touched },
}) {
  return (
    <div className={`textarea-container input-container ${width}`}>
      <label className={'textarea-label'} htmlFor={id}>
        {title}
      </label>
      <input
        className={'textarea-input'}
        type={type}
        id={id}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
}

export default TextArea;
