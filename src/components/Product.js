// products.js
const productsData = [
  {
    "id": 1,
    "name": "Modern Ceramic Wash Basin",
    "brand": "AquaLux",
    "price": 149.99,
    "rating": 4.5,
    "date": "2024-04-27",
    "image": "modern_ceramic_wash_basin.jpg",
    "imageSlider": ["modern_ceramic_wash_basin_img1.jpg", "modern_ceramic_wash_basin_img2.jpg", "modern_ceramic_wash_basin_img3.jpg"],
    "description": "The Modern Ceramic Wash Basin from AquaLux combines sleek design with functionality, making it a perfect addition to any contemporary bathroom. Crafted from high-quality ceramic material, this wash basin boasts a smooth surface and a minimalist aesthetic that enhances the overall ambiance of your bathroom space.",
    "technicalSpecifications": {
      "material": "Ceramic",
      "dimensions": {
        "width": 24,
        "depth": 18,
        "height": 6
      },
      "color": "White",
      "installation": "Wall-mounted or countertop",
      "faucetHole": "Single pre-drilled hole (faucet not included)",
      "drainage": "Standard 1.25-inch drain opening"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Jane S.",
        "comment": "Love the sleek design and quality construction!",
        "rating": 5
      },
      {
        "user": "Mark T.",
        "comment": "Easy to install and looks great in my bathroom!",
        "rating": 4
      }
    ],
    "relatedProducts": [
      {
        "name": "AquaLux Modern Chrome Faucet",
        "price": 39.99,
        "image": "modern_chrome_faucet.jpg"
      },
      {
        "name": "AquaLux Ceramic Soap Dispenser",
        "price": 12.99,
        "image": "ceramic_soap_dispenser.jpg"
      },
      {
        "name": "AquaLux Wall-mounted Mirror Cabinet",
        "price": 89.99,
        "image": "wall_mounted_mirror_cabinet.jpg"
      }
    ]
  },
  
  {
    "id": 2,
    "name": "Stainless Steel Kitchen Sink",
    "brand": "KitchenPro",
    "price": 199.99,
    "rating": 4.8,
    "date": "2024-04-28",
    "image": "kitchen_sink.jpg",
    "imageSlider": ["kitchen_sink_img1.jpg", "kitchen_sink_img2.jpg", "kitchen_sink_img3.jpg"],
    "description": "The Stainless Steel Kitchen Sink from KitchenPro is designed to meet the demands of modern kitchens. With a sleek and durable stainless steel construction, this sink offers ample space for washing dishes and food preparation. Its versatile design makes it suitable for both residential and commercial kitchens.",
    "technicalSpecifications": {
      "material": "Stainless Steel",
      "dimensions": {
        "width": 30,
        "depth": 20,
        "height": 10
      },
      "color": "Silver",
      "installation": "Undermount",
      "faucetHole": "Pre-drilled holes for faucet and accessories",
      "drainage": "Standard 3.5-inch drain opening"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Mike W.",
        "comment": "Excellent quality and easy to install!",
        "rating": 5
      },
      {
        "user": "Sarah L.",
        "comment": "Love the sleek design and spacious basin!",
        "rating": 4.5
      }
    ],
    "relatedProducts": [
      {
        "name": "KitchenPro Pull-Down Faucet",
        "price": 79.99,
        "image": "kitchen_faucet.jpg"
      },
      {
        "name": "KitchenPro Dish Drying Rack",
        "price": 29.99,
        "image": "dish_drying_rack.jpg"
      }
    ]
  },
  // Product 3: Bathtub
  {
    "id": 3,
    "name": "Luxury Acrylic Bathtub",
    "brand": "RelaxSpa",
    "price": 899.99,
    "rating": 4.7,
    "date": "2024-04-25",
    "image": "bathtub.jpg",
    "imageSlider": ["bathtub_img1.jpg", "bathtub_img2.jpg", "bathtub_img3.jpg"],
    "description": "Indulge in luxury with the RelaxSpa Luxury Acrylic Bathtub. Designed for ultimate comfort and relaxation, this bathtub features a spacious interior, ergonomic design, and elegant acrylic construction. Perfect for unwinding after a long day, this bathtub will transform your bathroom into a spa-like retreat.",
    "technicalSpecifications": {
      "material": "Acrylic",
      "dimensions": {
        "length": 60,
        "width": 32,
        "height": 20
      },
      "color": "White",
      "installation": "Freestanding",
      "drainage": "Standard 1.5-inch drain opening"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Emily R.",
        "comment": "Absolutely love my new bathtub! So luxurious and comfortable.",
        "rating": 5
      },
      {
        "user": "John M.",
        "comment": "Great value for the price. Installation was a breeze.",
        "rating": 4.5
      }
    ],
    "relatedProducts": [
      {
        "name": "RelaxSpa Waterfall Faucet",
        "price": 149.99,
        "image": "waterfall_faucet.jpg"
      },
      {
        "name": "RelaxSpa Bath Pillow",
        "price": 24.99,
        "image": "bath_pillow.jpg"
      }
    ]
  },
  // Product 4: Flush Tank
  {
    "id": 4,
    "name": "Dual Flush Toilet Tank",
    "brand": "EcoFlush",
    "price": 69.99,
    "rating": 4.6,
    "date": "2024-04-24",
    "image": "flush_tank.jpg",
    "imageSlider": ["flush_tank_img1.jpg", "flush_tank_img2.jpg", "flush_tank_img3.jpg"],
    "description": "Upgrade your toilet with the EcoFlush Dual Flush Toilet Tank. This efficient and eco-friendly tank features dual flush technology, allowing you to choose between a full or partial flush for water conservation. With a sleek and modern design, it complements any bathroom decor.",
    "technicalSpecifications": {
      "material": "Plastic",
      "dimensions": {
        "width": 16,
        "depth": 8,
        "height": 12
      },
      "color": "White",
      "flushType": "Dual Flush",
      "flushVolume": {
        "fullFlush": 1.6,
        "partialFlush": 0.8
      }
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "David H.",
        "comment": "Easy to install and works great. Love the dual flush feature!",
        "rating": 5
      },
      {
        "user": "Anna K.",
        "comment": "Saves a lot of water. Very satisfied with my purchase.",
        "rating": 4
      }
    ],
    "relatedProducts": [
      {
        "name": "EcoFlush Toilet Bowl",
        "price": 129.99,
        "image": "toilet_bowl.jpg"
      },
      {
        "name": "EcoFlush Toilet Seat",
        "price": 49.99,
        "image": "toilet_seat.jpg"
      }
    ]
  },
  // Product 5: Concealed Cistern
  {
    "id": 5,
    "name": "Concealed Toilet Cistern",
    "brand": "HiddenFlush",
    "price": 119.99,
    "rating": 4.4,
    "date": "2024-04-26",
    "image": "concealed_cistern.jpg",
    "imageSlider": ["concealed_cistern_img1.jpg", "concealed_cistern_img2.jpg", "concealed_cistern_img3.jpg"],
    "description": "Upgrade your bathroom with the HiddenFlush Concealed Toilet Cistern. Designed to be installed within a wall or vanity unit, this concealed cistern saves space and creates a sleek and modern look. With durable construction and efficient flushing, it's a perfect choice for any bathroom renovation.",
    "technicalSpecifications": {
      "material": "Plastic",
      "dimensions": {
        "width": 16,
        "depth": 6,
        "height": 20
      },
      "flushType": "Single Flush",
      "flushVolume": 1.6,
      "compatibility": "Compatible with most toilets"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Lisa P.",
        "comment": "Love the space-saving design and efficient flushing.",
        "rating": 4.5
      },
      {
        "user": "Michael S.",
        "comment": "Easy to install and works perfectly with my wall-mounted toilet.",
        "rating": 4
      }
    ],
    "relatedProducts": [
      {
        "name": "HiddenFlush Wall-Mounted Toilet",
        "price": 249.99,
        "image": "wall_mounted_toilet.jpg"
      },
      {
        "name": "HiddenFlush Toilet Flush Plate",
        "price": 39.99,
        "image": "flush_plate.jpg"
      }
    ]
  },
  // Product 6: Urinal
  {
    "id": 6,
    "name": "Wall-Mounted Urinal",
    "brand": "PeeEase",
    "price": 199.99,
    "rating": 4.3,
    "date": "2024-04-25",
    "image": "urinal.jpg",
    "imageSlider": ["urinal_img1.jpg", "urinal_img2.jpg", "urinal_img3.jpg"],
    "description": "The PeeEase Wall-Mounted Urinal is designed for commercial and public restroom facilities. With a sleek and compact design, it saves space while providing convenient and hygienic urination solutions. Constructed from durable materials, it's easy to clean and maintain.",
    "technicalSpecifications": {
      "material": "Ceramic",
      "dimensions": {
        "width": 18,
        "depth": 14,
        "height": 24
      },
      "color": "White",
      "installation": "Wall-Mounted",
      "flushType": "Manual Flush",
      "drainage": "Standard 2-inch drain outlet"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Chris D.",
        "comment": "Great product for public restrooms. Easy to install and maintain.",
        "rating": 4
      },
      {
        "user": "Jennifer H.",
        "comment": "Sleek design and works perfectly. Very satisfied with the purchase.",
        "rating": 4.5
      }
    ],
    "relatedProducts": [
      {
        "name": "PeeEase Urinal Divider Screen",
        "price": 49.99,
        "image": "urinal_divider.jpg"
      },
      {
        "name": "PeeEase Automatic Flush Valve",
        "price": 99.99,
        "image": "automatic_flush_valve.jpg"
      }
    ]
  },
  // Product 7: Closet
  {
    "id": 7,
    "name": "Wall-Hung Closet",
    "brand": "CleanSpace",
    "price": 299.99,
    "rating": 4.6,
    "date": "2024-04-22",
    "image": "closet.jpg",
    "imageSlider": ["closet_img1.jpg", "closet_img2.jpg", "closet_img3.jpg"],
    "description": "Upgrade your bathroom with the CleanSpace Wall-Hung Closet. Designed for modern bathrooms, this wall-hung closet saves floor space and creates a clean and minimalist look. With a durable ceramic construction and sleek design, it's easy to clean and maintain.",
    "technicalSpecifications": {
      "material": "Ceramic",
      "dimensions": {
        "width": 14,
        "depth": 22,
        "height": 18
      },
      "color": "White",
      "installation": "Wall-Hung",
      "flushType": "Dual Flush",
      "flushVolume": {
        "fullFlush": 1.6,
        "partialFlush": 0.8
      },
      "compatibility": "Compatible with most toilet seats"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Daniel R.",
        "comment": "Great product, easy to install and looks fantastic in my bathroom.",
        "rating": 5
      },
      {
        "user": "Sophia M.",
        "comment": "Love the sleek design and water-saving features.",
        "rating": 4.5
      }
    ],
    "relatedProducts": [
      {
        "name": "CleanSpace Soft Close Toilet Seat",
        "price": 49.99,
        "image": "toilet_seat.jpg"
      },
      {
        "name": "CleanSpace Bidet Attachment",
        "price": 79.99,
        "image": "bidet_attachment.jpg"
      }
    ]
  },
  // Product 8: Shower
  {
    "id": 8,
    "name": "Rainfall Shower Head",
    "brand": "AquaRain",
    "price": 129.99,
    "rating": 4.9,
    "date": "2024-04-26",
    "image": "shower_head.jpg",
    "imageSlider": ["shower_head_img1.jpg", "shower_head_img2.jpg", "shower_head_img3.jpg"],
    "description": "Transform your shower experience with the AquaRain Rainfall Shower Head. Featuring a large shower head with multiple spray settings, it simulates the sensation of standing in a gentle rain. With a sleek and modern design, it adds a touch of luxury to any bathroom.",
    "technicalSpecifications": {
      "material": "Stainless Steel",
      "dimensions": {
        "width": 10,
        "depth": 10,
        "height": 2
      },
      "color": "Chrome",
      "installation": "Ceiling-Mounted",
      "spraySettings": ["Rain", "Massage", "Combo"],
      "compatibility": "Compatible with standard shower arms"
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Alex B.",
        "comment": "Amazing shower head! Love the rainfall effect.",
        "rating": 5
      },
      {
        "user": "Jessica G.",
        "comment": "Looks great and feels even better. Highly recommend!",
        "rating": 5
      }
    ],
    "relatedProducts": [
      {
        "name": "AquaRain Handheld Shower Head",
        "price": 59.99,
        "image": "handheld_shower_head.jpg"
      },
      {
        "name": "AquaRain Shower Panel System",
        "price": 249.99,
        "image": "shower_panel.jpg"
      }
    ]
  },
  // Product 9: Pool
  {
    "id": 9,
    "name": "Inflatable Family Pool",
    "brand": "SplashZone",
    "price": 199.99,
    "rating": 4.5,
    "date": "2024-04-30",
    "image": "pool.jpg",
    "imageSlider": ["pool_img1.jpg", "pool_img2.jpg", "pool_img3.jpg"],
    "description": "Enjoy endless fun in the sun with the SplashZone Inflatable Family Pool. Perfect for backyard parties and summer gatherings, this spacious pool accommodates the whole family. Made from durable PVC material, it's easy to set up and maintain, providing hours of entertainment for all ages.",
    "technicalSpecifications": {
      "material": "PVC",
      "dimensions": {
        "length": 120,
        "width": 72,
        "height": 22
      },
      "capacity": "300 gallons",
      "setup": "Inflatable",
      "features": ["Built-in drain plug", "Repair patch included"]
    },
    "availability": "In Stock",
    "customerReviews": [
      {
        "user": "Ryan M.",
        "comment": "Great pool for the price. Kids love it!",
        "rating": 4.5
      },
      {
        "user": "Laura S.",
        "comment": "Easy to set up and sturdy. Provides hours of fun.",
        "rating": 4.5
      }
    ],
    "relatedProducts": [
      {
        "name": "SplashZone Pool Floats",
        "price": 19.99,
        "image": "pool_floats.jpg"
      },
      {
        "name": "SplashZone Pool Noodles",
        "price": 9.99,
        "image": "pool_noodles.jpg"
      }
    ]
  }
  ];
  
  export default productsData;
  