import TextField from './TextField';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import Radio from './Radio';

export const componentsMap = {
  textField: {
    component: TextField,
    defaultProps: {
      type: 'text',
    },
  },
  textArea: {
    component: TextArea,
    defaultProps: {
      rows: 10,
    },
  },
  checkbox: {
    component: Checkbox,
  },
  radio: {
    component: Radio,
  },
};

export const handleChange = (setFormData) => {
  return (e) => {
    let { name, value, id } = e.target; //id for radio input

    if (name === 'department') value = id;

    // console.log(name, value)

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
};

export const handleFocus = (setFocusedFields) => {
  return (e) => {
    const { name } = e.target;
    // console.log(name);
    setFocusedFields((prevData) => ({
      ...prevData,
      [name]: true,
    }));
  };
};

export const handleBlur = (setFocusedFields) => {
  return (e) => {
    const { name } = e.target;
    setFocusedFields((prevData) => ({
      ...prevData,
      [name]: false,
    }));
  };
};
