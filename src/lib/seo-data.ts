// SEO Data for Hummus Bar & Grill

export const BUSINESS_INFO = {
  name: "Hummus Bar & Grill",
  description: "Authentic Mediterranean restaurant in Los Angeles serving fresh hummus, grilled specialties, and traditional Middle Eastern cuisine. Kosher-friendly dining with Israeli and Lebanese influences.",
  phone: "+1-310-555-0123", // Replace with actual phone
  email: "info@hummusbarandgrill.com", // Replace with actual email
  website: "https://hummusbarandgrill.com",
  address: {
    street: "123 Main Street", // Replace with actual address
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210", // Replace with actual zip
    country: "US"
  },
  geo: {
    latitude: 34.0522,
    longitude: -118.2437
  },
  hours: {
    monday: "11:00-22:00",
    tuesday: "11:00-22:00", 
    wednesday: "11:00-22:00",
    thursday: "11:00-22:00",
    friday: "11:00-23:00",
    saturday: "10:00-23:00",
    sunday: "10:00-22:00"
  }
};

export const PRIMARY_KEYWORDS = [
  "Mediterranean restaurant Los Angeles",
  "Hummus Bar & Grill",
  "authentic Mediterranean food",
  "Middle Eastern grill",
  "kosher restaurant LA",
  "Israeli food in Los Angeles",
  "Lebanese cuisine LA",
  "fresh hummus Los Angeles",
  "Mediterranean catering",
  "halal Middle Eastern food"
];

export const PAGE_KEYWORDS = {
  home: "Mediterranean restaurant Los Angeles, Hummus Bar & Grill, authentic Mediterranean food, Middle Eastern grill, kosher restaurant LA, Israeli food Los Angeles",
  menu: "Mediterranean menu, Middle Eastern food menu, hummus varieties, grilled kebabs, Israeli breakfast, kosher menu Los Angeles",
  about: "authentic Mediterranean restaurant, family owned Middle Eastern cuisine, traditional recipes, fresh ingredients, kosher dining",
  catering: "Mediterranean catering Los Angeles, Middle Eastern catering, corporate catering, event catering, kosher catering services",
  locations: "Hummus Bar & Grill location, Mediterranean restaurant near me, Middle Eastern food Los Angeles, kosher restaurant address"
};

// LocalBusiness Structured Data
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": BUSINESS_INFO.name,
  "description": BUSINESS_INFO.description,
  "url": BUSINESS_INFO.website,
  "telephone": BUSINESS_INFO.phone,
  "email": BUSINESS_INFO.email,
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "servesCuisine": [
    "Mediterranean",
    "Middle Eastern", 
    "Israeli",
    "Lebanese",
    "Kosher"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address.street,
    "addressLocality": BUSINESS_INFO.address.city,
    "addressRegion": BUSINESS_INFO.address.state,
    "postalCode": BUSINESS_INFO.address.zipCode,
    "addressCountry": BUSINESS_INFO.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS_INFO.geo.latitude,
    "longitude": BUSINESS_INFO.geo.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Friday",
      "opens": "11:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", 
      "opens": "10:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00", 
      "closes": "22:00"
    }
  ],
  "image": [
    "https://hummusbarandgrill.com/images/restaurant-exterior.jpg",
    "https://hummusbarandgrill.com/images/signature-hummus.jpg",
    "https://hummusbarandgrill.com/images/grilled-specialties.jpg"
  ],
  "hasMenu": {
    "@type": "Menu",
    "url": `${BUSINESS_INFO.website}/menu`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Menu Structured Data
export const MENU_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Hummus Bar & Grill Menu",
  "description": "Authentic Mediterranean and Middle Eastern cuisine featuring fresh hummus, grilled specialties, and traditional Israeli dishes",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Breakfast Menu",
      "description": "Traditional Mediterranean breakfast dishes",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Shakshuka",
          "description": "Eggs poached in spiced tomato sauce with peppers and herbs",
          "menuAddOn": {
            "@type": "MenuItemOption",
            "value": "Traditional Israeli breakfast style"
          }
        },
        {
          "@type": "MenuItem", 
          "name": "Traditional Israeli Breakfast",
          "description": "3 eggs any style served with chopped Israeli salad, assorted plates, and bread basket"
        },
        {
          "@type": "MenuItem",
          "name": "Burekas Platter", 
          "description": "Flaky sesame burekas, hard-boiled egg, tahini, harissa, pickles"
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Appetizers",
      "description": "Mediterranean and Middle Eastern appetizers",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Falafel Plate",
          "description": "Eight falafel balls served with tahini dipping sauce"
        },
        {
          "@type": "MenuItem", 
          "name": "Moroccan Cigars",
          "description": "Spiced beef in crispy phyllo rolls"
        },
        {
          "@type": "MenuItem",
          "name": "Mushroom Hummus",
          "description": "Classic hummus topped with seasoned sautéed mushrooms"
        }
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Main Courses",
      "description": "Grilled specialties and Mediterranean entrees",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Lamb Chops", 
          "description": "Grilled lamb chops, herb-marinated"
        },
        {
          "@type": "MenuItem",
          "name": "Mixed Chicken Skewers",
          "description": "Breast, thigh, liver, and heart combination"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Shawarma",
          "description": "Spit-roasted and shaved chicken shawarma"
        }
      ]
    }
  ]
};
