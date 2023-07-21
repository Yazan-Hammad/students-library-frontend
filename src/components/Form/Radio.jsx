import React from 'react';

function Radio({
  name,
  options,
  width,
  radioTitle,
  embeddedProps: { onChange, value },
}) {
  const renderRadioOptions = () => {
    return options.map(({id, title}, index) => {
      return (
        <div className={'radio-option-container'} key={index}>
          <input
            type="radio"
            name={name}
            id={id}
            title={title}
            className={'radio-option'}
            onChange={onChange}
            checked={value === id}
          />
          <label htmlFor={id} className={'option-title'}>
            {title}
          </label>
        </div>
      );
    });
  };
  return (
    <div className={`radio-container input-container ${width}`}>
      <span className={'radio-label'}>
        {radioTitle.replace(radioTitle[0], radioTitle[0].toUpperCase())}
      </span>
      <div className={'options-container'}>{renderRadioOptions()}</div>
    </div>
  );
}

export default Radio;
