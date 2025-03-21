module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://arjunjain.netlify.app/`,
    // Your Name
    name: 'Arjun Jain',
    // Main Site Title
    title: `Arjun Jain | Aspiring Cybersecurity Specialist`,
    // Description that goes under your name in main bio
    description: `Computer Science student with a strong interest in cybersecurity`,
    // Optional: Twitter account handle
    author: `@ElonMusk`,
    // Optional: Github account URL
    github: `https://github.com/arjunjaincs`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/arjunjaincs`,
    // Content of the About Me section
    about: `Computer Science student with a strong interest in cybersecurity, specializing in penetration testing, network security, and threat analysis. Experienced in designing innovative, real-world tech solutions and actively enhancing skills through hands-on projects and platforms like TryHackMe. Committed to continuous learning and applying technical knowledge to build secure, efficient systems that solve practical challenges.
`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Bluetooth-Based Smart Attendance System (Ongoing)',
        description:
          'Developing a low-cost, cheat-proof attendance system using Flutter and Bluetooth Low Energy (BLE). The system ensures that only students physically present can mark attendance by detecting BLE signals from the teacher device, reducing proxy attendance and enhancing accuracy',
        link: '',
      },
      {
        name: 'PaniSanket – Water Crowding Problems Project (Completed)',
        description:
          'Contributed to building a citizen-reporting platform that addresses water crowding issues through real-time issue reporting, emergency alerts, and monthly consumption insights. The project empowers communities to actively participate in sustainable water management.',
        link: '',
      },
      {
        name: 'Smart Parking System using Arduino (Concept)',
        description:
          'Designed a conceptual prototype for an automated parking management system using Arduino and IR sensors. The circuit model simulated vehicle detection, dynamically updating available parking slots on a digital display. The concept aimed to enhance parking efficiency by providing real-time availability information to drivers',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
