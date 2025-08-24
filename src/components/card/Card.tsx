import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Visual variants
  variant?: "default" | "outlined" | "elevated";
  
  // Size variants
  size?: "sm" | "md" | "lg";
  
  // Interactive states
  hoverable?: boolean;
  clickable?: boolean;
  
  // Layout options
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  size = "md",
  hoverable = false,
  clickable = false,
  padding = "md",
  children,
  className = "",
  ...props
}) => {
  // Base card styles
  const baseStyle = [
    "rounded-lg",
    "transition-all duration-200 ease-in-out",
    "overflow-hidden"
  ].join(" ");

  // Variant styles
  const variantStyles = {
    default: "bg-white border border-gray-200",
    outlined: "bg-white border-2 border-gray-300",
    elevated: "bg-white shadow-md border border-gray-100"
  };

  // Size styles (affects border radius and overall scale)
  const sizeStyles = {
    sm: "rounded-md",
    md: "rounded-lg", 
    lg: "rounded-xl"
  };

  // Padding styles
  const paddingStyles = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  };

  // Interactive styles
  const interactiveStyles = [
    hoverable && "hover:shadow-lg hover:-translate-y-1",
    clickable && "cursor-pointer hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md",
    (hoverable || clickable) && variant === "outlined" && "hover:border-gray-400",
    (hoverable || clickable) && variant === "default" && "hover:border-gray-300"
  ].filter(Boolean).join(" ");

  const cardClassName = [
    baseStyle,
    variantStyles[variant],
    sizeStyles[size],
    paddingStyles[padding],
    interactiveStyles,
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};

// Additional Card sub-components for better composition
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  children,
  className = "",
  ...props
}) => {
  const headerClassName = [
    "border-b border-gray-200 pb-3 mb-4 last:mb-0 last:border-b-0 last:pb-0",
    className
  ].join(" ");

  return (
    <div className={headerClassName} {...props}>
      {title || subtitle ? (
        <div>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  ...props
}) => {
  const bodyClassName = [
    "flex-1",
    className
  ].join(" ");

  return (
    <div className={bodyClassName} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  const footerClassName = [
    "border-t border-gray-200 pt-3 mt-4 first:mt-0 first:border-t-0 first:pt-0",
    className
  ].join(" ");

  return (
    <div className={footerClassName} {...props}>
      {children}
    </div>
  );
};