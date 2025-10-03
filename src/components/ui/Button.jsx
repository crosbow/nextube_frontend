const Button = ({
  className = "",
  variant = "secondary",
  type = "text",
  children,
  ...rest
}) => {
  const baseClasses =
    className + " " + "text-sm rounded-lg transition-all cursor-pointer ";

  let btnClasses =
    "w-full flex items-center justify-center border border-gray-700 rounded-xl shadow-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"; // ghost

  const sm = " py-2 px-4 ";
  const lg = " py-3 px-4 ";

  if (variant === "primary") {
    btnClasses = `w-full flex justify-center  border border-transparent  text-white
  bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 `;
  } else if (variant === "secondary") {
    btnClasses = `w-full flex justify-center  border border-transparent  text-white
  bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-900 focus:ring-green-500 `;
  }

  if (variant.includes("sm")) {
    btnClasses += sm;
  } else {
    btnClasses += lg;
  }
  return (
    <button type={type} className={baseClasses + btnClasses} {...rest}>
      {children}
    </button>
  );
};
export default Button;

//  ghost, primary, secondary, variant-sm
