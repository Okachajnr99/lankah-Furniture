import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Truck, Shield, HeadphonesIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-furniture.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productBed from "@/assets/product-bed.jpg";

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free shipping on orders over $500"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "5-year warranty on all products"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated customer service team"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Modern Sofa",
      price: "$1,299",
      image: productSofa,
      category: "Living Room"
    },
    {
      id: 2,
      name: "Dining Set",
      price: "$2,499",
      image: productDining,
      category: "Dining Room"
    },
    {
      id: 3,
      name: "Luxury Bed",
      price: "$1,899",
      image: productBed,
      category: "Bedroom"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Transform Your Space
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Discover handcrafted furniture that brings elegance and comfort to your home
              </p>
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Shop Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated selection of premium furniture pieces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-accent font-medium mb-2">{product.category}</p>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View All Products
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Visit our showroom or contact us today to start your furniture journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
