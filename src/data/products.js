export const SHOP_ITEMS = [
  {
    id: 1,
    name: "Coltrane",
    roast: "Medium Roast",
    badge: "Cult Classic",
    price: 18.99,
    desc: "Balanced and smooth with cocoa and caramel notes.",
    img: "https://www.wimpdecaf.com/cdn/shop/files/coltrane-7_0eea5d32-e260-44bf-a8e8-578d17d30eca_2560x.png?v=1738010992",
  },
  {
    id: 2,
    name: "Kahlo",
    roast: "Dark Roast",
    badge: "Cult Classic",
    price: 18.99,
    desc: "Bold, rich, and full-bodied with a lasting finish.",
    img: "https://www.wimpdecaf.com/cdn/shop/files/kahlo-7_07928c86-00eb-45dd-82e0-96b299b60048_2560x.png?v=1738011035",
  },
  {
    id: 3,
    name: "Welcome Pack",
    roast: "All Three Roasts",
    badge: "Best Value",
    price: 49.99,
    desc: "A starter pack with all three signature roasts.",
    img: "https://www.wimpdecaf.com/cdn/shop/files/wimp-taster_400x.png?v=1745761010",
  },
  {
    id: 10,
    name: "Hachiko",
    roast: "Light Roast",
    badge: "Popular",
    price: 18.99,
    desc: "Bright and floral with gentle sweetness.",
    img: "https://www.wimpdecaf.com/cdn/shop/files/Hachiko-2_2560x.png?v=1737738783",
  },
  {
    id: 11,
    name: "Gift Card",
    roast: "$25 value",
    badge: "Gift",
    price: 25.0,
    desc: "Redeemable on any order for the perfect present.",
    img: "https://www.wimpdecaf.com/cdn/shop/files/wimp-gift-cards_400x.png?v=1745761070",
  },
];

export const UPSELL_ITEMS = SHOP_ITEMS.filter(item => item.id === 10 || item.id === 11);
