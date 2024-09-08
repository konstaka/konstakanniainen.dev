"use client";

// import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Console from "@/components/console";

export default function Home() {
  return (
    <div className="flex h-screen font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <div className="flex-auto p-12 shadow-xl">
        <Console />
      </div>
    </div>
  );
}
