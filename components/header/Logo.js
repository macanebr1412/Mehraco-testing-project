import Link from "next/link";
import { medieval } from "@/app/layout";

function Logo() {
  return (
    <Link href="/">
      <span
        className={`${medieval.className} text-accent-950 font-bold  dark:text-accent-600 dark:sm:text-accent-400 text-center text-3xl md:text-4xl lg:text-5xl`}
      >
        Mehraco
      </span>
    </Link>
  );
}

export default Logo;
