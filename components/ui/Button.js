import Link from "next/link";

function Button({ children, to, type, onClick, className, disabled }) {
  const styles = {
    primary:
      " inline-block text-sm cursor-pointer rounded-full bg-accent-800  font-semibold tracking-wide text-accent-200 uppercase transition-colors duration-300 hover:bg-accent-300 hover:text-accent-900 focus:bg-accent-300 focus:ring focus:ring-accent-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed  px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-s w-8 h-8 inline-block cursor-pointer rounded-full border-2 border-stone-300 font-semibold tracking-wide dark:text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stoen-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-accent-800 disabled:text-stone-200",
  };

  if (to) {
    return (
      <Link className={styles[type]} href={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
}
export default Button;
