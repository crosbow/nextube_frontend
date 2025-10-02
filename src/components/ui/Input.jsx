const Input = ({ className, ...props }) => {
  return (
    <input
      className={` ${className} border border-gray-400 rounded-s-full text-[16px] px-4 focus:outline-blue-400 outline-none`}
      {...props}
    />
  );
};
export default Input;
