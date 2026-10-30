// Kidoz Kids Fashion - Comprehensive Product Catalog Data
// Inspired by @kidozkidsfashion

export const STORE_CONFIG = {
  storeName: "Kidoz Kids Fashion",
  instagramHandle: "@kidozkidsfashion",
  instagramUrl: "https://www.instagram.com/kidozkidsfashion?utm_source=qr&exln=YjMzd2YyMmszd2Iz",
  whatsappNumber: "919891138821",
  whatsappDisplayNumber: "+91 98911 38821",
  currency: "₹",
  freeShippingThreshold: 999
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Summer Floral Breeze Layered Frock",
    category: "girls",
    tag: "Bestseller",
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    rating: 4.9,
    reviews: 142,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Blush Pink", "Lilac Breeze", "Sunny Yellow"],
    fabric: "100% Breathable Organic Cotton with soft lining",
    description: "Delightful layered ruffle frock featuring sweet pastel floral prints. Feather-light, gentle on sensitive skin, and pre-washed to avoid shrinkage. Ideal for day outings, birthday parties, and festive family photoshoots.",
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "100% pure breathable combed organic cotton",
      "Multi-tier flare with skin-friendly cotton inner lining",
      "Concealed anti-pinch soft back closure",
      "Azo-free non-toxic herbal dyes safe for baby skin",
      "Pre-shrunk fabric to prevent post-wash shrinkage"
    ],
    reviewsList: [
      { name: "Pooja Sharma", city: "Delhi", rating: 5, date: "2 days ago", comment: "Fabric quality is unbelievably soft! My 3-year-old daughter wore it whole day without any irritation.", verified: true },
      { name: "Megha Singhal", city: "Mumbai", rating: 5, date: "1 week ago", comment: "Exact same as pictured! The floral prints and flare look gorgeous in photos.", verified: true },
      { name: "Ananya Iyer", city: "Bengaluru", rating: 4.8, date: "2 weeks ago", comment: "Fast dispatch within 24 hours. Fitting is true to size chart.", verified: true },
      { name: "Ritika Sen", city: "Kolkata", rating: 5, date: "3 weeks ago", comment: "Ordered via WhatsApp directly, very smooth customer service and great stitching.", verified: true }
    ]
  },
  {
    id: 2,
    name: "Dapper Linen Shirt & Bermuda Shorts Set",
    category: "boys",
    tag: "Trending",
    price: 999,
    originalPrice: 1699,
    discount: "41% OFF",
    rating: 4.8,
    reviews: 98,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Olive Green", "Beige Sand", "Sky Blue"],
    fabric: "Premium Cotton Linen Blend (Non-itchy)",
    description: "Classic collar casual shirt paired with comfortable elastic-waist Bermuda shorts with functional pockets. Effortlessly stylish for family gatherings, weddings, and sunny vacation playdates.",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1543854538-89c894982635?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Natural linen cotton weave keeps little boys cool and sweat-free",
      "Elasticated comfortable waistband with adjustable drawstring",
      "Mother of pearl finish buttons with reinforced cross-stitching",
      "Dual deep side pockets to store small toys & treats",
      "Easy machine wash & durable double seams"
    ],
    reviewsList: [
      { name: "Kunal Mehra", city: "Gurgaon", rating: 5, date: "3 days ago", comment: "Gave my son a very dapper, European resort look. Loved the fabric feel!", verified: true },
      { name: "Shweta Verma", city: "Noida", rating: 5, date: "10 days ago", comment: "Comfortable shorts with elastic waist, doesn't leave marks on belly.", verified: true },
      { name: "Priyanka Patel", city: "Ahmedabad", rating: 4.7, date: "3 weeks ago", comment: "Olive green color is subtle and elegant. Will order again in Sky Blue.", verified: true }
    ]
  },
  {
    id: 3,
    name: "Safari Explorer Cotton Co-ord Set",
    category: "coord-sets",
    tag: "Hot Seller",
    price: 799,
    originalPrice: 1299,
    discount: "38% OFF",
    rating: 5.0,
    reviews: 84,
    sizes: ["6-12M", "1-2Y", "2-3Y", "3-4Y"],
    colors: ["Terracotta", "Sage Green", "Mustard"],
    fabric: "Waffle Knit 100% Bio-Wash Cotton",
    description: "Unisex cozy co-ord set with cute wooden button details. Super stretchy, ultra-soft, and allows full mobility for active toddlers crawling and running around.",
    images: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Textured waffle knit for superior airflow and stretch",
      "Natural coconut wooden buttons, eco-friendly finish",
      "Gentle ribbed cuffs that stay in place comfortably",
      "Drop-shoulder relaxed modern silhouette",
      "Unisex design suitable for boys & girls alike"
    ],
    reviewsList: [
      { name: "Simran Kaur", city: "Chandigarh", rating: 5, date: "4 days ago", comment: "Waffle material is very premium. My toddler wears it for daycare all the time.", verified: true },
      { name: "Tanya Kapoor", city: "Delhi", rating: 5, date: "1 week ago", comment: "Super cute aesthetic! Looks like imported Zara kidswear at half the price.", verified: true },
      { name: "Nidhi Jain", city: "Jaipur", rating: 5, date: "2 weeks ago", comment: "Terracotta shade is rich and doesn't bleed color after wash.", verified: true }
    ]
  },
  {
    id: 4,
    name: "Royal Festive Kurta & Dhoti Pant Set",
    category: "festive",
    tag: "Festive Special",
    price: 1299,
    originalPrice: 2199,
    discount: "41% OFF",
    rating: 4.9,
    reviews: 110,
    sizes: ["1-2Y", "2-3Y", "4-5Y", "6-7Y"],
    colors: ["Mustard Yellow", "Royal Blue", "Emerald Green"],
    fabric: "Silk-Cotton Blend with Breathable Soft Voile Inner Lining",
    description: "Traditional printed kurta adorned with subtle foil accents and pre-stitched hassle-free elasticated dhoti pants. Zero itchiness, designed keeping energetic kids in mind for Diwali, Eid, and family weddings.",
    images: [
      "https://images.unsplash.com/photo-1607453998774-d533f65adc99?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Full soft cotton lining inside both kurta and dhoti so zero itchiness",
      "Pre-stitched elastic dhoti pants – slips on in 5 seconds",
      "Rich festive print with tasteful gold piping",
      "Side slit kurta allowing easy running and playing",
      "Anti-sweat breathable weave for Indian climate"
    ],
    reviewsList: [
      { name: "Deepak Agarwal", city: "Lucknow", rating: 5, date: "Yesterday", comment: "Usually my son hates ethnic wear because it scratches, but he loved this soft dhoti!", verified: true },
      { name: "Rohini Deshmukh", city: "Pune", rating: 5, date: "5 days ago", comment: "Photographs came out wonderful on Diwali pooja. Worth every rupee.", verified: true },
      { name: "Aarti Bansal", city: "Faridabad", rating: 4.8, date: "2 weeks ago", comment: "Ordered via WhatsApp, arrived in 2 days safely packed.", verified: true }
    ]
  },
  {
    id: 5,
    name: "Candy Stripe Dungaree & Tee Combo",
    category: "boys",
    tag: "New Arrival",
    price: 1049,
    originalPrice: 1799,
    discount: "42% OFF",
    rating: 4.7,
    reviews: 63,
    sizes: ["6-12M", "1-2Y", "2-3Y", "3-4Y"],
    colors: ["Denim Blue", "Soft Mint", "Carmel Brown"],
    fabric: "Soft Twill Denim & Combed Cotton Tee",
    description: "Adorable dungaree set featuring adjustable shoulder straps, cute embroidered front pocket, and snap button crotch for easy diaper changes without undressing.",
    images: [
      "https://images.unsplash.com/photo-1543854538-89c894982635?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Ultra-soft washed cotton denim - completely flexible",
      "Two-step adjustable shoulder button fastenings",
      "Concealed crotch snap buttons for effortless diaper access",
      "Includes separate 100% bio-wash striped cotton t-shirt",
      "Signature kangaroo patch pocket in front"
    ],
    reviewsList: [
      { name: "Bhavna Joshi", city: "Surat", rating: 5, date: "3 days ago", comment: "Very cute dungaree! The diaper snap buttons are a lifesaver for toddlers.", verified: true },
      { name: "Kavita Rao", city: "Hyderabad", rating: 4.6, date: "1 week ago", comment: "Denim is not stiff at all, very soft like a feather.", verified: true },
      { name: "Monica Grover", city: "Delhi", rating: 5, date: "2 weeks ago", comment: "Everyone at the birthday party asked where we got this from!", verified: true }
    ]
  },
  {
    id: 6,
    name: "Princess Twirl Sparkle Tulle Gown",
    category: "girls",
    tag: "Party Wear",
    price: 1399,
    originalPrice: 2499,
    discount: "44% OFF",
    rating: 5.0,
    reviews: 167,
    sizes: ["2-3Y", "3-4Y", "5-6Y", "7-8Y"],
    colors: ["Pastel Lavender", "Sky Aqua", "Rose Quartz"],
    fabric: "Multi-layered Soft Tulle with 100% Pure Cotton Under-slip",
    description: "Make her feel like royalty with this premium party gown. Features a delicate pearl bodice, tiered flare skirt with maximum twirl factor, and a zip-free comfy fit with a pure cotton inner slip.",
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Dreamy multi-layer flare that twirls beautifully",
      "No direct tulle contact with skin – fully lined with cotton slip",
      "Delicate hand-embellished pearl accent bodice",
      "Stretchable back smocking for easy fit and growth room",
      "Includes matching soft headbow clip"
    ],
    reviewsList: [
      { name: "Snigdha Chatterjee", city: "Kolkata", rating: 5, date: "1 day ago", comment: "Bought for my daughter's 3rd birthday. She refused to take it off even while sleeping!", verified: true },
      { name: "Divya Nair", city: "Kochi", rating: 5, date: "4 days ago", comment: "Quality is even better than mall boutique dresses costing ₹3,500+", verified: true },
      { name: "Pallavi Sood", city: "Shimla", rating: 5, date: "1 week ago", comment: "Gorgeous shade of lavender and super comfortable.", verified: true }
    ]
  },
  {
    id: 7,
    name: "Ultra-Soft Newborn Baby Romper Trio",
    category: "infants",
    tag: "Must Have",
    price: 849,
    originalPrice: 1399,
    discount: "39% OFF",
    rating: 4.9,
    reviews: 195,
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["Pastel Multi", "Ocean Mist", "Sweet Blossom"],
    fabric: "100% GOTS Certified Organic Cotton",
    description: "Pack of 3 super snug rompers with nickel-free two-way snaps for quick, zero-fuss changes. Non-toxic organic dyes ensure newborn delicate skin stays rash-free and pampered.",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Certified 100% GOTS organic cotton - butter soft",
      "Fold-over scratch mittens on cuffs to protect baby cheeks",
      "Two-way YKK smooth safety zipper with chin protection tab",
      "Seamless tagless collar prevents neck itching",
      "Machine washable, retains softness after 30+ washes"
    ],
    reviewsList: [
      { name: "Dr. Aditi Saxena", city: "Delhi", rating: 5, date: "2 days ago", comment: "As a pediatrician and new mom, I strictly recommend organic cotton. This set is perfection.", verified: true },
      { name: "Varun Malhotra", city: "Bengaluru", rating: 5, date: "1 week ago", comment: "Bought this as a newborn gift for my niece. Parents were overjoyed!", verified: true },
      { name: "Jaspreet Kaur", city: "Ludhiana", rating: 4.9, date: "2 weeks ago", comment: "Zippers make nighttime diaper changing so fast and hassle-free.", verified: true }
    ]
  },
  {
    id: 8,
    name: "Boho Chic Printed Tiered Top & Pant Set",
    category: "coord-sets",
    tag: "Trending",
    price: 949,
    originalPrice: 1599,
    discount: "40% OFF",
    rating: 4.8,
    reviews: 74,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Sunny Mustard", "Coral Peach", "Teal Charm"],
    fabric: "Soft Muslin Rayon Cotton",
    description: "A breezy ethnic-fusion co-ord set with tassels and subtle mirror lace trimming. Light as air, perfect for casual outings, festive get-togethers, or family holidays.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Breathable pure muslin cotton - airy and cooling",
      "Flared peplum tiered top with handmade thread tassels",
      "Elastic waist tapered ankle pants with delicate lace hems",
      "Vibrant fade-proof fast colors",
      "Zero ironing needed – natural crinkle texture"
    ],
    reviewsList: [
      { name: "Nisha Singhania", city: "Indore", rating: 5, date: "3 days ago", comment: "The bohemian look is totally trending right now. Fabric is super light.", verified: true },
      { name: "Tanvi Mathur", city: "Jaipur", rating: 4.8, date: "1 week ago", comment: "Comfortable and ethnic yet so stylish. Loved the mustard shade.", verified: true }
    ]
  },
  {
    id: 9,
    name: "Smart Casual Polo & Chino Pants Duo",
    category: "boys",
    tag: "Popular",
    price: 1149,
    originalPrice: 1899,
    discount: "39% OFF",
    rating: 4.7,
    reviews: 86,
    sizes: ["3-4Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Navy / Khaki", "Burgundy / Grey", "Forest / Tan"],
    fabric: "Premium Honeycomb Pique Cotton + Stretch Cotton Chino",
    description: "Upgrade his wardrobe with this sleek semi-formal combination. Classic tipping collar polo with stretchable tailored chino pants featuring an adjustable inner waistband.",
    images: [
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1543854538-89c894982635?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Heavyweight honeycomb pique cotton polo with contrast collar",
      "Chino trousers with elastane stretch for complete flexibility",
      "Internal buttonhole elastic waistband for custom waist adjustment",
      "Wrinkle-resistant smart everyday design",
      "Side slit hem with grosgrain ribbon tape"
    ],
    reviewsList: [
      { name: "Rajesh Khanna", city: "Mumbai", rating: 5, date: "4 days ago", comment: "Dressed my 6-year-old for annual day function. He looked very sharp!", verified: true },
      { name: "Pooja Hegde", city: "Bengaluru", rating: 4.7, date: "10 days ago", comment: "The adjustable elastic in pants is very thoughtful for growing kids.", verified: true }
    ]
  },
  {
    id: 10,
    name: "Pastel Unicorn Fantasy Party Dress",
    category: "girls",
    tag: "Client Favorite",
    price: 1199,
    originalPrice: 1999,
    discount: "40% OFF",
    rating: 4.9,
    reviews: 133,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "6-7Y"],
    colors: ["Pastel Rainbow", "Cotton Candy", "Lilac Spark"],
    fabric: "Soft Jacquard Satin with Featherlight Gauze Flare",
    description: "The dream dress for every little girl! Gorgeous rainbow pastel ombré detailing, lightweight sash bow, and smooth anti-chafing cotton lining.",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Magical gradient rainbow colors with subtle shimmer",
      "Plush cotton lining ensuring 100% skin softness",
      "Back waist sash tie for an elegant butterfly bow",
      "Lightweight multilayer skirt for fairy tale twirls",
      "High color vibrancy resistant to multiple dry-clean/washes"
    ],
    reviewsList: [
      { name: "Geetika Chawla", city: "Delhi", rating: 5, date: "Yesterday", comment: "Unicorn theme birthday party hit! Everyone complimented the pastel shades.", verified: true },
      { name: "Sunita Roy", city: "Kolkata", rating: 5, date: "1 week ago", comment: "My daughter felt like a princess. Very happy with Kidoz quality.", verified: true }
    ]
  },
  {
    id: 11,
    name: "Snuggly Bear Hooded Fleece Romper",
    category: "infants",
    tag: "Winter Warmth",
    price: 999,
    originalPrice: 1699,
    discount: "41% OFF",
    rating: 5.0,
    reviews: 215,
    sizes: ["0-6M", "6-12M", "12-18M"],
    colors: ["Teddy Brown", "Polar Cream", "Misty Grey"],
    fabric: "Sherpa Fleece Outer & 100% Interlock Cotton Inner",
    description: "Keep your tiny bundle cozy and warm with 3D bear ears, covered feet, and double full-length zipper for effortless dressing during chilly mornings.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Cozy sherpa teddy fleece with full interlock cotton lining inside",
      "Cute 3D stitched bear ears on hood for irresistible baby photos",
      "Full dual safety zip from chin to foot for fastest diaper changes",
      "Anti-slip grip dots on covered soles (for sizes 6M+)",
      "Warm yet breathable prevents baby overheating"
    ],
    reviewsList: [
      { name: "Prerna Mittal", city: "Chandigarh", rating: 5, date: "2 days ago", comment: "Winter must-have! So cozy and soft. He looked like an actual teddy bear.", verified: true },
      { name: "Sanjay Singhal", city: "Dehradun", rating: 5, date: "6 days ago", comment: "Very warm for North India winters. Double zip is great design.", verified: true },
      { name: "Ekta Oberoi", city: "Amritsar", rating: 5, date: "2 weeks ago", comment: "High quality zip and stitching. Ordered on WhatsApp with quick delivery.", verified: true }
    ]
  },
  {
    id: 12,
    name: "Festive Embroidered Lehenga Choli Set",
    category: "festive",
    tag: "Festive Grandeur",
    price: 1599,
    originalPrice: 2799,
    discount: "43% OFF",
    rating: 4.9,
    reviews: 154,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: ["Magenta Pink", "Marigold Yellow", "Teal Green"],
    fabric: "Art Silk Brocade with Pure Cotton Comfort Lining",
    description: "Dazzling handcrafted kidswear lehenga with comfortable elasticated waistband, easy latkan tie-up, and featherweight organza dupatta. Perfect for weddings & festive ceremonies.",
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1607453998774-d533f65adc99?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85"
    ],
    highlights: [
      "Traditional woven brocade with lustrous silk sheen",
      "Pure cotton inner slip lining ensures 0% prickliness",
      "Elastic waist with handmade designer latkans & tassels",
      "Pre-pleated airy organza dupatta with golden border",
      "Comfort fit tailoring that lets children dance & play freely"
    ],
    reviewsList: [
      { name: "Sunanda Mishra", city: "Varanasi", rating: 5, date: "3 days ago", comment: "The magenta color looks stunning in evening wedding lighting!", verified: true },
      { name: "Shruti Kothari", city: "Ahmedabad", rating: 5, date: "1 week ago", comment: "No scratches or itchy embroidery inside. My 4yo was super comfortable all night.", verified: true },
      { name: "Rashmi Goyal", city: "Agra", rating: 4.8, date: "3 weeks ago", comment: "Great packaging and received in just 3 days. Loved the customer support.", verified: true }
    ]
  }
