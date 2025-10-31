import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Leaf, Clock, CheckCircle, Shield } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      experience: "15+ years",
      avatar: "https://picsum.photos/150/150?random=team1"
    },
    {
      name: "James Thompson",
      role: "Operations Manager",
      experience: "10+ years",
      avatar: "https://picsum.photos/150/150?random=team2"
    },
    {
      name: "Emma Davis",
      role: "Customer Service Lead",
      experience: "8+ years",
      avatar: "https://picsum.photos/150/150?random=team3"
    },
    {
      name: "Michael Chen",
      role: "Quality Assurance",
      experience: "12+ years",
      avatar: "https://picsum.photos/150/150?random=team4"
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Quality First",
      description: "We never compromise on quality. Every cleaning job is inspected to meet our high standards."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Trust & Reliability",
      description: "All our staff are fully vetted, insured, and trained to provide trustworthy service."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly",
      description: "We use environmentally friendly cleaning products that are safe for your family and pets."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen and adapt to your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              About SparkleClean UK
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Cleaning with a Personal Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2019, SparkleClean UK has grown from a small local service to one of the most trusted 
              cleaning companies across the United Kingdom. Our mission is simple: to provide exceptional cleaning 
              services that make our customers' lives easier and their spaces healthier.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50,000+</h3>
              <p className="text-gray-600">Hours of Cleaning</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://picsum.photos/500/400?random=office" 
                  alt="Our Office" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">From Small Beginnings to Nationwide Service</h3>
                <p className="text-gray-600 mb-4">
                  SparkleClean UK started as a small family business in London, with just two cleaners and a van. 
                  Our founder, Sarah Mitchell, believed that cleaning services should be reliable, trustworthy, 
                  and environmentally conscious.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, we're proud to serve customers across the UK with a team of over 100 professional cleaners. 
                  Despite our growth, we've never lost sight of our core values: quality, reliability, and customer satisfaction.
                </p>
                <p className="text-gray-600">
                  Every member of our team shares our passion for excellence and commitment to making spaces cleaner, 
                  healthier, and more enjoyable for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Fully Certified & Insured
            </h2>
            <div className="grid grid-cols-2 mdOf course, my apologies for that. I will continue and complete the `About.tsx` file now.

<applaa-write path="src/pages/About.tsx" description="Completing the About page file">
-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <p className="font-semibold">ISO 9001</p>
                <p className="text-sm text-gray-600">Quality Management</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <p className="font-semibold">Fully Insured</p>
                <p className="text-sm text-gray-600">£5M Coverage</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-10 h-10 text-blue-600" />
                </div>
                <p className="font-semibold">DBS Checked</p>
                <p className="text-sm text-gray-600">All Staff</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
                <p className="font-semibold">Green Certified</p>
                <p className="text-sm text-gray-600">Eco-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;