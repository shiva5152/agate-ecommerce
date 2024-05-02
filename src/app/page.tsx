import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl text-blue-500">Welcome to Agate</h1>
        <p className="text-xl text-gray-500">
          Your one stop shop for all your needs
        </p>
        <Image
          src="/agate-logo.png"
          alt="Agate Logo"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
