import { FadeIn } from "@/components/animations/FadeIn"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Meha Online Booking",
    category: "Web Application / Booking System",
    description: "A comprehensive court booking system with integrated payments, real-time availability, and automated email notifications.",
    imageColor: "bg-orange-500/20"
  },
  {
    title: "Taglucop Resort",
    category: "E-Commerce / Hospitality",
    description: "A premium digital experience for a luxury resort, featuring seamless reservations and a stunning visual showcase.",
    imageColor: "bg-blue-500/20"
  }
]

export function WorkSection() {
  return (
    <section id="work" className="py-32 bg-black relative border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn>
            <h2 className="font-heading text-5xl md:text-7xl text-white leading-none">
              REAL WORK. <span className="text-primary block">REAL RESULTS.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <FadeIn key={project.title} delay={0.2}>
              <div className="group block cursor-pointer">
                <div className={`w-full aspect-[16/9] md:aspect-[21/9] ${project.imageColor} border border-border overflow-hidden relative mb-8`}>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 font-heading text-4xl text-white mix-blend-overlay">
                    IMAGE PLACEHOLDER
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary text-white font-heading px-8 py-4 uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                      View Case Study <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-primary uppercase tracking-widest text-sm font-medium">{project.category}</p>
                  </div>
                  <p className="text-muted-foreground max-w-md text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
