import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Filter } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Link } from "@tanstack/react-router";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service.toLowerCase().includes(filter.toLowerCase()));

  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Customer Reviews
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Don't just take our word for it. Read genuine reviews from our satisfied customers 
              across the United Kingdom who have experienced the SparkleClean difference.
            </p>
            
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{averageRating}</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{testimonials.length}+</div>
                <div className="text-gray-600">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by service:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                All Services
              </Button>
              <Button
                variant={filter === "residential" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("residential")}
              >
                Residential
              </Button>
              <Button
                variant={filter === "commercial" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("commercial")}
              >
                Commercial
              </Button>
              <Button
                variant={filter === "deep" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("deep")}
              >
                Deep Cleaning
              </Button>
              <Button
                variant={filter === "carpet" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("carpet")}
              >
                Carpet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString('en-GB', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Customer Satisfaction Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-600">Would Recommend</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">96%</h3>
                <p className="text-gray-600">Repeat Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">4.9/5</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service that our customers rave about. 
            Book your cleaning service today and see why we're the UK's most trusted cleaning company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link to="/booking">
                Book Your Cleaning
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;