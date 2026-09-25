export const destinations = [
  { id: 1, name: "Kashmir", country: "India", duration: "5 Days / 4 Nights", price: "₹24,999", image: "https://images.unsplash.com/photo-1595815771614-ade9d2a0c9bd?auto=format&fit=crop&w=1200&q=85", description: "Snow-capped mountains, peaceful lakes and unforgettable valley views.", tag: "Most Loved" },
  { id: 2, name: "Bali", country: "Indonesia", duration: "6 Days / 5 Nights", price: "₹39,999", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85", description: "Tropical beaches, temples and memorable island experiences.", tag: "International" },
  { id: 3, name: "Dubai", country: "UAE", duration: "5 Days / 4 Nights", price: "₹49,999", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85", description: "Modern luxury, desert adventures and iconic city attractions.", tag: "Trending" },
  { id: 4, name: "Kerala", country: "India", duration: "4 Days / 3 Nights", price: "₹18,999", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85", description: "Backwaters, lush hills and slow travel through God's Own Country.", tag: "Weekend Pick" },
  { id: 5, name: "Singapore", country: "Singapore", duration: "5 Days / 4 Nights", price: "₹44,999", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85", description: "Family-friendly attractions, food trails and futuristic skylines.", tag: "Family" },
  { id: 6, name: "Rajasthan", country: "India", duration: "7 Days / 6 Nights", price: "₹28,999", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85", description: "Royal forts, colorful markets and rich heritage across Rajasthan.", tag: "Heritage" },
];

export const packages = [
  { id: 101, title: "Kashmir Escape", destination: "Srinagar • Gulmarg • Pahalgam", duration: "5 Days / 4 Nights", price: "₹24,999", image: destinations[0].image, highlights: ["Airport transfers", "Breakfast & dinner", "Private cab", "Sightseeing"], featured: true },
  { id: 102, title: "Bali Island Discovery", destination: "Bali • Ubud • Nusa Dua", duration: "6 Days / 5 Nights", price: "₹39,999", image: destinations[1].image, highlights: ["Hotel stay", "Daily breakfast", "Airport transfers", "Island tours"], featured: true },
  { id: 103, title: "Dubai City & Desert", destination: "Dubai • Marina • Desert Safari", duration: "5 Days / 4 Nights", price: "₹49,999", image: destinations[2].image, highlights: ["4-star hotel", "Desert safari", "City tour", "Airport transfers"], featured: false },
  { id: 104, title: "Kerala Backwater Trail", destination: "Kochi • Munnar • Alleppey", duration: "4 Days / 3 Nights", price: "₹18,999", image: destinations[3].image, highlights: ["Resort stay", "Houseboat", "Private cab", "Daily breakfast"], featured: false },
  { id: 105, title: "Singapore Family Fun", destination: "Singapore • Sentosa • Marina Bay", duration: "5 Days / 4 Nights", price: "₹44,999", image: destinations[4].image, highlights: ["Family hotel", "City tour", "Sentosa visit", "Airport transfers"], featured: false },
  { id: 106, title: "Royal Rajasthan", destination: "Jaipur • Jodhpur • Udaipur", duration: "7 Days / 6 Nights", price: "₹28,999", image: destinations[5].image, highlights: ["Heritage hotels", "Private cab", "Fort tours", "Breakfast"], featured: false },
];

export const testimonials = [
  { name: "Ananya Rao", location: "Bengaluru", text: "The entire Kashmir trip was smooth from airport pickup to the final hotel stay. The itinerary was practical and the support was excellent." },
  { name: "Vikram Mehta", location: "Hyderabad", text: "We booked a Bali holiday for our family and loved how easy everything was. Great hotels, clear communication and no last-minute surprises." },
  { name: "Priya Shah", location: "Mumbai", text: "SkyWay helped us plan a relaxed Kerala trip around our budget. The team suggested the right places without overpacking the schedule." },
];
