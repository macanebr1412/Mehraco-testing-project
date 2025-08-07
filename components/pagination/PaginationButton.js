"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner";

function PaginationButton({ num, curPage }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleChangePage(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Button
        disabled={curPage === num}
        type="secondary"
        onClick={() => handleChangePage(num)}
      >
        {num}
      </Button>
    </Suspense>
  );
}

export default PaginationButton;
