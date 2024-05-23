const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Addis Ababa University',
                degree: 'BS, Software Engineering',
                detail: "Bachelor's Degree in software engineering from Addis Ababa university.",
                year: '2001-present'
            },
           
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Shega Media and Technology',
                role: 'UI UX Designer and Full Stack Developer Internee',
                url: 'https://shega.co/',
                desc: 'As a full stack developer, I use Figma and Adobe illustrator for designing elegant website and i use Nest, Next,Strapi & JavaScript to build user interfaces for web applications.',
                year: '03/2024 - Present',
                location: 'Addis Ababa, Ethiopia'
            },
            {
                id: 2,
                title: 'Enchawet games',
                role: 'Game Designer and Developer Internee',
                url: 'https://enechawetgames.com/',
                desc: 'As an Internee, I learned how to use Unity & C-Sharp to build interactive game.',
                year: '11/2023 - Present',
                location: 'Addis ababa, Ethiopia'
            },
            {
                id: 3,
                title: 'Minnovation Technology',
                role: 'Python Developer',
                url: 'https://www.minnovation.io/',
                desc: "I work there as a Python developer",
                year: '05/2023 - present',
                location: 'Addis Ababa, Ethiopia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
