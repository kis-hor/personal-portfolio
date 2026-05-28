import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-300",
        variant === "primary"
          ? "bg-[var(--primary)] text-white hover:opacity-90"
          : "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
