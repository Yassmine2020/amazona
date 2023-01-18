import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
    } catch (error) {
      toast.error(result.error);
    }
  };
  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[zaa]+@[aaz].[aza]+$/i,
                message: "Please enter valid email",
              },
            })}
            className=" bg-white block focus:outline-none 
                border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
            placeholder="Adresse email"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: {
                value: 6,
                message: "password is more then 5 characters",
              },
            })}
            className=" bg-white block focus:outline-none 
                border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
            placeholder="Mot de passe"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <button className="primary-button">Login</button>
        <div className="mb-4">
          Dont have an accont ? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
