import { FadeIn } from "@/components/animations/FadeIn"

const services = [
  {
    title: "Web Applications",
    description: "Custom, high-performance web apps built with modern stacks (React, Node, Supabase) tailored to your specific business logic.",
    number: "01"
  },
  {
    title: "E-Commerce",
    description: "Scalable online stores with seamless payment integrations, inventory management, and optimized checkout flows.",
    number: "02"
  },
  {
    title: "Digital Branding",
    description: "Comprehensive brand identity design, ensuring your digital presence reflects your core values and speaks to your audience.",
    number: "03"
  },
  {
    title: "UI/UX Design",
    description: "User-centric interface design that prioritizes accessibility, engagement, and conversion.",
    number: "04"
  },
  {
    title: "Operational Systems",
    description: "Internal tools and dashboards designed to streamline your workflows and manage data efficiently.",
    number: "05"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-black relative border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <FadeIn>
            <h2 className="font-heading text-5xl md:text-7xl text-white leading-none">
              FULL STACK <span className="text-primary block">BRAND SOLUTIONS</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index}>
              <div className="group border border-border bg-secondary/20 p-8 h-full flex flex-col hover:bg-secondary/40 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-heading text-5xl text-border group-hover:text-primary/20 transition-colors">
                  {service.number}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 mt-auto">
                  {service.description}
                </p>
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
