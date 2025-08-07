"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useMode } from "@/context/DarkModeContext";
import { useEffect, useState } from "react";

function DarkOrLightModeToggle() {
  const { mode, handleChangeMode } = useMode();
  const [mounted, setMounted] = useState(false);

  // Chon ye error baramoon miomad, kari kardim ke faghat tooo client ejra bshe.
  useEffect(function () {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      className="bg-transparent border-none p-2 rounded-full transition-all hover:bg-accent-600"
      onClick={handleChangeMode}
    >
      {mode === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}

export default DarkOrLightModeToggle;
