import { Card, CardContent } from "@/components/ui/card";
import geoSquareCompass from "@/assets/geo-square-compass.png";
import geoSquareBlueprint from "@/assets/geo-square-blueprint.png";
import geoSquareMonogram from "@/assets/geo-square-monogram.png";
import geoHorizontalTechnical from "@/assets/geo-horizontal-technical.png";
import geoHorizontalCorporate from "@/assets/geo-horizontal-corporate.png";
import geoHorizontalGeometric from "@/assets/geo-horizontal-geometric.png";

const GeoInternational = () => {
  const logos = [
    {
      id: 1,
      name: "Globe & Surveying (Square)",
      image: geoSquareCompass,
      description: "Globe with surveying equipment and city skyline in maroon and gold",
      layout: "square"
    },
    {
      id: 2,
      name: "World Construction (Square)",
      image: geoSquareBlueprint,
      description: "Globe with continents featuring construction crane and buildings in maroon",
      layout: "square"
    },
    {
      id: 3,
      name: "GI Globe Monogram (Square)",
      image: geoSquareMonogram,
      description: "Globe with GI monogram and surveying tools in maroon and gold",
      layout: "square"
    },
    {
      id: 4,
      name: "Globe & Crane Technical (Horizontal)",
      image: geoHorizontalTechnical,
      description: "Globe with construction crane in maroon and gold gradient",
      layout: "horizontal"
    },
    {
      id: 5,
      name: "Urban Globe Professional (Horizontal)",
      image: geoHorizontalCorporate,
      description: "Globe with city skyline and survey grid in maroon and gold",
      layout: "horizontal"
    },
    {
      id: 6,
      name: "Hexagon Globe (Horizontal)",
      image: geoHorizontalGeometric,
      description: "Hexagonal globe showing world continents in maroon and gold",
      layout: "horizontal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            GEO INTERNATIONAL
          </h1>
          <p className="text-lg text-muted-foreground">
            Survey • Design • Construction Logo Concepts
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Professional Logo Designs
          </h2>
          <p className="text-muted-foreground">
            Six modern professional logo concepts featuring globe elements with surveying, design, and construction symbols 
            in maroon and gold color schemes. Available in both square and horizontal layouts.
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
                Ready to Refine?
              </h3>
              <p className="text-muted-foreground">
                Choose your favorite design and we can adjust colors, typography, 
                or icon elements to perfectly represent GEO INTERNATIONAL's brand identity.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GeoInternational;
