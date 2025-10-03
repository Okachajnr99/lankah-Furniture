import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craftsmanImage from "@/assets/about-craftsman.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Every piece is crafted with meticulous attention to detail and a commitment to excellence"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to every furniture piece we create"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority, from design consultation to delivery and beyond"
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We source responsibly and use eco-friendly materials in all our furniture"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About LANKAH
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Crafting timeless furniture with passion and precision since 2010
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, LANKAH HOME FURNITURE began with a simple vision: to create 
                    furniture that combines timeless design with exceptional craftsmanship. What 
                    started as a small workshop has grown into a trusted name in home furnishings.
                  </p>
                  <p>
                    Our journey has been driven by an unwavering commitment to quality and an 
                    understanding that furniture is more than just functional—it's an expression 
                    of your personal style and a cornerstone of comfortable living.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of satisfied customers, each with their 
                    own unique story of how our furniture has transformed their living spaces into 
                    homes they truly love.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={craftsmanImage}
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">14+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Furniture Designs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Skilled Artisans</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
