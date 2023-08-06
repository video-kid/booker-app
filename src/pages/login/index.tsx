import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  // console.log(errors);
  const { data } = useSession();
  return (
    <>
      <a href="/api/auth/signout">sign off</a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Login</label>

        <input
          type="text"
          placeholder="user"
          {...register("user", { required: true })}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />

        <input type="submit" />
      </form>
      {console.log(data)}
    </>
  );
};

export default Login;
