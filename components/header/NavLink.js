"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, name }) {
  // baraye inke betooonim active konim link khodemooono ke albate inja chon tak safe darim serfan vase nemoone gozasham.
  const pathname = usePathname();

  return (
    <Link
      className={` text-sm sm:text-lg font-bold ${
        pathname.startsWith(href)
          ? "text-accent-700 dark:text-accent-400"
          : undefined
      } hover:text-accent-700 hover:dark:text-accent-300`}
      href={href}
    >
      {name}
    </Link>
  );
}

export default NavLink;
