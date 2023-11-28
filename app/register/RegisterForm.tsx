"use client";

import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";

import Link from "next/link";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/input/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types/type";


interface RegisterFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm:React.FC<RegisterFormProps> = ({currentUser}) => {
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


  const router = useRouter();

  // useefffect Hook
  useEffect(() => {
    if (currentUser) {
      router.push('/cart');
      router.refresh();
    }
  }, [])

  // OnSubmit Func
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account Created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh;
            toast.success("LoggedIn");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Somthing Went Wrong"))
      .finally(() => {
        SetIsLoading(false);
      });
  };

  // check if we have cuurent user
  if(currentUser) {
    return <p className="text-center">Logged in.</p>
  }

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
