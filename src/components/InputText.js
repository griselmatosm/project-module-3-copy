import React from 'react';

const InputText = (props) => {

  const handleKeyUp = ev => {
    const data = {
      name: props.inputName,
      value: ev.currentTarget.value
    };
    props.handleInput(data);
  };

  return (
    <div>
      <label className="collapsible__content--style-text required" htmlFor={props.id}>{props.labelText}</label>
      <input 
        required
        className="js-input-name js-input-text collapsible__content--input-form" 
        type="text" 
        placeholder={props.inputPlaceholder} 
        id={props.id} 
        name={props.inputName} 
        onKeyUp={handleKeyUp}
      />
    </div>
  )
};

export default InputText;