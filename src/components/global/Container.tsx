import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva(
  "h-full mx-auto max-w-6xl px-6 md:px-10",
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
    small: "pt-5",
    medium: "pt-10 md:pt-12",
    default: "pt-12 md:pt-20",
    large: "pt-14 lg:pt-28",
  };

  const paddingBottomStyles: Record<string, string> = {
    none: "pb-0",
    small: "pb-5",
    medium: "pb-10 md:pb-12",
    default: "pb-12 md:pb-20",
    large: "pb-14 lg:pb-28",
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
