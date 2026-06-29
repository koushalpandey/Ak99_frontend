export const productsData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop",
        title: "LED Bulb (9W)",
        price: 79,
        originalPrice: 199,
        discount: "60% OFF",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=300&h=300&fit=crop",
        title: "Storage Box",
        price: 99,
        originalPrice: 249,
        discount: "60% OFF",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
        title: "Water Bottle",
        price: 89,
        originalPrice: 199,
        discount: "55% OFF",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=300&h=300&fit=crop",
        title: "Cookware",
        price: 199,
        originalPrice: 499,
        discount: "60% OFF",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop",
        title: "Ceramic Mug",
        price: 149,
        originalPrice: 299,
        discount: "50% OFF",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
        title: "Desk Lamp",
        price: 299,
        originalPrice: 749,
        discount: "60% OFF",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=300&fit=crop",
        title: "Notebook",
        price: 119,
        originalPrice: 399,
        discount: "70% OFF",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=300&h=300&fit=crop",
        title: "Storage Box",
        price: 99,
        originalPrice: 249,
        discount: "60% OFF",
    },
];

export const fetchSpecialProduct = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    return {
        status: true,
        data: productsData,
        message: "Data fetched Successfully"
    };
};