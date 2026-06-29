export const categoriesData = [
    {
        id: 1,
        label: 'Deals',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=150&h=150&fit=crop'
    },
    {
        id: 2,
        label: 'Grocery',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&h=150&fit=crop'
    },
    {
        id: 3,
        label: 'Electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop'
    },
    {
        id: 4,
        label: 'Mobiles',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop'
    },
    {
        id: 5,
        label: 'Laptops & Desktops',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop'
    },
    {
        id: 6,
        label: 'Beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop'
    },
    {
        id: 7,
        label: 'Gift Cards',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=150&h=150&fit=crop'
    },
    {
        id: 8,
        label: "Women's Fashion",
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=150&h=150&fit=crop'
    },
    {
        id: 9,
        label: "Men's Fashion",
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop'
    },
    {
        id: 10,
        label: 'Home Appliances',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=150&h=150&fit=crop'
    },
    {
        id: 11,
        label: 'Health & Nutrition',
        image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=150&h=150&fit=crop'
    }
];


export const fetchCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    return {
        status: true,
        data: categoriesData,
        message: "Data fetched Successfully"
    };
};