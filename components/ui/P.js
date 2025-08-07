function P({ children, className }) {
  return (
    <p
      className={`mb-5 sm:mb-7 md:mb-12  text-center sm:text-start md:text-xl font-bold ${className}`}
    >
      {children}
    </p>
  );
}

export default P;
