import SeoHead from "../components/bansag/SeoHead";
import AboutSection from "../components/bansag/AboutSection";
import TeamSection from "../components/bansag/TeamSection";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SeoHead
        title="About — Filipino Tech Studio Building Digital Systems"
        description="Bansag means brand in Filipino. We are a Filipino tech company that crafts complete digital presences for businesses — from visual identity to the operational systems that power them."
        canonicalPath="/about"
        keywords="Filipino tech company, Philippines software studio, Filipino developers, Bansag about, who is Bansag, Filipino digital agency"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Bansag",
          "url": "https://bansag.com/about",
          "description": "Bansag is a Filipino tech studio that builds complete digital systems for businesses.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Bansag",
            "foundingDate": "2026",
            "description": "In Filipino, Bansag is the word for brand or identity. We craft the complete digital presence of businesses — from visual identity to the systems that power their operations.",
            "url": "https://bansag.com",
            "email": "hello@bansag.com"
          }
        }}
      />
      <AboutSection />
      <TeamSection />
    </div>
  );
}
