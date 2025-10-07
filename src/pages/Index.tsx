import { Card, CardContent } from "@/components/ui/card";
import logoSquareMinimalist from "@/assets/logo-square-minimalist.png";
import logoSquareElegant from "@/assets/logo-square-elegant.png";
import logoSquareMonogram from "@/assets/logo-square-monogram.png";
import logoHorizontalModern from "@/assets/logo-horizontal-modern.png";
import logoHorizontalSophisticated from "@/assets/logo-horizontal-sophisticated.png";
import logoHorizontalArchitectural from "@/assets/logo-horizontal-architectural.png";

const Index = () => {
  const logos = [
    {
      id: 1,
      name: "Minimalist Modern (Square)",
      image: logoSquareMinimalist,
      description: "Clean geometric armchair icon with modern sans-serif typography",
      layout: "square"
    },
    {
      id: 2,
      name: "Elegant Luxury (Square)",
      image: logoSquareElegant,
      description: "Ornate sofa icon with gold accents and sophisticated details",
      layout: "square"
    },
    {
      id: 3,
      name: "Monogram Classic (Square)",
      image: logoSquareMonogram,
      description: "Intertwined L+H letters forming elegant furniture motif",
      layout: "square"
    },
    {
      id: 4,
      name: "Contemporary Modern (Horizontal)",
      image: logoHorizontalModern,
      description: "Dining set icon with refined contemporary typography",
      layout: "horizontal"
    },
    {
      id: 5,
      name: "Sophisticated Home (Horizontal)",
      image: logoHorizontalSophisticated,
      description: "House with furniture elements in gold on black background",
      layout: "horizontal"
    },
    {
      id: 6,
      name: "Architectural Premium (Horizontal)",
      image: logoHorizontalArchitectural,
      description: "Geometric bedroom scene with architectural clean lines",
      layout: "horizontal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            LANKAH HOME FURNITURE
          </h1>
          <p className="text-lg text-muted-foreground">
            Logo Design Concepts
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Explore Your Logo Options
          </h2>
          <p className="text-muted-foreground">
            We've created six modern luxury logo concepts in black, gold, brown, and white. 
            Each design features icon + text with "Where Elegance Meets Home" tagline in both square and horizontal layouts.
          </p>
        </div>

        <div className="space-y-12">
          {/* Square Logos Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Square Layouts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {logos.filter(logo => logo.layout === "square").map((logo) => (
                <Card 
                  key={logo.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="bg-white p-8 flex items-center justify-center min-h-[280px]">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-6 bg-card border-t border-border">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {logo.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {logo.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Horizontal Logos Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Horizontal Layouts
            </h3>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {logos.filter(logo => logo.layout === "horizontal").map((logo) => (
                <Card 
                  key={logo.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="bg-white p-8 flex items-center justify-center min-h-[240px]">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-auto max-w-2xl object-contain"
                      />
                    </div>
                    <div className="p-6 bg-card border-t border-border">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {logo.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {logo.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Need Modifications?
              </h3>
              <p className="text-muted-foreground">
                Let us know which design resonates with you, and we can refine colors, 
                typography, or elements to perfectly match your vision.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
