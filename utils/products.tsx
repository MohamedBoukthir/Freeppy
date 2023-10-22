export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Hype Cotton Blend T-shirt",
      description: "Experience unparalleled comfort and style with the Nike Hype T-shirt. Made from a premium cotton blend, this shirt is designed to keep you cool and comfortable all day long. Whether you're hitting the gym or hanging out with friends, the Nike Hype T-shirt is the perfect choice.",
      price: 49.99,
      brand: "Nike",
      category: "T-shirt",
      inStock: true,
      images: [
        {
          color: "White",
          colorCode: "#FFFFFF",
          image:
            "/tshirt-white.png",
        },
        {
          color: "Gray",
          colorCode: "#808080",
          image:
            "/tshirt-gray.png",
        },
      ],
      reviews: [],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Classic Fit Denim Jeans",
      description:
        "Elevate your casual style with these classic fit denim jeans. Crafted from high-quality denim, these jeans offer a comfortable fit and timeless design that pairs well with any outfit. Whether you're heading out for a casual day or a night on the town, these jeans are a versatile addition to your wardrobe.",
      price: 102.99,
      brand: "Zara",
      category: "Jeans",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "/jean-black.png",
        },
      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Elegant Floral Maxi Dress",
      description:
        'Make a statement with this elegant floral maxi dress. The intricate floral pattern and flowing silhouette create a stunning look for any special occasion. The soft, lightweight fabric ensures comfort and ease of movement, while the v-neckline and adjustable straps add a touch of sophistication. Whether it s a wedding or a garden party, this dress is sure to turn heads.',
      price: 98.99,
      brand: "Chic Couture",
      category: "Dresses",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "/dresse-black.png",
        },
        {
          color: "Blue",
          colorCode: " #0000FF",
          image:
            "/dresse-blue.png",
        },
        {
          color: "Red",
          colorCode: "#FF0000",
          image:
            "/dresse-red.png",
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "good enough. I like the camera and casing. the delivery was fast too.",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "example1@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "I really liked it!!",
          createdDate: "2023-06-26T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "North Face Arctic Down Parka",
      description:
        "Stay warm and stylish with the North Face Arctic Down Parka. This premium winter jacket features 550-fill down insulation for superior warmth in cold conditions. The waterproof and breathable DryVent shell keeps you dry in snowy and wet weather. With a faux fur-trimmed hood, multiple pockets, and a sleek design, this parka is perfect for urban adventures and outdoor activities.",
      price: 70,
      brand: "The North Face",
      category: "Jackets",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "/jacket-black.png",
        },
      ],
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Nike Air Force 1 Low',
      description:
        'Step up your sneaker game with the iconic Nike Air Force 1 Low. Featuring a timeless design and unmatched comfort, these sneakers are a must-have for any sneakerhead. The premium leather upper provides durability and a classic look, while the Air-Sole unit in the heel offers responsive cushioning. Whether you re on the court or hitting the streets, these kicks will keep you looking fresh.',
      price: 99.99,
      brand: "Nike",
      category: "Shoes",
      inStock: true,
      images: [{
          color: "White",
          colorCode: "#FFFFFF",
          image:
            "/shoes-white.png",
        },
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "/shoes-black.png",
        },
        
      ],
      reviews: [],
    },
  ];