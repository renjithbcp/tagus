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
  
    { id: 2, name: 'Product 2', brand: 'Brand2', price: 15, rating: 3, date: '2024-04-26', image: 'product2.jpg' ,imageSlider: ['img21.jpg', 'img22.jpg', 'img23.jpg']},
    { id: 3, name: 'Product 3', brand: 'Brand3', price: 25, rating: 5, date: '2024-04-25', image: 'product3.jpg' ,imageSlider: ['img31.jpg', 'img32.jpg', 'img33.jpg']},
    { id: 4, name: 'Product 4', brand: 'Brand1', price: 20, rating: 4, date: '2024-04-24', image: 'product4.jpg' },
    { id: 5, name: 'Product 5', brand: 'Brand2', price: 15, rating: 3, date: '2024-04-26', image: 'product1.jpg' },
    { id: 6, name: 'Product 6', brand: 'Brand1', price: 25, rating: 5, date: '2024-04-25', image: 'product2.jpg' },
    { id: 7, name: 'Product 7', brand: 'Brand3', price: 20, rating: 4, date: '2024-04-22', image: 'product3.jpg' },
    { id: 8, name: 'Product 8', brand: 'Brand1', price: 15, rating: 3, date: '2024-04-26', image: 'product4.jpg' },
    { id: 9, name: 'Product 9', brand: 'Brand3', price: 25, rating: 5, date: '2024-04-30', image: 'product1.jpg' },
  ];
  
  export default productsData;
  