export const homeKitchenData = [
    {
        id: 1,
        label: "Cookware",
        image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=300&h=300&fit=crop"
    },
    {
        id: 2,
        label: "Storage & Organisation",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop"
    },
    {
        id: 3,
        label: "Dinnerware & Serveware",
        image: "https://images.unsplash.com/photo-1610701596007-11502861afaa?w=300&h=300&fit=crop"
    },
    {
        id: 4,
        label: "Bedding Essentials",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop"
    },
    {
        id: 5,
        label: "Lighting",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop"
    },
    {
        id: 6,
        label: "Power & Hand Tools",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=300&fit=crop"
    },
    {
        id: 7,
        label: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop"
    }
];


export const fetchSpeificCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    return {
        status: true,
        data: homeKitchenData,
        message: "Data fetched Successfully"
    };
};