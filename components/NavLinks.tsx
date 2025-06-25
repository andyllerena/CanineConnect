import React from "react";
export default function NavLinks() {
  // Navigation items matching the reference design
  const navItems = ["Mission", "About Us", "Team", "Contact", "FAQ"];

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-black hover:text-[var(--primary)] transition-colors duration-200 font-medium text-lg relative group"
        >
          {item}
          {/* Hover underline effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-200 group-hover:w-full"></span>
        </a>
      ))}
    </nav>
  );
}
