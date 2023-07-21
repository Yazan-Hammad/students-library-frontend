import React from 'react';

function TextField({
  label,
  name,
  width,
  height,
  className,
  title,
  type,
  id = 'test text field id',
  placeholder,
  embeddedProps: { value, onChange, onBlur, onFocus, error, touched },
  ...rest
}) {
  return (
    <div className={`textfield-container input-container ${width}`}>
      <label className={'textfield-label'} htmlFor={id}>
        {title.replace(title[0], title[0].toUpperCase())}
      </label>
      <input
        className={`textfield-input ${className}`}
        type={type || 'text'}
        id={title}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name || title}
        {...rest}
      />
    </div>
  );
}

export default TextField;
