import SeoHead from "../components/bansag/SeoHead";
import ConversionMonolith from "../components/bansag/ConversionMonolith";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SeoHead
        title="Contact — Start a Project with Bansag"
        description="Ready to build your digital system? Email Bansag at hello@bansag.com. We reply within two business days. Tell us your project, timeline, and references — we'll take it from there."
        canonicalPath="/contact"
        keywords="hire Filipino web developers, contact web development agency Philippines, start a project Philippines, Bansag contact, Filipino tech studio inquiry"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Bansag",
          "url": "https://bansag.com/contact",
          "description": "Contact Bansag Filipino Tech Studio to start a web development, custom software, or brand identity project.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Bansag",
            "email": "hello@bansag.com",
            "url": "https://bansag.com"
          }
        }}
      />
      <ConversionMonolith />
    </div>
  );
}
