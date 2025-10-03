const Modal = ({ open, children }) => {
  if (!open) return;

  return (
    <div className="h-screen w-full bg-black/20 fixed top-0 left-0 grid place-items-center">
      <div className="bg-gray-800 p-10 border border-gray-500/50 shadow-2xl rounded-md  w-2xl">
        {children}
      </div>
    </div>
  );
};
export default Modal;
