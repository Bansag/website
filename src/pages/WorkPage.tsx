import SeoHead from "../components/bansag/SeoHead";
import ProjectArchive from "../components/bansag/ProjectArchive";

export default function WorkPage() {
  return (
    <div className="pt-20">
      <SeoHead
        title="Work — Project Portfolio & Case Studies"
        description="Explore Bansag's project portfolio: Meha Online (sports booking platform) and Taglucop Resort (resort management system). Real systems built for real Philippine businesses."
        canonicalPath="/work"
        keywords="Filipino web development portfolio, software development case studies Philippines, booking system Philippines, resort management system, React development Philippines"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Bansag Work Portfolio",
          "description": "Case studies and project portfolio for Bansag Filipino Tech Studio.",
          "url": "https://bansag.com/work",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Meha Online",
                  "description": "Sports booking platform — real-time court reservation system with live availability, online payments, and facility management dashboard.",
                  "url": "https://www.meha.online",
                  "creator": { "@type": "Organization", "name": "Bansag" }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Taglucop Resort",
                  "description": "Resort management system — marketing website, online booking engine with dynamic pricing, add-on packages, and admin control panel.",
                  "url": "https://taglucop-co.vercel.app",
                  "creator": { "@type": "Organization", "name": "Bansag" }
                }
              }
            ]
          }
        }}
      />
      <ProjectArchive />
    </div>
  );
}
