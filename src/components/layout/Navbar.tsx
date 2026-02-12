"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/images/flock-logo.png`}
              alt="Flock"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-ink">Flock</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-dark hover:text-flock-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#download" variant="primary">
              Download
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-cream-dark bg-cream">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink hover:text-flock-dark py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#download" variant="primary" className="mt-2">
              Download
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
