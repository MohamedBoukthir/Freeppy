"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // OnSubmit Func
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Sign Up For Freeppy" />
      {/* SignUp with google button */}
      <Button
        outline
        label="Sign Up With Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-slate-700 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm text-slate-400">
        Already Have An Account ?
        <Link className="font-semibold text-secColor" href="/login">
          {" "}
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
