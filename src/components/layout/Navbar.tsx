import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="font-heading text-white text-xl leading-none">B</span>
          </div>
          <span className="font-heading text-xl tracking-wide uppercase text-foreground">Bansag</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-primary transition-colors">SERVICES</a>
          <a href="#work" className="hover:text-primary transition-colors">WORK</a>
        </div>

        <div>
          <Button className="font-heading uppercase tracking-widest text-white bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-none">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
