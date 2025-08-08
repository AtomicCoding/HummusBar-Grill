// SEO Data for Hummus Bar & Grill

export const BUSINESS_INFO = {
  name: "Hummus Bar & Grill",
  description:
    "Authentic Mediterranean restaurant in Los Angeles serving fresh hummus, grilled specialties, and traditional Middle Eastern cuisine. Kosher-friendly dining with Israeli and Lebanese influences.",
  phone: "+1-310-555-0123", // Replace with actual phone
  email: "info@hummusbarandgrill.com", // Replace with actual email
  website: "https://hummusbarandgrill.com",
  address: {
    street: "18743 Ventura Blvd",
    city: "Tarzana",
    state: "CA",
    zipCode: "91356",
    country: "US",
  },
  geo: {
    latitude: 34.0522,
    longitude: -118.2437,
  },
  hours: {
    monday: "11:00-22:00",
    tuesday: "11:00-22:00",
    wednesday: "11:00-22:00",
    thursday: "11:00-22:00",
    friday: "11:00-23:00",
    saturday: "10:00-23:00",
    sunday: "10:00-22:00",
  },
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
  "halal Middle Eastern food",
];

export const PAGE_KEYWORDS = {
  home: "Mediterranean restaurant Los Angeles, Hummus Bar & Grill, authentic Mediterranean food, Middle Eastern grill, kosher restaurant LA, Israeli food Los Angeles",
  menu: "Mediterranean menu, Middle Eastern food menu, hummus varieties, grilled kebabs, Israeli breakfast, kosher menu Los Angeles",
  about:
    "authentic Mediterranean restaurant, family owned Middle Eastern cuisine, traditional recipes, fresh ingredients, kosher dining",
  catering:
    "Mediterranean catering Los Angeles, Middle Eastern catering, corporate catering, event catering, kosher catering services",
  contact:
    "Hummus Bar & Grill contact, Mediterranean restaurant Tarzana, Middle Eastern food Los Angeles, kosher restaurant address, restaurant phone number",
};

// LocalBusiness Structured Data
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS_INFO.name,
  alternateName: "Hummus Bar and Grill",
  description: BUSINESS_INFO.description,
  url: BUSINESS_INFO.website,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Apple Pay",
    "Google Pay",
  ],
  acceptsReservations: true,
  servesCuisine: [
    "Mediterranean",
    "Middle Eastern",
    "Israeli",
    "Lebanese",
    "Kosher",
    "Vegetarian",
    "Vegan",
  ],
  knowsAbout: [
    "Hummus",
    "Falafel",
    "Shawarma",
    "Grilled meats",
    "Mediterranean cuisine",
    "Israeli breakfast",
    "Kosher food",
    "Catering services",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "18743 Ventura Blvd",
    addressLocality: "Tarzana",
    addressRegion: "CA",
    postalCode: "91356",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1634,
    longitude: -118.5449,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "22:00",
    },
  ],
  image: [
    "https://hummusbarandgrill.com/images/restaurant-exterior.jpg",
    "https://hummusbarandgrill.com/images/signature-hummus.jpg",
    "https://hummusbarandgrill.com/images/grilled-specialties.jpg",
    "https://hummusbarandgrill.com/images/interior-dining.jpg",
    "https://cdn.builder.io/api/v1/image/assets%2Fad5fa173f30f42cb936245efbd928c96%2F26c3a52502154f7c9478b52b4e0b8018?format=webp&width=800",
  ],
  logo: "https://cdn.builder.io/api/v1/image/assets%2Fad5fa173f30f42cb936245efbd928c96%2F26c3a52502154f7c9478b52b4e0b8018?format=webp&width=800",
  hasMenu: {
    "@type": "Menu",
    url: `${BUSINESS_INFO.website}/menu`,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Breakfast",
        description: "Traditional Mediterranean breakfast dishes",
      },
      {
        "@type": "MenuSection",
        name: "Appetizers",
        description: "Fresh Mediterranean and Middle Eastern appetizers",
      },
      {
        "@type": "MenuSection",
        name: "Main Courses",
        description: "Grilled specialties and Mediterranean entrees",
      },
      {
        "@type": "MenuSection",
        name: "Desserts",
        description: "Traditional Mediterranean and Middle Eastern desserts",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "156",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody:
        "Amazing authentic Mediterranean food! The hummus is incredibly fresh and the grilled lamb chops are perfect.",
    },
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking Available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Takeout Available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Delivery Available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Catering Services",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Family Friendly",
      value: true,
    },
  ],
  potentialAction: [
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: [
        "http://schema.org/OnSitePickup",
        "http://schema.org/DeliveryMethod",
      ],
    },
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "tel:+18183446606",
      },
    },
  ],
  founder: {
    "@type": "Organization",
    name: "Hummus Bar & Grill",
  },
  foundingDate: "2008",
  sameAs: [
    "https://www.instagram.com/hummusbarandgrill/",
    "https://x.com/hummusbargrill",
    "https://www.facebook.com/hummusbarandgrill",
  ],
};

// Menu Structured Data
export const MENU_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Hummus Bar & Grill Menu",
  description:
    "Authentic Mediterranean and Middle Eastern cuisine featuring fresh hummus, grilled specialties, and traditional Israeli dishes",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Breakfast Menu",
      description: "Traditional Mediterranean breakfast dishes",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Shakshuka",
          description:
            "Eggs poached in spiced tomato sauce with peppers and herbs",
          menuAddOn: {
            "@type": "MenuItemOption",
            value: "Traditional Israeli breakfast style",
          },
        },
        {
          "@type": "MenuItem",
          name: "Traditional Israeli Breakfast",
          description:
            "3 eggs any style served with chopped Israeli salad, assorted plates, and bread basket",
        },
        {
          "@type": "MenuItem",
          name: "Burekas Platter",
          description:
            "Flaky sesame burekas, hard-boiled egg, tahini, harissa, pickles",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Appetizers",
      description: "Mediterranean and Middle Eastern appetizers",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Falafel Plate",
          description: "Eight falafel balls served with tahini dipping sauce",
        },
        {
          "@type": "MenuItem",
          name: "Moroccan Cigars",
          description: "Spiced beef in crispy phyllo rolls",
        },
        {
          "@type": "MenuItem",
          name: "Mushroom Hummus",
          description: "Classic hummus topped with seasoned sautéed mushrooms",
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Main Courses",
      description: "Grilled specialties and Mediterranean entrees",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Lamb Chops",
          description: "Grilled lamb chops, herb-marinated",
        },
        {
          "@type": "MenuItem",
          name: "Mixed Chicken Skewers",
          description: "Breast, thigh, liver, and heart combination",
        },
        {
          "@type": "MenuItem",
          name: "Chicken Shawarma",
          description: "Spit-roasted and shaved chicken shawarma",
        },
      ],
    },
  ],
};
