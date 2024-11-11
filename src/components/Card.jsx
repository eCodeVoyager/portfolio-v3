import { forwardRef } from "react";

const Card = forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg shadow-lg bg-opacity-30 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export default Card;
