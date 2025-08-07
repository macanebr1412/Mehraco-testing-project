function H1({ children, className }) {
  return (
    <h1
      className={`text-accent-950 font-bold  dark:text-accent-600 dark:sm:text-accent-400 text-center text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-7 md:mb-10 lg:mb-16 mt-2 ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1;
