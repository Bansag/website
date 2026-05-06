import { FadeIn } from "@/components/animations/FadeIn"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-black relative border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn delay={0.2} direction="right">
              <h2 className="font-heading text-5xl md:text-7xl text-white leading-none mb-6">
                BANSAG <span className="text-primary">MEANS</span> BRAND.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="right">
              <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
                <p>
                  In the local dialect, <strong className="text-white font-medium">Bansag</strong> translates to alias, nickname, or brand. It's the name you are known by.
                </p>
                <p>
                  We believe that a brand is more than just a logo—it's the entire digital ecosystem that supports your business. We build systems that make your Bansag unforgettable.
                </p>
                <p>
                  Based in the Philippines, we partner with businesses ready to elevate their digital presence through tailored web applications and robust operational systems.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <FadeIn delay={0.4} direction="left">
              <div className="aspect-square bg-secondary/30 border border-border p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                <div className="text-center relative z-10">
                  <span className="font-baybayin text-[10rem] md:text-[15rem] leading-none text-white opacity-80 block group-hover:scale-110 transition-transform duration-700">
                    ᜊᜈ᜔ᜐᜄ᜔
                  </span>
                  <span className="font-heading uppercase tracking-widest text-primary mt-4 block">
                    ban·sag
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
