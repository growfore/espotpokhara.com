import { cn } from "@/lib/utils";

interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right" | "top" | "bottom";
  blurIntensity?: number;
}

export function ProgressiveBlur({
  direction = "left",
  blurIntensity = 1,
  className,
  ...props
}: ProgressiveBlurProps) {
  const directionStyles: Record<string, string> = {
    left: "bg-gradient-to-r from-paper-white via-paper-white/80 to-transparent [mask-image:linear-gradient(to_right,black_0%,transparent_100%)]",
    right:
      "bg-gradient-to-l from-paper-white via-paper-white/80 to-transparent [mask-image:linear-gradient(to_left,black_0%,transparent_100%)]",
    top: "bg-gradient-to-b from-paper-white via-paper-white/80 to-transparent [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]",
    bottom:
      "bg-gradient-to-t from-paper-white via-paper-white/80 to-transparent [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]",
  };

  return (
    <div
      className={cn("pointer-events-none absolute", directionStyles[direction], className)}
      style={{ backdropFilter: `blur(${blurIntensity * 4}px)` }}
      {...props}
    />
  );
}
