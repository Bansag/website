import { Link } from "react-router-dom";
import { ORANGE, baybayinMap, brandLetters, navLinks, CONTACT_EMAIL } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12 pb-12"
          style={{ borderBottom: "1px solid #1F1F1F" }}
        >
          <Link to="/" className="flex gap-2 items-end" data-hover="true" aria-label="Bansag home">
            {brandLetters.map((l, i) => (
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

          <div className="flex flex-wrap gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#909090",
                }}
                data-hover="true"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="nav-link"
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#909090",
            }}
            data-hover="true"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

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
            © {new Date().getFullYear()} Bansag. All Rights Reserved.
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
