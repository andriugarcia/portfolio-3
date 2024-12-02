const person = {
    firstName: 'Andriu',
    lastName:  'García',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/src/assets/avatar.jpg',
    location:  'Europe/Madrid',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: `Subscribe to {person.firstName}'s Newsletter`,
    description: `I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.`
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/andriugarcia',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/andriugarcia/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:contacto@andriugarcia.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: `I'm Andriu Garcia`,
    subline: `Full Stack Developer building Scalable, User-centric Solutions That Drive Business Growth`
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: `Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.`
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Vonage (Ericsson)',
                timeframe: '2023 - Present',
                role: 'Senior Full Stack Developer',
                achievements: [
                    `Developed 10+ internal business tools using Vue.js and internal design system (Vivid) for the frontend, a microservices-based backend architecture with Java Micronaut, and AWS (S3, EC2, Kubernetes with EKS, MySQL with RDS)`,
                    `Collaborated in peer programming with junior developers, conducted technical interviews, and performed code reviews to ensure quality and maintain coding standards`,
                    `Migrated an entire project to an in-house no-code platform, eliminating 20+ security vulnerabilities, removing the need for a separate maintenance project, and reducing cloud costs by 30\% (including web server, database and backend)`,
                    `Implemented comprehensive testing for all project functionalities, using Vue Test Utils for frontend, Mockito for backend unit testing, and Playwright for end-to-end (E2E) testing, ensuring high-quality and reliable software delivery`,
                    `Developed and designed a state architecture for a micro-frontend system using a pub/sub model, enabling seamless intercommunication across multiple frameworks with high cohesion and low coupling`
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Freelance',
                timeframe: '2021 - 2023',
                role: 'Full Stack Developer',
                achievements: [
                    `Developed 10+ projects, including 3 award-winning designs on Awwwards, featuring complex animations and innovative designs`,
                    `Audited the safety and stability of all the projects resulting in a significant decrease in errors and boosting customer satisfaction. This allowed for immediate detection and resolution of server downtime in less than an hour`,
                    `Audited code quality and best practices across all projects, leading a refactoring initiative that enabled new projects to be built from scratch in just one day`
                ],
                images: [ ]
            },
            {
                company: 'Personal Projects',
                timeframe: '2021 - 2023',
                role: 'Full Stack Developer',
                achievements: [
                    `Collaborated closely with stakeholders, including partners and clients, to understand their business requirements and translate them into actionable tasks for the development team`,
                    `Developed a full e-commerce website that achieved a 10\% conversion rate and grew to 20,000 users, securing a \$200K funding round; optimized landing page friction through A/B testing and conversion funnel analysis`
                ],
                images: [ ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Granada',
                description: `Computer Science and Business Administration`,
            },
            {
                name: 'Self-Taught',
                description: `The only way to grow constantly is keeping the curiosity alive.`,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: `Able to prototype in Figma with Once UI with unnatural speed.`,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: `Building next gen apps with Next.js + Once UI + Supabase.`,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };