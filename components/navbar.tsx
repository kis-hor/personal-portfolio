import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)/0.8] backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Kishor G.C.
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center gap-4 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[var(--muted)] transition hover:text-[var(--foreground)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
