import Main from "@/components/main";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="pt-8">
        <h2 className="order-1 mt-2 font-bold text-5xl text-balance text-center text-gray-900 md:text-6xl !leading-tight tracking-tight">
          Find your <span className="bg-green-600 px-2 text-white">Hostel</span>{" "}
          today -{" "}
          <span className="relative px-2 text-blue-600">and book now! </span>
        </h2>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <Main />
      </main>
    </NextUIProvider>
  );
}
