const PROJECTS_START_DATA = [
  {
    title: 'Frontend',
    items: [
      {
        id: '234356764354',
        published: true,
        slug: 'cue-inc',
        name: 'Cue.inc',
        summary: '"Cue" is an all-in-one self-management app that empowers users to efficiently organize and optimize various aspects of their lives, including finance management, calendar scheduling, note-taking, and more. With its seamless integration and user-friendly interface, Cue becomes the ultimate tool to help individuals achieve personal and financial goals.',
        date: new Date('2023-08-21'),  
        urlDemo: '',
        preview: '',
        urlSource: 'https://www.figma.com/file/SrJXjhPGcgmrLgBt8o3Xg9',
        stack: {
          description: 'Cue project leverages a diverse technology stack comprising React, Node.js and Express.js. We implemented a complicated business logic on the server side and enabled continuous delivery. Our CI server builds the system and runs a full suite of unit and integration tests against every commit.',
          items: [
            {
              title: 'Frontend',
              tags: ['React', 'Vite', 'TypeScript', 'RTK', 'Redux', 'SASS'],
            },
            {
              title: 'Beckend',
              tags: ['Node.js', 'Express.js'],
            },
            {
              title: 'DataBase',
              tags: ['MongoDB'],
            },
            {
              title: 'Design',
              tags: ['Figma'],
            }, 
          ]
        },
        key_features: [{
          title: 'Financial Management',
          description: 'Track expenses, set budgets, and analyze spending patterns with intuitive visualizations.',
        },
        {
          title: 'Calendar Scheduling:',
          description: 'Plan events, set reminders, and sync with popular calendar services for efficient time management.',
        },
        {
          title: 'Notes',
          description: 'Capture ideas, create to-do lists, and organize thoughts with a user-friendly note-taking interface.',
        },
        {
          title: 'Data Security',
          description: 'Ensure data privacy and security with industry-standard encryption and user authentication.',
        },
      ],
        typography: {
          font: 'Poppins',
          font_description: 'Poppins is a modern and versatile sans-serif font designed with clean lines and a balanced geometric structure, making it ideal for various design projects, including both display and text applications.',
        },
        colors: ["#EFD2C8", "#2F2F2F", "#FA4141", "#D9D9D9", "#FF5656", "#FFFFFF"],
        icons: ['', ''],
        future_enhancements: { 
          description: 'Continuously working to enhance the app, the following features are planned for future updates:',
          items: [{
            heading: 'Data Sync',
            description: 'Enable seamless synchronization of data across multiple devices to enhance user convenience and accessibility.'
          }, {
            heading: 'Collaboration',
            description: 'Implement collaborative features, allowing users to share notes and tasks with others for team projects and group planning.'
          }, {
            heading: 'Integration',
            description: 'Integrate the app with popular third-party services, expanding its functionality and usefulness.'
          }]
        }

      }, 
    ],
  },
  {
    title: 'Design',
    items: [
      {
        id: '1888766664444',
        published: true,
        slug: 'rose-celine',
        name: 'Rose Céline',
        summary: 'Photographer portfolio is a cutting-edge web application designed to revolutionize the way photographers showcase and manage their portfolios. It provides photographers with a user-friendly platform to display their best work, manage their images, and connect with potential clients, making it the go-to solution for professional photographers to establish and expand their online presence.',
        date: new Date('2023-05-23'), 
        urlSource: 'https://test-data.com',
      },
    ],
  },
   
   
];


export default PROJECTS_START_DATA;