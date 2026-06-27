import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost";
  size?: "sm" | "md";
}

export function Button({
  className = "",
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition";
  const variants = {
    default: "bg-cyan-500/90 text-white hover:bg-cyan-400",
    secondary: "border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",
    ghost: "bg-transparent text-zinc-300 hover:bg-white/10 hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-3.5 py-2 text-sm",
  };

  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
