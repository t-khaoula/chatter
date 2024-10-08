import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signInFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
  setState: (state: signInFlow) => void;
}

export default function SignInCard({ setState }: SignInCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-full h-full p-8 space-y-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <form className="space-y-5">
          <input
            className="w-full"
            disabled={false}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full"
            disabled={false}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Submit
          </Button>
          <Separator />
        </form>
      </CardContent>
      <div className="flex flex-col gap-y-2.5">
        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative font-bold"
        >
          <FcGoogle className="size-5 absolute left-2.5 top-2.5" />
          Continue with Google
        </Button>
        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative font-bold"
        >
          <FaGithub className="size-5 absolute left-2.5 top-3" />
          Continue with Github
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Don&apos;t Have an Account?{" "}
        <span
          className="text-sky-500 hover:underline cursor-pointer"
          onClick={() => setState("signUp")}
        >
          Sign Up
        </span>
      </p>
    </Card>
  );
}
