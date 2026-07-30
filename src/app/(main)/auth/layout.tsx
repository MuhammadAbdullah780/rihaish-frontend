import { ReactNode } from "react";
import { AuthRouteTransition } from "@/components/auth/AuthRouteTransition";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
      />
      <AuthRouteTransition>{children}</AuthRouteTransition>
    </>
  );
}
