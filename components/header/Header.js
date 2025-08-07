import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className="flex items-center justify-between mb-20 xl:mb-16">
        <Logo />
        <Navigation />
      </header>
    </>
  );
}

export default Header;