,
{
  "id": 101,
  "name": "Puffer Quilted Hooded Winter Jacket",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 799,
  "originalPrice": 1331,
  "discount": "38% OFF",
  "rating": 4.7,
  "reviews": 65,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Micro-poly Windproof Shell with Feather-Touch Polyfill",
  "description": "Specially tailored for Winter weather ease. Made with Micro-poly Windproof Shell with Feather-Touch Polyfill, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 102,
  "name": "Cozy Bear Knitted Fleece Pullover",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 899,
  "originalPrice": 1498,
  "discount": "40% OFF",
  "rating": 4.8,
  "reviews": 83,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "100% Merino Blend Soft Wool (Zero Itch)",
  "description": "Specially tailored for Winter weather ease. Made with 100% Merino Blend Soft Wool (Zero Itch), keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 103,
  "name": "Fleece Lined Thermal Tracksuit Set",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 999,
  "originalPrice": 1665,
  "discount": "42% OFF",
  "rating": 4.9,
  "reviews": 101,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Heavy Brushed Cotton Fleece with Ribbed Cuffs",
  "description": "Specially tailored for Winter weather ease. Made with Heavy Brushed Cotton Fleece with Ribbed Cuffs, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 104,
  "name": "Snow Flake Stitched Woolen Coat",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 1099,
  "originalPrice": 1831,
  "discount": "45% OFF",
  "rating": 5.0,
  "reviews": 119,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Cashmere Feel Wool Blend with Satin Inner Lining",
  "description": "Specially tailored for Winter weather ease. Made with Cashmere Feel Wool Blend with Satin Inner Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 105,
  "name": "Snug Warm Teddy Ear Winter Romper",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 1199,
  "originalPrice": 1998,
  "discount": "39% OFF",
  "rating": 4.7,
  "reviews": 137,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Sherpa Teddy Fleece with Double Zipper",
  "description": "Specially tailored for Winter weather ease. Made with Sherpa Teddy Fleece with Double Zipper, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1543854538-89c894982635?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 106,
  "name": "Velvet Plush Holiday Party Blazer Set",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 1299,
  "originalPrice": 2165,
  "discount": "41% OFF",
  "rating": 4.8,
  "reviews": 155,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Royal Velvet with Satin Voile Comfort Lining",
  "description": "Specially tailored for Winter weather ease. Made with Royal Velvet with Satin Voile Comfort Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 107,
  "name": "Chunky Ribbed Woolen Cardigan & Cap",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 1399,
  "originalPrice": 2331,
  "discount": "44% OFF",
  "rating": 4.9,
  "reviews": 173,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Bio-washed Wool Acrylic Knitted Blend",
  "description": "Specially tailored for Winter weather ease. Made with Bio-washed Wool Acrylic Knitted Blend, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 108,
  "name": "Quilted Reversible Parka Windbreaker",
  "category": "winter",
  "season": "winter",
  "tag": "Winter Cozy",
  "price": 1499,
  "originalPrice": 2498,
  "discount": "43% OFF",
  "rating": 5.0,
  "reviews": 191,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Water-Resistant Outer with Thermal Fleece Lining",
  "description": "Specially tailored for Winter weather ease. Made with Water-Resistant Outer with Thermal Fleece Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Winter collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for winter! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 109,
  "name": "Breezy Palm Print Cotton Tee & Shorts",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 799,
  "originalPrice": 1331,
  "discount": "38% OFF",
  "rating": 4.7,
  "reviews": 65,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "100% Super-combed Breathable Organic Cotton",
  "description": "Specially tailored for Summer weather ease. Made with 100% Super-combed Breathable Organic Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 110,
  "name": "Linen Pastel Button-Down Resort Set",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 899,
  "originalPrice": 1498,
  "discount": "40% OFF",
  "rating": 4.8,
  "reviews": 83,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Pre-washed Natural Flax Linen Blend",
  "description": "Specially tailored for Summer weather ease. Made with Pre-washed Natural Flax Linen Blend, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 111,
  "name": "Sun-Kissed Sleeveless Cotton Sundress",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 999,
  "originalPrice": 1665,
  "discount": "42% OFF",
  "rating": 4.9,
  "reviews": 101,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Lightweight Cotton Voile with Cotton Lining",
  "description": "Specially tailored for Summer weather ease. Made with Lightweight Cotton Voile with Cotton Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 112,
  "name": "Tropical Leaf Camp Collar Co-ord Set",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 1099,
  "originalPrice": 1831,
  "discount": "45% OFF",
  "rating": 5.0,
  "reviews": 119,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Crinkle Muslin Rayon Air-Cool Weave",
  "description": "Specially tailored for Summer weather ease. Made with Crinkle Muslin Rayon Air-Cool Weave, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 113,
  "name": "Baja Beach Stripes Muscle Tank & Shorts",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 1199,
  "originalPrice": 1998,
  "discount": "39% OFF",
  "rating": 4.7,
  "reviews": 137,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Cotton Jersey with Anti-Microbial Finish",
  "description": "Specially tailored for Summer weather ease. Made with Cotton Jersey with Anti-Microbial Finish, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 114,
  "name": "Airy Seersucker Chequered Dungaree Set",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 1299,
  "originalPrice": 2165,
  "discount": "41% OFF",
  "rating": 4.8,
  "reviews": 155,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "100% Textured Seersucker Airy Cotton",
  "description": "Specially tailored for Summer weather ease. Made with 100% Textured Seersucker Airy Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 115,
  "name": "Citrus Splash Lemon Print Smocked Top",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 1399,
  "originalPrice": 2331,
  "discount": "44% OFF",
  "rating": 4.9,
  "reviews": 173,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Hand-dyed Bio-wash Pure Cotton",
  "description": "Specially tailored for Summer weather ease. Made with Hand-dyed Bio-wash Pure Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 116,
  "name": "Ultra-Light Organic Cotton Romper",
  "category": "summer",
  "season": "summer",
  "tag": "Summer Cool",
  "price": 1499,
  "originalPrice": 2498,
  "discount": "43% OFF",
  "rating": 5.0,
  "reviews": 191,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "GOTS Certified Ultra-soft Organic Cotton",
  "description": "Specially tailored for Summer weather ease. Made with GOTS Certified Ultra-soft Organic Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Summer collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for summer! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 117,
  "name": "Rustic Bear Knit Sweater & Corduroy Pant",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 799,
  "originalPrice": 1331,
  "discount": "38% OFF",
  "rating": 4.7,
  "reviews": 65,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Pure Cotton Knit & Micro-ribbed Soft Corduroy",
  "description": "Specially tailored for Autumn weather ease. Made with Pure Cotton Knit & Micro-ribbed Soft Corduroy, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 118,
  "name": "Warm Caramel Hooded Trench Jacket",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 899,
  "originalPrice": 1498,
  "discount": "40% OFF",
  "rating": 4.8,
  "reviews": 83,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Water-repellent Cotton Twill with Flannel Lining",
  "description": "Specially tailored for Autumn weather ease. Made with Water-repellent Cotton Twill with Flannel Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1543854538-89c894982635?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 119,
  "name": "Waffle Knit Henley & Cargo Jogger Duo",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 999,
  "originalPrice": 1665,
  "discount": "42% OFF",
  "rating": 4.9,
  "reviews": 101,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Thermal Waffle Knit 100% Bio-washed Cotton",
  "description": "Specially tailored for Autumn weather ease. Made with Thermal Waffle Knit 100% Bio-washed Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 120,
  "name": "Earthy Amber Checked Flannel Shirt",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 1099,
  "originalPrice": 1831,
  "discount": "45% OFF",
  "rating": 5.0,
  "reviews": 119,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Double-brushed Ultra-soft Cotton Flannel",
  "description": "Specially tailored for Autumn weather ease. Made with Double-brushed Ultra-soft Cotton Flannel, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 121,
  "name": "Vintage Corduroy Overalls & Knitted Top",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 1199,
  "originalPrice": 1998,
  "discount": "39% OFF",
  "rating": 4.7,
  "reviews": 137,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Fine Wale Cotton Velvet Corduroy",
  "description": "Specially tailored for Autumn weather ease. Made with Fine Wale Cotton Velvet Corduroy, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 122,
  "name": "Fleece Bomber Jacket with Wooden Buttons",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 1299,
  "originalPrice": 2165,
  "discount": "41% OFF",
  "rating": 4.8,
  "reviews": 155,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Bonded Cotton Fleece with Sherpa Trims",
  "description": "Specially tailored for Autumn weather ease. Made with Bonded Cotton Fleece with Sherpa Trims, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 123,
  "name": "Toffee Brown Tiered Peplum Jumper Set",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 1399,
  "originalPrice": 2331,
  "discount": "44% OFF",
  "rating": 4.9,
  "reviews": 173,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "French Terry Cotton Stretch Knit",
  "description": "Specially tailored for Autumn weather ease. Made with French Terry Cotton Stretch Knit, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1607453998774-d533f65adc99?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 124,
  "name": "Mustard Harvest Cotton Pullover Combo",
  "category": "autumn",
  "season": "autumn",
  "tag": "Autumn Warm",
  "price": 1499,
  "originalPrice": 2498,
  "discount": "43% OFF",
  "rating": 5.0,
  "reviews": 191,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Pre-shrunk Combed Cotton with Peach Finish",
  "description": "Specially tailored for Autumn weather ease. Made with Pre-shrunk Combed Cotton with Peach Finish, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Autumn collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for autumn! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 125,
  "name": "Pastel Floral Ruffle Frock & Cardigan",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 799,
  "originalPrice": 1331,
  "discount": "38% OFF",
  "rating": 4.7,
  "reviews": 65,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Organza Voile with 100% Breathable Cotton Under-slip",
  "description": "Specially tailored for Spring weather ease. Made with Organza Voile with 100% Breathable Cotton Under-slip, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 126,
  "name": "Daisy Bloom Embroidered Cotton Dress",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 899,
  "originalPrice": 1498,
  "discount": "40% OFF",
  "rating": 4.8,
  "reviews": 83,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Hand-embroidered Soft Muslin Cotton",
  "description": "Specially tailored for Spring weather ease. Made with Hand-embroidered Soft Muslin Cotton, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 127,
  "name": "Mint Green Fine Knit Romper & Booties",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 999,
  "originalPrice": 1665,
  "discount": "42% OFF",
  "rating": 4.9,
  "reviews": 101,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Hypoallergenic Bamboo-Cotton Super Soft Knit",
  "description": "Specially tailored for Spring weather ease. Made with Hypoallergenic Bamboo-Cotton Super Soft Knit, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 128,
  "name": "Lavender Butterfly Flutter Sleeve Dress",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 1099,
  "originalPrice": 1831,
  "discount": "45% OFF",
  "rating": 5.0,
  "reviews": 119,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Light Air-spun Cotton with Silk Chiffon Ruffles",
  "description": "Specially tailored for Spring weather ease. Made with Light Air-spun Cotton with Silk Chiffon Ruffles, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 129,
  "name": "Spring Meadow Botanical Co-ord Set",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 1199,
  "originalPrice": 1998,
  "discount": "39% OFF",
  "rating": 4.7,
  "reviews": 137,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Soft Cotton Linen with Botanical Non-toxic Dyes",
  "description": "Specially tailored for Spring weather ease. Made with Soft Cotton Linen with Botanical Non-toxic Dyes, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 130,
  "name": "Soft Sage Peplum Top & Legging Set",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 1299,
  "originalPrice": 2165,
  "discount": "41% OFF",
  "rating": 4.8,
  "reviews": 155,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Pre-washed Bio-cotton Lycra Comfort Stretch",
  "description": "Specially tailored for Spring weather ease. Made with Pre-washed Bio-cotton Lycra Comfort Stretch, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 131,
  "name": "Blossom Print Linen Collar Shift Dress",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 1399,
  "originalPrice": 2331,
  "discount": "44% OFF",
  "rating": 4.9,
  "reviews": 173,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Breathable Cotton Chambray with Eyelet Lace",
  "description": "Specially tailored for Spring weather ease. Made with Breathable Cotton Chambray with Eyelet Lace, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
},
{
  "id": 132,
  "name": "Pastel Petal Twirl Gown with Headband",
  "category": "spring",
  "season": "spring",
  "tag": "Spring Fresh",
  "price": 1499,
  "originalPrice": 2498,
  "discount": "43% OFF",
  "rating": 5.0,
  "reviews": 191,
  "sizes": [
    "1-2Y",
    "2-3Y",
    "3-4Y",
    "4-5Y",
    "5-6Y"
  ],
  "colors": [
    "Natural",
    "Pastel Pop",
    "Classic Navy"
  ],
  "fabric": "Multi-layer Soft Tulle with Pure Cotton Lining",
  "description": "Specially tailored for Spring weather ease. Made with Multi-layer Soft Tulle with Pure Cotton Lining, keeping active kids fully comfy, stylish, and happy.",
  "images": [
    "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
  ],
  "highlights": [
    "Designed specially for Spring collection",
    "Super soft skin-friendly hypoallergenic fabric",
    "Pre-shrunk double-stitched durable craftsmanship",
    "Easy hassle-free machine wash",
    "Express pan-India delivery within 24-48 hours"
  ],
  "reviewsList": [
    {
      "name": "Ritu Varma",
      "city": "Delhi",
      "rating": 5,
      "date": "3 days ago",
      "comment": "Perfect outfit for spring! Quality is remarkable and kid loves wearing it.",
      "verified": true
    },
    {
      "name": "Siddharth Roy",
      "city": "Bangalore",
      "rating": 5,
      "date": "1 week ago",
      "comment": "Stitching and fabric soft feel is unmatched. Definitely ordering more.",
      "verified": true
    },
    {
      "name": "Neha Patel",
      "city": "Ahmedabad",
      "rating": 4.8,
      "date": "2 weeks ago",
      "comment": "Colors are bright and lovely, no shrinkage after wash.",
      "verified": true
    }
  ]
}
];

export const LOOKBOOK_ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=600&q=80",
    caption: "Breeze into summer with pastel twirl frocks ✨ #KidozFashion",
    likes: 420
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80",
    caption: "Little gentleman in our linen summer co-ord! 🌿 #LittleBoss",
    likes: 615
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80",
    caption: "Waffle knit everyday sets loved by 500+ toddlers 💛",
    likes: 388
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1607453998774-d533f65adc99?auto=format&fit=crop&w=600&q=80",
    caption: "Festive smiles with zero irritation fabric guarantee! 🪔 #FestiveKidoz",
    likes: 890
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    caption: "Fairytale vibes for her special birthday celebration 🌸👑",
    likes: 742
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    caption: "Newborn softness in organic GOTS cotton onesies ☁️",
    likes: 531
  }
];
