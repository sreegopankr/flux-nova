import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Visual variants
  variant?: "default" | "error" | "success";
  
  // Size variants (using inputSize to avoid conflict with HTML size attribute)
  inputSize?: "sm" | "md" | "lg";
  
  // Additional props
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  inputSize = "md",
  label,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  disabled,
  id,
  ...props
}) => {
  // Generate ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Base input styles
  const baseInputStyle = [
    "border rounded-md",
    "focus:outline-none focus:ring-2 focus:ring-offset-1",
    "transition-all duration-200 ease-in-out",
    "placeholder:text-gray-400",
    "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
  ].join(" ");

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
  };

  // Variant styles
  const variantStyles = {
    default: [
      "border-gray-300 bg-white text-gray-900",
      "hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500",
      "disabled:border-gray-200"
    ].join(" "),
    
    error: [
      "border-red-300 bg-white text-gray-900",
      "hover:border-red-400 focus:ring-red-500 focus:border-red-500",
      "disabled:border-red-200"
    ].join(" "),
    
    success: [
      "border-green-300 bg-white text-gray-900", 
      "hover:border-green-400 focus:ring-green-500 focus:border-green-500",
      "disabled:border-green-200"
    ].join(" ")
  };

  // Icon container styles
  const iconContainerStyle = "absolute inset-y-0 flex items-center pointer-events-none";
  const leftIconStyle = `${iconContainerStyle} left-0 pl-3`;
  const rightIconStyle = `${iconContainerStyle} right-0 pr-3`;

  // Adjust padding when icons are present
  const paddingAdjustments = [
    leftIcon && "pl-10",
    rightIcon && "pr-10"
  ].filter(Boolean).join(" ");

  const inputClassName = [
    baseInputStyle,
    sizeStyles[inputSize],
    variantStyles[variant],
    paddingAdjustments,
    fullWidth ? "w-full" : "",
    className
  ].filter(Boolean).join(" ");

  // Label styles
  const labelStyle = [
    "block text-sm font-medium mb-1",
    variant === "error" ? "text-red-700" : 
    variant === "success" ? "text-green-700" : 
    "text-gray-700",
    disabled && "text-gray-500"
  ].filter(Boolean).join(" ");

  // Helper text styles
  const helperTextStyle = [
    "mt-1 text-sm",
    variant === "error" ? "text-red-600" :
    variant === "success" ? "text-green-600" :
    "text-gray-500"
  ].join(" ");

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className={labelStyle}>
          {label}
        </label>
      )}
      
      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className={leftIconStyle}>
            <span className="text-gray-400 text-lg">
              {leftIcon}
            </span>
          </div>
        )}
        
        {/* Input */}
        <input
          id={inputId}
          className={inputClassName}
          disabled={disabled}
          {...props}
        />
        
        {/* Right Icon */}
        {rightIcon && (
          <div className={rightIconStyle}>
            <span className="text-gray-400 text-lg">
              {rightIcon}
            </span>
          </div>
        )}
      </div>
      
      {/* Helper Text */}
      {helperText && (
        <p className={helperTextStyle}>
          {helperText}
        </p>
      )}
    </div>
  );
};