import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs md:text-sm font-label-sm transition-all disabled:pointer-events-none disabled:opacity-50 group btn-squish",
  {
    variants: {
      variant: {
        primary: "text-white bg-crimson hover:bg-crimson-light",
        secondary: "text-white bg-navy hover:bg-navy-light",
        tertiary: "text-on-surface hover:text-white border border-outline-variant hover:border-crimson bg-linen-bg hover:bg-crimson",
        outline: "text-on-surface border border-outline-variant hover:border-navy hover:bg-navy backdrop-blur hover:text-white",
        underline: "xl:px-0 mb-2 underline underline-offset-[10px] decoration-[1.5px] decoration-on-surface",
      },
      size: {
        default: "h-9 md:h-10 px-4 md:px-4",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
      },
      width: {
        auto: "w-auto",
        fullWidth: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "auto",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  disableIcon?: boolean;
  href?: string;
  external?: boolean;
  download?: boolean;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ children, className, variant, size, width, disableIcon, href, external, download, ...props }, ref) => {
    const content = (
      <>
        {children}
        {!disableIcon && (
          <span className="material-symbols-outlined text-base transition duration-300 group-hover:translate-x-0.5">
            arrow_forward
          </span>
        )}
      </>
    );

    if (external || download) {
      return (
        <a
          href={href}
          ref={ref}
          rel="noopener noreferrer"
          target="_blank"
          className={cn(buttonVariants({ variant, size, width, className }))}
          {...props}
        >
          {content}
        </a>
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          ref={ref}
          className={cn(buttonVariants({ variant, size, width, className }))}
          {...props}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        className={cn(buttonVariants({ variant, size, width, className }))}
        {...props}
      >
        {content}
      </a>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
