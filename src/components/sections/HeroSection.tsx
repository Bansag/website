import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 bg-primary/10 text-primary uppercase tracking-widest text-sm font-medium">
              Digital Branding & Technology Partner
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-white mb-8 tracking-tight">
              WE BUILD <span className="text-primary block">COMPLETE</span> DIGITAL SYSTEMS
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting custom web experiences and operational systems for Filipino companies that refuse to blend in.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="font-heading uppercase tracking-widest text-white bg-primary hover:bg-primary/90 px-10 py-8 text-xl rounded-none w-full sm:w-auto group">
                Start Your Project
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="font-heading uppercase tracking-widest border-border text-foreground hover:bg-white hover:text-black px-10 py-8 text-xl rounded-none w-full sm:w-auto transition-colors">
                View Our Work
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
