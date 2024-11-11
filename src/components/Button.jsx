import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-black hover:bg-gray-200",
      outline:
        "border border-gray-800 text-white hover:bg-white hover:text-black",
      ghost: "text-gray-400 hover:text-white hover:bg-gray-800",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6 text-lg",
    };

    const Comp = asChild ? React.Fragment : "button";

    return (
      <Comp
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

export default Button;
