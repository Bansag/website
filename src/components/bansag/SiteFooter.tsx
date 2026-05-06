import { Link } from "react-router-dom";

const ORANGE = "#FF5500";

const baybayinMap: Record<string, string> = {
  B: "ᜊ",
  A: "ᜀ",
  N: "ᜈ",
  S: "ᜐ",
  G: "ᜄ",
};
const letters = ["B", "A", "N", "S", "A", "G"];

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12 pb-12"
          style={{ borderBottom: "1px solid #1F1F1F" }}
        >
          {/* Logo */}
          <Link to="/" className="flex gap-2 items-end" data-hover="true">
            {letters.map((l, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "'Anton','Impact',sans-serif",
                    fontWeight: 400,
                    fontSize: 22,
                    color: ORANGE,
                    lineHeight: 1,
                  }}
                >
                  {l}
                </span>
                <span
                  style={{
                    fontFamily: "'Noto Sans Tagalog', serif",
                    fontWeight: 400,
                    fontSize: 9,
                    color: "#6E6A65",
                    lineHeight: 1,
                    marginTop: 2,
                  }}
                >
                  {baybayinMap[l]}
                </span>
              </div>
            ))}
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap gap-8">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#909090",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = ORANGE)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#909090")
                }
                data-hover="true"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:bansag.ph@gmail.com"
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#909090",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = ORANGE)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#909090")
            }
            data-hover="true"
          >
            bansag.ph@gmail.com
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#666660",
            }}
          >
            © 2024 Bansag. All Rights Reserved.
          </p>
          <p
            style={{
              fontFamily: "'Noto Sans Tagalog', serif",
              fontWeight: 400,
              fontSize: 14,
              color: "#7A7570",
              letterSpacing: "0.2em",
            }}
          >
            ᜊᜀᜈᜐᜀᜄ — ᜉᜒᜎᜒᜉᜒᜈᜓ ᜆᜒᜃ᜔
          </p>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#666660",
            }}
          >
            Building Filipino Brands
          </p>
        </div>
      </div>
    </footer>
  );
}
