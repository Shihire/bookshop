import React from 'react';

const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      { children }
    </form>
  )
}

Form.renderField = ({ input, label, name, type, meta: { touched, error } }) => {
  const isInputInvalid = (touched && error) ? ' is-invalid': '';
  return (
  <div className="my-1">
    <label htmlFor={name} className={touched && error ? 'text-danger' : undefined}>{label}</label>
    <div>
      <input {...input} id={name} name={name} type={type} className={`form-control${isInputInvalid}`} />
      {touched && error && <small className="form-text text-danger">{error}</small>}
    </div>
  </div>
)}

export default Form;