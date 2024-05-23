const portfolio = [
    {
        id: 0,
        projectName: "Sheger Restuarant Food Ordering App",
        url: "https://www.figma.com/design/CsHzDmW89WpDs9jnGYlhxN/mobile-app-design?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
        image: "projects/shegerFood.png",
        projectDetail: "A food ordering app that offers a wide range of food items from sheger restuarant.The design is clean and user-friendly, making it easy for users to navigate through the app and place orders.",
        technologiesUsed: [
            {
                tech: "Figma"
            },
            {
                tech: "Adobe Illustrator"
            }
        ]
    },
    {
        id: 0,
        projectName: "Students Voice",
        url: "https://www.figma.com/design/DE4xmoerSCrHv5lshr0EQU/Student-Vooice?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
        image: "projects/studentsVoice.png",
        projectDetail: "A platform that allows students to share their thoughts, ideas, and opinions on various topics.",
        technologiesUsed: [
            {
                tech: "Figma"
            },
            {
                tech: "Adobe Illustrator"
            }
           
        ]
    },
    {
        id: 0,
        projectName: "Konjit",
        url: "https://www.figma.com/design/7BEDxMpLCnUTWhC3Qt4bcS/konjit-e-commerce?node-id=0%3A1&t=0SZzUKccUL8ly1pI-1",
        image: "projects/konjit.png",
        projectDetail: "An e-commerce platform that offers a wide range of products from different categories. ",
        technologiesUsed: [
            {
                tech: "Figma"
            },
            {
                tech: "Adobe Illustrator"
            }
        ]
    },
    {
        id: 0,
        projectName: "Photography Portfolio",
        url: "https://www.figma.com/design/VLTeoHwbEnf6tGvHTzhIrE/photo-studio?node-id=3%3A2&t=0SZzUKccUL8ly1pI-1",
        image: "projects/studio.png",
        projectDetail: "An online portfolio for a photography studio that showcases the photographer's work and services.",
        technologiesUsed: [
            {
                tech: "Figma"
            },
            {
                tech: "Adobe Illustrator"
            }
        ]
    },
    {
        id: 0,
        projectName: "FirmSanad",
        url: "/domain-expired",
        image: "projects/firmsanad.png",
        projectDetail: "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Fateh Al Mustaqbil",
        url: "https://fatehtour.com/",
        image: "projects/fateh.png",
        projectDetail: "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },

     
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
