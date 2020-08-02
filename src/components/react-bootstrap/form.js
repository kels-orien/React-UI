import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  const handleFocus = ({ target }) => {
    console.log("target ", target);
    console.log("focus is working");
    let input = target.name;
    if (target.value === "" || target.value.length > 0) {
      document.getElementsByName(input).class += " input-shrink";
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pay-now-form">
      <div className="form-group">
        <input
          name="firstname"
          id="firstname"
          className="inputText"
          onFocus={(event) => handleFocus(event)}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Za-z\. -]+$/i,
              message: "invalid firstname",
            },
          })}
        />
        <span className="floating-label">First Name</span>
        {errors.firstname && errors.firstname.message}
      </div>

      <div className="form-group">
        <input
          name="lastname"
          className="inputText"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Za-z\. -]+$/i,
              message: "invalid lastname",
            },
          })}
        />
        <span className="floating-label">Last Name</span>
        {errors.lastname && errors.lastname.message}
      </div>

      <div className="form-group">
        <input
          name="email"
          className="inputText"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <span className="floating-label">Email</span>
        {errors.email && errors.email.message}
      </div>
      <div className="form-group">
        <input
          name="number"
          className="inputText"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[0]\d{10}$/i,
              message: "invalid phone number",
            },
          })}
        />
        <span className="floating-label">First Name</span>
        {errors.number && errors.number.message}
      </div>

      <div className="form-group">
        <button type="submit" className="pay-now-button">
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default HookForm;
