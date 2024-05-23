const portfolio = [
  {
    id: 0,
    projectName: "Sheger Restuarant Food Ordering App",
    url: "https://www.figma.com/design/CsHzDmW89WpDs9jnGYlhxN/mobile-app-design?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
    image: "projects/shegerFood.png",
    projectDetail:
      "A food ordering app that offers a wide range of food items from sheger restuarant.The design is clean and user-friendly.",
    technologiesUsed: [
      {
        tech: "Figma",
      },
      {
        tech: "Adobe Illustrator",
      },
    ],
  },
  {
    id: 0,
    projectName: "Students Voice",
    url: "https://www.figma.com/design/DE4xmoerSCrHv5lshr0EQU/Student-Vooice?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
    image: "projects/studentsVoice.png",
    projectDetail:
      "A platform that allows students to share their thoughts, ideas, and opinions on various topics.",
    technologiesUsed: [
      {
        tech: "Figma",
      },
      {
        tech: "Adobe Illustrator",
      },
    ],
  },
  {
    id: 0,
    projectName: "Konjit",
    url: "https://www.figma.com/design/7BEDxMpLCnUTWhC3Qt4bcS/konjit-e-commerce?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
    image: "projects/konjit.png",
    projectDetail:
      "An e-commerce platform that offers a wide range of products from different categories. ",
    technologiesUsed: [
      {
        tech: "Figma",
      },
      {
        tech: "Adobe Illustrator",
      },
    ],
  },
  {
    id: 0,
    projectName: "Photography Portfolio",
    url: "https://www.figma.com/design/VLTeoHwbEnf6tGvHTzhIrE/photo-studio?node-id=3%3A2&t=0SZzUKccUL8ly1pI-1",
    image: "projects/studio.png",
    projectDetail:
      "An online portfolio for a photography studio that showcases the photographer's work and services.",
    technologiesUsed: [
      {
        tech: "Figma",
      },
      {
        tech: "Adobe Illustrator",
      },
    ],
  },
  {
    id: 0,
    projectName: "Health AI Chatbot",
    url: "https://www.figma.com/design/ihtqLUOvXWe4Ly77aoqykX/chat-ai?node-id=1%3A65&t=WzrCRaeGGL7vW3dn-1",
    image: "projects/chatai.png",
    projectDetail:
      "A chatbot that provides health-related information and advice to users. The chatbot is designed to be user-friendly and easy to use.",
    technologiesUsed: [
      {
        tech: "Figma",
      },
      {
        tech: "Adobe Illustrator",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
