const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {children}
    </label>
  );
};
export default Label;
