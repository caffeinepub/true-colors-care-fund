import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "/" },
  { label: "Get Help", page: "/get-help" },
  { label: "Donate", page: "/donate" },
  { label: "Guidelines", page: "/guidelines" },
  { label: "Contact", page: "/contact" },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("/")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="relative flex items-center justify-center w-9 h-9">
              {/* Trans flag stripes inside heart */}
              <Heart className="absolute w-9 h-9 fill-trans-pink text-trans-pink" />
              <div
                className="absolute inset-0 flex flex-col overflow-hidden rounded-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <div className="flex-1" style={{ background: "#5BCEFA" }} />
                <div className="flex-1" style={{ background: "#F5A9B8" }} />
                <div className="flex-1" style={{ background: "#fff" }} />
                <div className="flex-1" style={{ background: "#F5A9B8" }} />
                <div className="flex-1" style={{ background: "#5BCEFA" }} />
              </div>
              <Heart
                className="absolute w-9 h-9 text-trans-pink"
                style={{ fill: "none", strokeWidth: 2 }}
              />
            </div>
            <span className="font-display font-bold text-base sm:text-lg text-gray-900 leading-tight">
              True Colors
              <span className="block text-xs font-body font-medium text-gray-500 leading-none">
                Care Fund
              </span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPage === link.page
                    ? "bg-trans-blue-light text-trans-blue-dark font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                  currentPage === link.page
                    ? "bg-trans-blue-light text-trans-blue-dark font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
