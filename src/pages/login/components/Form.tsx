import React from "react";
import { useForm } from "react-hook-form";

type FormProps = {
  onSubmit: (data: any) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="username"
        {...register("username", { required: true })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export { Form };
