import React from 'react';
import { componentsMap } from './formHelpers';

function DynamicForm({ formFields }) {
	// console.log(componentsMap);

  const renderFormFields = () => {
    return formFields.map((field, index) => {
			const {inputType, ...rest} = field;
      const Component = componentsMap[inputType].component;
			return <Component {...rest} key={index}/>;
    });
  };
  return <>
		{renderFormFields()}
	</>;
}

export default DynamicForm;
