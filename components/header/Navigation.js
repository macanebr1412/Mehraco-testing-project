import DarkModeToggle from "../ui/DarkModeToggle";
import NavLink from "./NavLink";

// Baraye nemoone gozasham vagarna page digari nadarim
function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3 sm:gap-5  md:gap-7">
        <li>
          <NavLink href="#" name="product" />
        </li>
        <li>
          <NavLink href="#" name="About" />
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
