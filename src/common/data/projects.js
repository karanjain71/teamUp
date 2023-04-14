const projects = [
  {
    id: 0,
    img: "img1",
    name: "Call for Walkathon",
    description: "Lets promote healthy lifestyles",
    status1: "Ongoing",
    category: "Health",
    signedIn: true,
    color: "warning",
    dueDate: "2022-05-08",
    vacancies: "5",
    createdBy: "vasanth.gopa@sap.com",
    commentsCount: 8,
    team: [
      {
        id: 0, img: "avatar4", fullname: "Das, Shreya", skills: [
          { id: 0, name: "Automation" },
          { id: 1, name: "DevOps" },
        ],
      },
      {
        id: 1, img: "avatar5", fullname: "Aditi Parmar",
        skills: [{ id: 0, name: "UI/UX" }],
      },
      {
        id: 2, img: "avatar2", name: "A", color: "success", fullname: "Tukan Datta",
        skills: [{ id: 0, name: "Backend" }],
      },
      {
        id: 4, img: "avatar6", fullname: "Manu, Porwal",
        skills: [
          { id: 0, name: "Developer" },
        ],
      },
    ],
    startDate: "2022-05-06",
    projectDetails: {
      description:
        "A walkathon is a great way to get everyone on their feet and active by promoting healthy lifestyles",
      points: [
        "10",
      ],
    },
    comments: [
      {
        id: 0,
        username: "Dilip Singh",
        userImg: "avatar2",
        comment: "I'm interested and want to join the team",
      },
      {
        id: 1,
        username: "Keshav Bhardwaj",
        userImg: "avatar3",
        comment: "@Dilip Glad to connect with you. Let's make it together!",
        reply: {
          username: "Ashok",
          comment: "Awesome, Welcome to the team.",
        },
      },
    ],
    applicants: [
      {
        id: 0, 
        fullname: "Jain Darshika",
        img: "avatar9",
      },
      {
        id: 1, 
        fullname: "KMN Sudhir",
        img: "avatar3",
      },
    ]
  },
  {
    id: 1,
    img: "img2",
    name: "Badminton at 5pm Today",
    description: "Let's play a badminton today evening",
    status1: "New",
    category: "Sports",
    signedIn: true,
    color: "success",
    vacancies: "4",
    createdBy: "vasanth.gopa@sap.com",
    dueDate: "2022-04-08",
    commentsCount: 10,
    team: [
      { id: 0, img: "avatar8", fullname: "Swathi" },
      { id: 1, img: "avatar2", fullname: "Sujith" },
    ],
    startDate: "2022-04-08",
    projectDetails: {
      description:
        "Lets play badminton today near building 5, SAP Labs India",
      points: [
        "10"
      ],
    },
    comments: [
      {
        id: 0,
        username: "K, Vidhya",
        userImg: "avatar2",
        comment: "Cool, I'm interested",
      },
      {
        id: 1,
        username: "Laha, Pralay",
        userImg: "avatar3",
        comment: "@Vidhya, I'm interested too",
        reply: {
          username: "Amith",
          comment: "Awesome, be ready by 4:50 in the court",
        },
      },
      {
        id: 2,
        username: "Patil Sundeep",
        comment: "Can I also join in?",
      },
    ],
    applicants: [
      {
        id: 0,
        fullname: "Shivam Arora",
        img: "avatar2",
      },
      {
        id: 1,
        fullname: "Shiv Kumar",
        img: "avatar5",
      },
    ]
  },
  {
    id: 2,
    img: "img3",
    name: "Innovation: SAP Teamup",
    description: "Innovation in HXM space",
    status1: "New",
    category: "Technical",
    signedIn: false,
    color: "success",
    vacancies: "5",
    createdBy: "karan.jain@sap.com",
    dueDate: "2022-04-10",
    commentsCount: 6,
    team: [
      { id: 0, img: "Null", name: "K", color: "info", fullname: "Konna, Swathi" },
      { id: 1, img: "avatar2", fullname: "Kiran Thomas" }
    ],
    startDate: "2022-04-08",
    projectDetails: {
      description:
        "We are trying to build SAP Teamup - A crowdsourcing platform to collaborate, participate, build, network, learn, unite, and enjoy! Here you can find your peers who can collaborate and join you in any event, hackathon, sports, projects, dinner or any other aspect.",
      points: [
        "30"
      ],
    },
    comments: [
      {
        id: 0,
        username: "Gupta Abhiskeh",
        userImg: "avatar2",
        comment: "I love the concept and wanted to join your team.",
      },
      {
        id: 1,
        username: "Tanvu",
        userImg: "avatar3",
        comment: "@Henry are you using React JS?",
        reply: {
          username: "Mahesh Ummamaheshwaran",
          comment: "Yes, we are planning to build the tool with MERN Stack technology",
        },
      },
      {
        id: 2,
        username: "Madhu",
        comment: "This is a very nice project!",
      },
    ],
    applicants: [
      {
        id: 0,
        fullname: "David Gupta",
        img: "avatar2",
      },
      {
        id: 1,
        fullname: "Sriram Sridharan",
        img: "avatar3"
      },
    ]
  },
  {
    id: 3,
    img: "img3",
    name: "KGF2 Movie Tonight",
    description: "A team movie event",
    status1: "New",
    category: "Leisure",
    signedIn: true,
    color: "success",
    vacancies: "5",
    createdBy: "vasanth.gopa@sap.com",
    dueDate: "2022-05-10",
    commentsCount: 6,
    team: [
      { id: 0, img: "Null", name: "K", color: "info", fullname: "Konna, Swathi" },
      { id: 1, img: "avatar2", fullname: "Kiran Thomas" }
    ],
    startDate: "2022-05-10",
    projectDetails: {
      description:
        "KGF Movie - The film focuses on Rocky, a high-ranking assassin in Mumbai, who was born in poverty. After being offered the total control of Mumbai by his employer's boss, ...",
      points: [
        "10"
      ],
    },
    comments: [
      {
        id: 0,
        username: "Gupta Abhiskeh",
        userImg: "avatar2",
        comment: "I love the movie and wanted to join your team.",
      },
      {
        id: 1,
        username: "Tanvu",
        userImg: "avatar3",
        comment: "@Henry are you planning in PVR Screens?",
        reply: {
          username: "Mahesh",
          comment: "Yes, we are planning in PVR theaters",
        },
      },
      {
        id: 2,
        username: "Madhu",
        comment: "This is a very nice movie!",
      },
    ],
    applicants: [
      {
        id: 0,
        fullname: "David Gupta",
        img: "avatar2",
      },
      {
        id: 1,
        fullname: "Sridharan",
        img: "avatar3"
      },
    ]
  },
  {
    id: 4,
    img: "img2",
    name: "Certifiation on K8S",
    description: "Learning K8S and crack CKAD together",
    status1: "New",
    category: "Technical",
    signedIn: false,
    color: "success",
    vacancies: "5",
    createdBy: "karan.jain@sap.com",
    dueDate: "2022-04-08",
    commentsCount: 10,
    team: [
      { id: 0, img: "avatar8", fullname: "Karan" },
      { id: 1, img: "avatar2", fullname: "Sujith" },
    ],
    startDate: "2022-04-08",
    projectDetails: {
      description:
        "I'm planning to learning K8S and complete CKAD Certification, calling for other collugues who wants to learn K8s together and complete certifiation",
      points: [
        "30"
      ],
    },
    comments: [
      {
        id: 0,
        username: "Shreya Das",
        userImg: "avatar2",
        comment: "Cool, I'm interested to learn and write CKAD",
      },
      {
        id: 1,
        username: "Mahima",
        userImg: "avatar3",
        comment: "@Gopa, I'm interested too",
        reply: {
          username: "Shivam Arora",
          comment: "Awesome, lets learn together",
        },
      },
      {
        id: 2,
        username: "Athira",
        comment: "I'm interested too, Can I also join in?",
      },
    ],
    applicants: [
      {
        id: 0,
        fullname: "Utkarsh",
        img: "avatar2",
      },
      {
        id: 1,
        fullname: "Akshay Gupta",
        img: "avatar5",
      },
    ]
  },
]

const options = {
  chart: {
    height: 290,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
  },
  yaxis: {
    title: {
      text: "% (Percentage)",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week",
    },
  },
  colors: ["#556ee6"],
}

const series = [
  {
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
  },
]

export { projects, options, series }
