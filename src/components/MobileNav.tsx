"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="terminal-chip min-w-[5.25rem]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div
        className={`fixed inset-0 z-[60] bg-[#010604]/78 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        inert={!isOpen}
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[70] h-full w-[min(84vw,22rem)] border-l border-[color:var(--color-border)] bg-[color:var(--color-shell)] p-6 shadow-[0_30px_80px_-60px_var(--color-shadow)] transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="terminal-kicker">navigation</p>
          <button
            ref={closeButtonRef}
            type="button"
            className="terminal-chip"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="terminal-chip w-full justify-start px-4 py-3 text-xs"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="terminal-button-primary mt-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </Link>
        </nav>
      </aside>
    </div>
  );
}
