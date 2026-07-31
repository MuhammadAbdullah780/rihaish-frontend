import { ReactNode } from "react";
import { BuyerTopBar } from "@/components/buyer/BuyerTopBar";
import { BuyerFooter } from "@/components/buyer/BuyerFooter";

export default function BuyerDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
      />
      <div className="min-h-screen flex flex-col">
        <BuyerTopBar />
        <div className="flex-grow">{children}</div>
        <BuyerFooter />
      </div>
    </>
  );
}
