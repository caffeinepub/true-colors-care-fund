import { Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "/" },
  { label: "Get Help", page: "/get-help" },
  { label: "Donate", page: "/donate" },
  { label: "Guidelines", page: "/guidelines" },
  { label: "Contact", page: "/contact" },
];

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      {/* Trans flag stripe */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #5BCEFA 0%, #F5A9B8 50%, #5BCEFA 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
              True Colors Care Fund
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Helping trans individuals access the HRT they deserve through
              community love and support.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => navigate(link.page)}
                    className="text-sm text-gray-500 hover:text-trans-blue-dark transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Truecolorscarefund@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-trans-pink-dark transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  Truecolorscarefund@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@sick_ruby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <SiTiktok className="w-4 h-4 flex-shrink-0" />
                  @sick_ruby
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} True Colors Care Fund. Built with love
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
