"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // useRouter Hook
  const router = useRouter();

  // OnSubmit Func
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);

    // login logic
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      SetIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh;
        toast.success("LoggedIn");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <>
      <Heading title="Log In For Freeppy" />
      {/* SignUp with google button */}
      <Button
        outline
        label="Continue With Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-slate-700 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Log In"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm text-slate-400">
        Do Not Have An Account ?
        <Link className="font-semibold text-secColor" href="/register">
          {" "}
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
