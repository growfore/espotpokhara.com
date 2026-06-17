import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "font-heading antialiased text-on-surface tracking-tighter",
  {
    variants: {
      tag: {
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
      },
      size: {
        xxxl: "text-display-lg",
        xxl: "text-display-md",
        xl: "text-headline-md",
        lg: "text-headline-sm",
        md: "text-headline-xs",
        sm: "text-headline-xxs",
      },
    },
    defaultVariants: {
      tag: "h1",
      size: "xxl",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const sizeToComponent = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

export default function Heading({
  tag = "h1",
  size = "xxl",
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as || sizeToComponent[tag as keyof typeof sizeToComponent] || "h1";

  return (
    <Component className={cn(headingVariants({ tag, size, className }))} {...props}>
      {children}
    </Component>
  );
}
