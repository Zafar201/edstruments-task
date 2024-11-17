const Button = ({ children, onClick, className, disabled = false, variant }) => {
  // Different button style variants
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    filter: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    logout: "bg-red-500 text-white hover:bg-red-600 p-2",
    icon: "p-2 hover:bg-gray-100 text-gray-600",
    add: "bg-blue-500 text-white hover:bg-blue-600 flex items-center p-2 h-[40px]"
  };

  const baseStyles = "rounded-md transition-colors duration-200 font-medium";
  const variantStyle = variants[variant] || variants.primary;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyle} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button