import { Card, CardContent } from "@/components/ui/card";
import logoMinimalist from "@/assets/logo-minimalist.png";
import logoElegant from "@/assets/logo-elegant.png";
import logoGeometric from "@/assets/logo-geometric.png";
import logoOrganic from "@/assets/logo-organic.png";

const Index = () => {
  const logos = [
    {
      id: 1,
      name: "Minimalist Modern",
      image: logoMinimalist,
      description: "Clean, contemporary design with geometric elements"
    },
    {
      id: 2,
      name: "Elegant Classic",
      image: logoElegant,
      description: "Sophisticated luxury with timeless appeal"
    },
    {
      id: 3,
      name: "Geometric Contemporary",
      image: logoGeometric,
      description: "Modern architectural aesthetic with bold shapes"
    },
    {
      id: 4,
      name: "Warm Organic",
      image: logoOrganic,
      description: "Natural, welcoming design with earthy tones"
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
            We've created four distinct logo concepts for your furniture brand. 
            Each design captures a unique essence while maintaining professionalism and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {logos.map((logo) => (
            <Card 
              key={logo.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="bg-white p-12 flex items-center justify-center min-h-[300px]">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-auto max-w-md object-contain"
                  />
                </div>
                <div className="p-6 bg-card border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {logo.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {logo.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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
