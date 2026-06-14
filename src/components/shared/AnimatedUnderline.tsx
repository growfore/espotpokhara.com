import { cn } from "@/lib/utils";

export default function AnimatedUnderline({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute bottom-0 left-0 h-0.5 bg-current max-w-0 group-hover:max-w-full transition-all duration-300 ease-in-out",
        className
      )}
    />
  );
}
