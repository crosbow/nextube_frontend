const Modal = ({ open, className, onClose, children }) => {
  return (
    <div
      className={` ${className} fixed inset-0 z-50 grid place-items-center bg-black/40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      <div
        className={`bg-gray-800 p-10 border border-gray-500/50 shadow-2xl rounded-md w-2xl transform transition-all duration-300 relative
          ${
            open
              ? "scale-100 translate-y-5 opacity-100"
              : "scale-95 -translate-y-10 opacity-0"
          }
        `}
      >
        {children}

        <button
          className="absolute -top-1 right-2 cursor-pointer text-gray-300 hover:scale-95 p-5 text-3xl"
          type="text"
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
