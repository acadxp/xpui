import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { motion } from "framer-motion";

const button = tv({
  base: [
    "relative",
    "inline-flex items-center justify-center",
    "px-6 py-3",
    "font-bold text-sm",
    "cursor-pointer select-none",
    "transition-all duration-75",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    // Pixel-style borders
    "border-2 border-solid",
  ],
  variants: {
    variant: {
      primary: [
        "bg-blue-500 text-white",
        "border-blue-700",
        "shadow-[inset_-2px_-2px_0_0_rgba(0,0,0,0.3),inset_2px_2px_0_0_rgba(255,255,255,0.3)]",
        "active:shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_0_rgba(255,255,255,0.3)]",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-gray-400 text-black",
        "border-gray-600",
        "shadow-[inset_-2px_-2px_0_0_rgba(0,0,0,0.3),inset_2px_2px_0_0_rgba(255,255,255,0.4)]",
        "active:shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_0_rgba(255,255,255,0.4)]",
        "hover:bg-gray-500",
      ],
      success: [
        "bg-green-500 text-white",
        "border-green-700",
        "shadow-[inset_-2px_-2px_0_0_rgba(0,0,0,0.3),inset_2px_2px_0_0_rgba(255,255,255,0.3)]",
        "active:shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_0_rgba(255,255,255,0.3)]",
        "hover:bg-green-600",
      ],
      danger: [
        "bg-red-500 text-white",
        "border-red-700",
        "shadow-[inset_-2px_-2px_0_0_rgba(0,0,0,0.3),inset_2px_2px_0_0_rgba(255,255,255,0.3)]",
        "active:shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_0_rgba(255,255,255,0.3)]",
        "hover:bg-red-600",
      ],
      outline: [
        "bg-transparent text-gray-800",
        "border-gray-800",
        "hover:bg-gray-100",
        "active:bg-gray-200",
      ],
    },
    size: {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    },
    pixelated: {
      true: "font-mono tracking-wider",
      false: "font-sans",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    pixelated: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  /**
   * Enable playful bounce animation on click
   */
  playful?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      pixelated,
      playful = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const MotionButton = playful ? motion.button : "button";

    const motionProps = playful
      ? {
          whileTap: disabled ? {} : { scale: 0.95 },
          whileHover: disabled ? {} : { scale: 1.02 },
        }
      : {};

    return (
      <MotionButton
        className={button({ variant, size, pixelated, className })}
        ref={ref as any}
        disabled={disabled}
        {...motionProps}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";
