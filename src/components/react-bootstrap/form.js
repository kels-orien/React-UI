import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const [inputLabel, setInputLabel] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const handleBlur = ({ target }) => {
    const { name, value } = target;
    if (value.length === 0) {
      document.getElementById(name).className = "floating-label";
    }
  };
  const handleFocus = ({ target }) => {
    const { name, value } = target;
    if (value.length >= 0) {
      document.getElementById(name).className = "floating-label input-shrink";
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pay-now-form">
      <div className="form-group">
        <input
          name="firstname"
          className="inputText"
          onFocus={(event) => handleFocus(event)}
          onBlur={(event) => handleBlur(event)}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Za-z\. -]+$/i,
              message: "invalid firstname",
            },
          })}
        />
        <label id="firstname" className="floating-label">
          First Name
        </label>
        {errors.firstname && errors.firstname.message}
      </div>

      <div className="form-group">
        <input
          name="lastname"
          className="inputText"
          onFocus={(event) => handleFocus(event)}
          onBlur={(event) => handleBlur(event)}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Za-z\. -]+$/i,
              message: "invalid lastname",
            },
          })}
        />
        <label id="lastname" className="floating-label">
          Last Name
        </label>
        {errors.lastname && errors.lastname.message}
      </div>

      <div className="form-group">
        <input
          name="email"
          className="inputText"
          onFocus={(event) => handleFocus(event)}
          onBlur={(event) => handleBlur(event)}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <label id="email" className="floating-label">
          Email
        </label>
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
        <label id="number" className="floating-label">
          Phone Number
        </label>
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
