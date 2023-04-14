/*** 
* Events data
* 
*/
const events = [
  {
    id: 1,
    title: "Call for Walkathon",
    start: new Date().setDate(new Date().getDate() + 1),
    className: "bg-warning text-white",
  },
  {
    id: 2,
    title: "Techncial: SAP Teamup",
    start: new Date(),
    end: new Date(),
    className: "bg-success text-white",
  },
  {
    id: 3,
    title: "Badminton at 5pm Today",
    start: new Date().setDate(new Date().getDate() + 8),
    className: "bg-info text-white",
  },
  {
    id: 4,
    title: "Morning GYM",
    start: new Date().setDate(new Date().getDate() + 10),
    className: "bg-primary text-white",
  },
]

/**
 * Calendar categories data
 */
const calenderDefaultCategories = [
  {
    id: 1,
    title: "Walkathon",
    type: "bg-success",
  },
  {
    id: 2,
    title: "Sport",
    type: "bg-info",
  },
  {
    id: 3,
    title: "Technical",
    type: "bg-warning",
  },
  {
    id: 4,
    title: "Others",
    type: "bg-danger",
  },
]

export { calenderDefaultCategories, events }
