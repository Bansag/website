export function Footer() {
  return (
    <footer className="border-t border-border bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="font-heading text-6xl md:text-9xl text-primary mb-4 opacity-90">BANSAG</h2>
        <p className="font-baybayin text-3xl md:text-5xl text-muted-foreground mb-8 tracking-widest">
          ᜊᜈ᜔ᜐᜄ᜔
        </p>
        <p className="text-muted-foreground max-w-lg mb-12 text-sm md:text-base">
          A digital branding and technology partner crafting custom web experiences and operational systems for Filipino companies.
        </p>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors text-muted-foreground">hello@base44.app</a>
          <a href="#" className="hover:text-primary transition-colors text-muted-foreground">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors text-muted-foreground">LinkedIn</a>
        </div>
        
        <div className="mt-20 text-xs text-muted-foreground/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Base44. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
