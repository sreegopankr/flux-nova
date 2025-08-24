import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Appearance variants
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning";
  
  // Size variants
  size?: "sm" | "md" | "lg" | "xl";
  
  // Additional states
  loading?: boolean;
  fullWidth?: boolean;
  
  // Icon support
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = "primary",
  size = "md", 
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children, 
  disabled,
  className = "",
  ...props
 }) => {

  // Base styles applied to all buttons
  const baseStyle = [
    "inline-flex items-center justify-center",
    "font-medium rounded-md",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "transition-all duration-200 ease-in-out",
    "border border-transparent",
    "cursor-pointer",
    "select-none"
  ].join(" ");

  // Size variations
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2", 
    lg: "px-6 py-3 text-lg gap-2.5",
    xl: "px-8 py-4 text-xl gap-3"
  };

  // Color/variant styles
  const variantStyles = {
    primary: [
      "bg-blue-600 text-white",
      "hover:bg-blue-700 focus:ring-blue-500",
      "active:bg-blue-800",
      "disabled:bg-blue-300"
    ].join(" "),
    
    secondary: [
      "bg-gray-300 text-gray-900 border-gray-300",
      "hover:bg-gray-400 focus:ring-gray-500",
      "active:bg-gray-300",
      "disabled:bg-gray-50 disabled:text-gray-400"
    ].join(" "),
    
    tertiary: [
      "bg-transparent text-gray-700",
      "hover:bg-gray-100 focus:ring-gray-500",
      "active:bg-gray-200",
      "disabled:text-gray-400"
    ].join(" "),
    
    danger: [
      "bg-red-600 text-white",
      "hover:bg-red-700 focus:ring-red-500",
      "active:bg-red-800",
      "disabled:bg-red-300"
    ].join(" "),
    
    success: [
      "bg-green-600 text-white",
      "hover:bg-green-700 focus:ring-green-500", 
      "active:bg-green-800",
      "disabled:bg-green-300"
    ].join(" "),
    
    warning: [
      "bg-yellow-500 text-white",
      "hover:bg-yellow-600 focus:ring-yellow-500",
      "active:bg-yellow-700", 
      "disabled:bg-yellow-300"
    ].join(" ")
  };

  // Additional modifiers
  const modifierStyles = [
    fullWidth && "w-full",
    (loading || disabled) && "cursor-not-allowed opacity-60",
    loading && "pointer-events-none"
  ].filter(Boolean).join(" ");

  const finalClassName = [
    baseStyle,
    sizeStyles[size],
    variantStyles[variant],
    modifierStyles,
    className
  ].filter(Boolean).join(" ");

  return (
    <button 
      className={finalClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12" 
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
