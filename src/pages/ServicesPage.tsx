import SeoHead from "../components/bansag/SeoHead";
import ServiceMatrix from "../components/bansag/ServiceMatrix";
import { Link } from "react-router-dom";
import { ORANGE, DARK } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services — Web Design, Custom Software & Brand Identity"
        description="Bansag offers six core services for Philippine businesses: brand websites, custom systems, digital platforms, brand identity, growth tools, and tech consulting. Built end-to-end by a Filipino tech studio."
        canonicalPath="/services"
        keywords="web design Philippines, custom software development Philippines, brand identity Philippines, booking system development, digital platform Philippines, tech consulting Philippines, web development agency Philippines"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Systems Development",
          "provider": { "@type": "Organization", "name": "Bansag", "url": "https://bansag.com" },
          "areaServed": { "@type": "Country", "name": "Philippines" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bansag Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Websites", "description": "Fully custom websites designed and developed from scratch — every layout, interaction, and line of code tailored to your brand." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Systems", "description": "Custom booking engines, management dashboards, and operational tools engineered around your exact workflow." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Platforms", "description": "Unified digital platforms — customer portals, mobile apps, and internal tools — connected into one seamless ecosystem." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity", "description": "Complete visual identity systems: logo, typography, color palette, and motion guidelines." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Tools", "description": "Analytics dashboards, email automation, CRM integrations, and conversion tracking tailored to your business goals." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tech Consulting", "description": "Strategic guidance on tech stack, architecture, and digital transformation from founders who have built production systems." } }
            ]
          }
        }}
      />
      <ServiceMatrix />

      <section className="relative overflow-hidden py-20 px-6 md:px-16" style={{ background: ORANGE }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${DARK}18 1px, transparent 1px), linear-gradient(90deg, ${DARK}18 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2
            className="leading-none mb-6"
            style={{
              fontSize: "clamp(40px, 8vw, 100px)",
              fontFamily: "'Anton','Impact',sans-serif",
              fontWeight: 400,
              color: DARK,
            }}
          >
            READY TO START?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 transition-all hover:scale-105"
            style={{
              background: DARK,
              color: ORANGE,
              fontFamily: "'Inter',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
            data-hover="true"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
