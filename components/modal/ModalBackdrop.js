"use client";
import { useRouter } from "next/navigation";

function ModalBackdrop() {
  const router = useRouter();
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
      onClick={router.back}
    />
  );
}

export default ModalBackdrop;
