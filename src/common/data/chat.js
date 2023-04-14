/**
 * Chat data
 */
const chats = [
  {
    id: 1,
    roomId: 1,
    status: "offline",
    image: "avatar2",
    name: "Karan Jain",
    description: "Hey! there I'm available",
    time: "05 min",
  },
  {
    id: 2,
    roomId: 2,
    status: "online",
    image: "avatar9",
    name: "Aditi Parmar",
    description: "I've finished it! See you so",
    time: "12 min",
  },
  {
    id: 3,
    roomId: 3,
    status: "online",
    image: "avatar8",
    name: "Shreya Das",
    description: "This project is so awesome!",
    time: "24 min",
  },
  {
    id: 4,
    roomId: 4,
    status: "intermediate",
    image: "avatar4",
    name: "Supriya",
    description: "Nice to meet you",
    time: "1 hr",
  },
  {
    id: 5,
    roomId: 5,
    status: "offline",
    image: "avatar6",
    name: "Indla, Haribabu",
    description: "Hey! there I'm available",
    time: "3 hrs",
  },
  {
    id: 6,
    roomId: 6,
    status: "online",
    image: "avatar4",
    name: "Karunamurthi, Kalpana",
    description: "I've finished it! See you so",
    time: "5 hrs",
  },
  {
    id: 7,
    roomId: 7,
    status: "online",
    image: "avatar6",
    name: "Jose, Ajith",
    description: "This project is interesting!",
    time: "24 min",
  },
]

/**
 * group list data
 */
const groups = [
  { id: 1, image: "G", name: "Call for Walkathon" },
  { id: 2, image: "R", name: "Badminton at 5pm Today" },
  { id: 3, image: "M", name: "SAP Teamup" },
  { id: 4, image: "G", name: "KGF2 Movie Tonight" },
  { id: 5, image: "R", name: "Certifiation on K8S" },

]

/**
 * contact list data
 */
const contacts = [
  {
    category: "A",
    child: [
      { id: 1, name: "Ashok, Govinda Rao" },
      { id: 2, name: "Astikey Singh" },
      { id: 3, name: "Aditi Parmar" },
    ],
  },
  {
    category: "B",
    child: [{ id: 1, name: "B, Gayathri" }],
    child: [{ id: 2, name: "Bhanuprakash Singh" }],
  },
  {
    category: "C",
    child: [
      { id: 1, name: "Cyril" },
      { id: 2, name: "Chitturi Ajay" },
      { id: 3, name: "Chandragiri Venakat Seshadri" },
    ],
  },
  {
    category: "D",
    child: [{ id: 4, name: "Das, Shreya" }],
  },
]

/**
 * message list data
 */
const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "Cyril",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Chandragiri Venakat Seshadri",
    message: "Hi, How are you? What about our next meeting?",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 3,
    roomId: 1,
    sender: "Bhanuprakash",
    message: "Yeah everything is fine",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 4,
    roomId: 1,
    sender: "Ashok, Govinda Rao",
    message: "& Next meeting tomorrow 10.00AM",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
]

export { chats, messages, contacts, groups }
