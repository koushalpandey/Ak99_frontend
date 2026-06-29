const productListingData = [

  {
    id: "elec-001",
    category: "Electronics",
    title: "Premium Wireless Over-Ear Headphones with Active Noise Cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    currentPrice: 2499,
    originalPrice: 7999,
    discount: "68% OFF",
    rating: 4.5,
    tag: "Bestseller"
  },
  {
    id: "elec-002",
    category: "Electronics",
    title: "Smartwatch Series 9 - AMOLED Display, Fitness Tracker & Heart Monitor",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
    currentPrice: 3499,
    originalPrice: 9999,
    discount: "65% OFF",
    rating: 4.2,
    tag: "Deal of the Day"
  },


  {
    id: "fash-001",
    category: "Fashion",
    title: "Men's Premium Lightweight Running Sneakers - Breathable Mesh",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    currentPrice: 1299,
    originalPrice: 3999,
    discount: "67% OFF",
    rating: 4.4,
    tag: "Top Rated"
  },
  {
    id: "fash-002",
    category: "Fashion",
    title: "Classic Minimalist Leather Handbag with Golden Clasp Accent",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&q=80",
    currentPrice: 1899,
    originalPrice: 4999,
    discount: "62% OFF",
    rating: 4.1,
    tag: null
  },


  {
    id: "home-001",
    category: "Home & Kitchen",
    title: "Nordic Minimalist Ceramic Plant Pots with Drainage Holes (Set of 3)",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&q=80",
    currentPrice: 499,
    originalPrice: 1499,
    discount: "66% OFF",
    rating: 4.6,
    tag: "Hot Deal"
  },
  {
    id: "home-002",
    category: "Home & Kitchen",
    title: "Stainless Steel Electric Kettle - Fast Boiling with Auto Shut-Off",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop&q=80",
    currentPrice: 899,
    originalPrice: 2199,
    discount: "59% OFF",
    rating: 4.3,
    tag: null
  },


  {
    id: "bt-001",
    category: "Beauty & Personal Care",
    title: "Organic Hydrating Face Serum with Vitamin C and Hyaluronic Acid",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    currentPrice: 349,
    originalPrice: 899,
    discount: "61% OFF",
    rating: 4.7,
    tag: "Trending Now"
  },
  {
    id: "bt-002",
    category: "Beauty & Personal Care",
    title: "Matte Finish Long-Lasting Liquid Lipstick Set - Red Tones",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&q=80",
    currentPrice: 599,
    originalPrice: 1799,
    discount: "66% OFF",
    rating: 4.0,
    tag: null
  }
];



export const fetchProductListings = (category = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category) {
        const filteredData = productListingData.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        resolve(filteredData);
      } else {
        resolve(productListingData);
      }
    }, 150);
  });
};