import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productBed from "@/assets/product-bed.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Living Room", "Bedroom", "Dining Room", "Storage", "Office"];

  const products = [
    {
      id: 1,
      name: "Modern Comfort Sofa",
      price: "$1,299",
      image: productSofa,
      category: "Living Room",
      rating: 5
    },
    {
      id: 2,
      name: "Elegant Dining Set",
      price: "$2,499",
      image: productDining,
      category: "Dining Room",
      rating: 5
    },
    {
      id: 3,
      name: "Luxury King Bed",
      price: "$1,899",
      image: productBed,
      category: "Bedroom",
      rating: 5
    },
    {
      id: 4,
      name: "Minimalist Bookshelf",
      price: "$699",
      image: productShelf,
      category: "Storage",
      rating: 5
    },
    {
      id: 5,
      name: "Velvet Accent Chair",
      price: "$549",
      image: productChair,
      category: "Living Room",
      rating: 5
    },
    {
      id: 6,
      name: "Live Edge Coffee Table",
      price: "$899",
      image: productTable,
      category: "Living Room",
      rating: 5
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our complete collection of handcrafted furniture designed to elevate your living spaces
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
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
                      <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(product.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
