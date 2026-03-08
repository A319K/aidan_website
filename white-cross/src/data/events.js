// TO ADD EVENT PHOTOS: When you provide a folder of event images,
// import them here and assign each to the image field.
// Example: import campaignPhoto from '../assets/events/campaign.jpg'
// Then set image: campaignPhoto on the matching event object.

export const events = [
  {
    id: 1,
    title: "White Cross Influential Campaign",
    date: "2023-10-28",
    category: "past",
    image: null, // Replace null with imported image when available
    description:
      "A community outreach campaign raising awareness about drug misuse and available resources. All photo credits to Alex Herrera and Chan Aung.",
    location: "New Jersey",
  },
  {
    id: 2,
    title: "NJ4S & White Cross Collaborative Classes",
    date: "2025-02-04",
    endDate: "2025-02-25",
    category: "past",
    image: null, // Replace null with imported image when available
    description:
      "A multi-week collaborative series with NJ4S (New Jersey for All Students) delivering educational classes on substance abuse prevention.",
    location: "New Jersey",
  },
  {
    id: 3,
    title: "Bergen Catholic High School Assembly",
    date: "2025-03-13",
    category: "past",
    image: null, // Replace null with imported image when available
    description:
      "White Cross delivered a school-wide assembly at Bergen Catholic High School focusing on drug abuse awareness and peer support.",
    location: "Bergen Catholic High School, NJ",
  },
  // TO ADD FUTURE EVENTS: Copy the object format above and add new events here.
  // Set category: "upcoming" for future events so they appear in the calendar.
  // Example:
  // {
  //   id: 4,
  //   title: "Spring Awareness Walk",
  //   date: "2025-04-20",
  //   category: "upcoming",
  //   image: null,
  //   description: "Join us for our annual spring awareness walk.",
  //   location: "Bergen County, NJ",
  // },
];
