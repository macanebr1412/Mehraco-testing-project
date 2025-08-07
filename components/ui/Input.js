function Input({ type, value, onChange, placeholder, className }) {
  return (
    <input
      className={`w-full  border-2 dark:border-accent-700 px-3 py-1 rounded-sm outline-none text-stone-900 dark:text-stone-200 bg-transparent dark:placeholder-accent-300 placeholder-accent-800 border-accent-950 ${className} `}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
