export const getProductsMock = () => ({
  id: 1,
  brand: "pure anada",
  name: "Pure Anada Natural Mascara",
  price: "14.0",
  price_sign: "R$",
  currency: "BRL",
  image_link:
    "https://d3t32hsnjxo7q6.cloudfront.net/i/afefede002b8d94f6e53ea07dd4070f9_ra,w158,h184_pa,w158,h184.jpg",
  product_link:
    "https://well.ca/products/pure-anada-natural-mascara_83255.html",
  website_link: "https://well.ca",
  description:
    "Finally, a natural mascara you can feel good about putting on your lashes!\nIt is naturally paraben-free, gluten-free, and mercury-free. \nYou will be amazed at how well this mascara builds volume and length to your lashes.\nThis is the natural mascara youve been waiting for!Ingredients: Aqua (Water), Oryza Sativa Wax (Rice Bran Wax), Olea Europea fruit oil \n(Olive Oil), Vegetable Source Cetyl Alcohol (Coconut), Coernica Cerifera\n (Carnauba Wax), Euphorbia Cerifera (Candelilla Wax), Vegetable \nGlycerin, Stearic Acid, Acacia Gum, Black Iron oxide (CI 77499), \nAminomethyl Popandiol (Ph Adjuster), Phenoxyethanol (Preservative).",
  rating: 4.6,
  category: "test",
  product_type: "mascara",
  tag_list: ["Natural", "Gluten Free", "Canadian"],
  created_at: "2016-10-01T18:10:46.893Z",
  updated_at: "2017-12-23T20:31:46.013Z",
  product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/1.json",
  api_featured_image:
    "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/001/original/data?1514061104",
  product_colors: [
    {
      hex_value: "#000000",
      colour_name: "Black ",
    },
    {
      hex_value: "#3E2829",
      colour_name: "Brown ",
    },
  ],
  favorite: false,
});

export const getProductMockArray = () => [
  getProductsMock(),
  { ...getProductsMock(), id: 2 },
];

export const getFilterMock = () => ({
  order: 1,
  search: "",
  category: "",
  favorite: false,
});
