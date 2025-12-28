const generateRandomPrice = () =>  Math.floor(Math.random() * 1000);

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Malik",
    specialty: "Nutritionist",
    price: generateRandomPrice(),
    image: "/doc1.jpg",
    description: "Expert in diet planning, weight management, and metabolic health."
  },
  {
    id: 2,
    name: "Dr. Anam Iqbal",
    specialty: "Dermatologist",
    price: generateRandomPrice(),
    image: "/doc2.jpg",
    description: "Expert in hair, skin patches, acne and pimples."
  },
  {
    id: 3,
    name: "Dr. Huzaifa Ch",
    specialty: "Cardiologist",
    price: generateRandomPrice(),
    image: "/doc3.jpg",
    description: "Expert in heart related diseases."
  },
  {
    id: 4,
    name: "Dr. Shiza Sohail",
    specialty: "Psychologist",
    price: generateRandomPrice(),
    image: "/doc4.jpg",
    description: "Expert in mental health, stress and depression."
  },
  {
    id: 5,
    name: "Dr. Afifa Sajad",
    specialty: "Dentist",
    price: generateRandomPrice(),
    image: "/doc5.avif",
    description: "Expert in teeth, gums bleeding and oral care."
  },
  {
    id: 6,
    name: "Dr. Dua",
    specialty: "Surgeon",
    price: generateRandomPrice(),
    image: "/pic.jpg",
    description: "Expert in surgery, chronic diseases and emergencies."
  }
];