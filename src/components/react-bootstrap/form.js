import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstname"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Za-z\. -]+$/i,
            message: "invalid firstname",
          },
        })}
      />
      <span class="floating-label">First Name</span>

      {errors.firstname && errors.firstname.message}

      <input
        name="lastname"
        placeholder="Last Name"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Za-z\. -]+$/i,
            message: "invalid lastname",
          },
        })}
      />
      {errors.lastname && errors.lastname.message}
      <input
        name="email"
        placeholder="Email Address"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      <input
        name="number"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[0]\d{10}$/i,
            message: "invalid phone number",
          },
        })}
      />
      {errors.number && errors.email.number}

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default HookForm;
