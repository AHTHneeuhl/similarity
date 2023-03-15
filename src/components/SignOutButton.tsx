"use client";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface SignOutButtonProps {}

const SignOutButton: React.FC<SignOutButtonProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutUser = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Sign Out Error",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button isLoading={isLoading} onClick={signOutUser}>
      Sign In
    </Button>
  );
};

export default SignOutButton;
