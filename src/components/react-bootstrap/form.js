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
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid firstname",
            },
          })}
      />
      {errors.firstname && errors.firstname.message}

      <input
        name="lastname"
        ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid lastname",
            },
          })}
      />
      {errors.lastname && errors.lastname.message}
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && errors.email.message}

     

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
