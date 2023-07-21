import React from 'react';

function Checkbox({
  label,
  id = 'testCheckBoxId',
  width,
  embeddedProps: { value, onChange },
}) {
  return (
    <div className={`checkbox-container input-container ${width}`}>
      <input onCanPlay={onChange} type={'checkbox'} id={id} checked={!!value} />
      <label type={Checkbox}></label>
    </div>
  );
}

export default Checkbox;
