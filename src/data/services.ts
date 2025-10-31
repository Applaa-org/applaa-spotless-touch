export const services = [
  {
    id: 1,
    name: "Regular Residential Cleaning",
    description: "Weekly or bi-weekly cleaning service for your home including dusting, vacuuming, kitchen and bathroom cleaning.",
    price: "£60-£120",
    duration: "2-4 hours",
    features: ["Living areas", "Kitchen cleaning", "Bathroom cleaning", "Bedroom tidying", "Floor vacuuming/mopping"],
    category: "residential",
    popular: true
  },
  {
    id: 2,
    name: "Deep Cleaning",
    description: "Comprehensive deep cleaning service reaching every corner of your home for a fresh start.",
    price: "£150-£300",
    duration: "4-8 hours",
    features: ["All regular services", "Inside windows", "Baseboards cleaning", "Cabinet cleaning", "Appliance cleaning"],
    category: "residential"
  },
  {
    id: 3,
    name: "Carpet Cleaning",
    description: "Professional carpet steam cleaning to remove stains, dirt, and allergens.",
    price: "£40-£80",
    duration: "1-2 hours",
    features: ["Steam cleaning", "Stain removal", "Deodorizing", "Quick drying", "Eco-friendly products"],
    category: "specialized"
  },
  {
    id: 4,
    name: "Office Cleaning",
    description: "Professional cleaning services for commercial spaces to maintain a healthy work environment.",
    price: "£100-£250",
    duration: "2-4 hours",
    features: ["Desk cleaning", "Floor care", "Restroom sanitation", "Trash removal", "Common areas"],
    category: "commercial"
  },
  {
    id: 5,
    name: "End of Tenancy Cleaning",
    description: "Thorough cleaning service for tenants moving out or landlords preparing properties.",
    price: "£200-£400",
    duration: "6-10 hours",
    features: ["Full property cleaning", "Appliance deep clean", "Window cleaning", "Guaranteed standards", "Inventory check support"],
    category: "specialized"
  },
  {
    id: 6,
    name: "Post-Construction Cleaning",
    description: "Specialized cleaning after renovation or construction work to remove dust and debris.",
    price: "£250-£500",
    duration: "4-8 hours",
    features: ["Dust removal", "Debris cleanup", "Surface polishing", "Window cleaning", "Final touch-ups"],
    category: "commercial"
  }
];

export const categories = [
  { id: "residential", name: "Residential", icon: "🏠" },
  { id: "commercial", name: "Commercial", icon: "🏢" },
  { id: "specialized", name: "Specialized", icon: "✨" }
];