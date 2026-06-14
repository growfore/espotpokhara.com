import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva(
  "h-full mx-auto max-w-8xl px-6 md:px-10",
  {
    variants: {
      variant: {
        contained: "",
        fullWidth: "max-w-full",
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  }
);

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  paddingTop?: "none" | "small" | "medium" | "default" | "large";
  paddingBottom?: "none" | "small" | "medium" | "default" | "large";
}

export default function Container(props: ContainerProps) {
  const { variant, className, paddingTop, paddingBottom, children, ...rest } = props;

  const paddingTopStyles: Record<string, string> = {
    none: "pt-0",
    small: "pt-7",
    medium: "pt-14 md:pt-16",
    default: "pt-16 md:pt-28",
    large: "pt-16 lg:pt-36",
  };

  const paddingBottomStyles: Record<string, string> = {
    none: "pb-0",
    small: "pb-7",
    medium: "pb-14 md:pb-16",
    default: "pb-16 md:pb-28",
    large: "pb-16 lg:pb-36",
  };

  return (
    <div
      className={cn(
        paddingTop ? paddingTopStyles[paddingTop] : undefined,
        paddingBottom ? paddingBottomStyles[paddingBottom] : undefined,
        containerVariants({ variant, className })
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
