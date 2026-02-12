import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-base transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-flock text-white hover:bg-flock-dark",
  secondary: "bg-ink text-white hover:bg-gray-800",
  outline: "border-2 border-cream-dark text-ink hover:border-flock hover:text-flock-dark",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps & Omit<ComponentProps<"a">, "href">) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
