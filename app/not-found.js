"use client";

import H1 from "@/components/ui/H1";
import Button from "@/components/ui/Button";
import P from "@/components/ui/P";
import { useRouter } from "next/navigation";

// Albate too in app k man doros kardam niazi be not-found nadarim, chon baghie routha ro redirect('/') zadam be dalile inke khob teste tak safe'ee ast.
function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center md:px-32 py-32">
      <H1>Not Found</H1>
      <P>This page could not be found :(</P>
      <Button type="primary" onClick={router.back}>
        Back
      </Button>
    </div>
  );
}

export default NotFound;
