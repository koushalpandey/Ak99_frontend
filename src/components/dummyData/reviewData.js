// reviewsData.js
export const reviewsData = [
  {
    id: 1,
    username: "John Doe",
    avatarInitial: "JD",
    rating: 5,
    date: "Verified Purchase • 2 days ago",
    comment: "Absolutely love this product! The build quality exceeded my expectations, and the shipping was incredibly fast. Fits perfectly in my setup. Highly recommend!",
    images: [
      "https://picsum.photos/id/1062/300/300",
      "https://picsum.photos/id/1069/300/300"
    ]
  },
  {
    id: 2,
    username: "Sarah Miller",
    avatarInitial: "SM",
    rating: 4,
    date: "Verified Purchase • 1 week ago",
    comment: "Really good product for the price. The color is slightly darker than what was shown in the official photos, but it still looks great and functions perfectly.",
    images: [
      "https://picsum.photos/id/250/300/300"
    ]
  },
  {
    id: 3,
    username: "Alex Kumar",
    avatarInitial: "AK",
    rating: 3,
    date: "Verified Purchase • 2 weeks ago",
    comment: "It's decent, gets the job done. However, the packaging arrived a bit damaged, though the item inside was fine. Customer service was helpful when I reached out.",
    images: [] // Empty array handles users who didn't attach images
  }
];