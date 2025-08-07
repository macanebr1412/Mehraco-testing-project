function ModalDialog({ children }) {
  return (
    // Bekhatere close va ... az tage dialog estefade mikonim.
    <dialog
      open
      className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 py-8 -translate-y-1/2
      w-4/6 
      overflow-y-auto  bg-accent-500 dark:bg-accent-800
      rounded-xl shadow-2xl
      border-none outline-none
      p-0"
    >
      {children}
    </dialog>
  );
}

export default ModalDialog;
