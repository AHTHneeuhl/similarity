"use client";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface SignInButtonProps {}

const SignInButton: React.FC<SignInButtonProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Sign In Error",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button isLoading={isLoading} onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
};

export default SignInButton;
