"use client";

// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/sidebar";
import Console from "@/components/console";

export default function Home() {
  const [inputInFocus, setInputInFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputInFocus) {
      inputRef.current?.focus();
    }
  }, [inputInFocus]);

  return (
    <div
      className="flex h-screen font-[family-name:var(--font-geist-sans)]"
      onClick={() => setInputInFocus(false)}
    >
      <Sidebar />
      <div className="flex-auto p-12 shadow-xl">
        <Console
          inputRef={inputRef}
          inputInFocus={inputInFocus}
          setInputInFocus={setInputInFocus}
        />
      </div>
    </div>
  );
}
