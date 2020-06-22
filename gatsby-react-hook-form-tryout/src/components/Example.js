import React from "react";
import { useForm } from "react-hook-form";

const Example = () => {
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues:{}
  });
  const onSubmit = values => console.log(values);

  return (
    <>
      <h2>helloworld</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.message}


          <button type="submit">Submit</button>
          <input type="reset" />
        </form>
    </>
  );
};

export default Example