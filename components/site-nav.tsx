"use client";

import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteNavProps = {
  items: ReadonlyArray<NavigationItem>;
};

export function SiteNav({ items }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <nav
      className="site-nav"
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="nav-inner section-shell">
        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>Menu</span>
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links${isOpen ? " nav-links-open" : ""}`}
        >
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
