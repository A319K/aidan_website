// TO ADD NEW MEMBERS: Copy the object format below and add to the correct group.
// initials are auto-generated from the name field if not provided.
// Example:
// { name: "Jane Doe", role: "Event Coordinator", secondary: "Designer", group: "Events Team" }

export const teamGroups = [
  {
    label: "Leadership",
    members: [
      {
        name: "Ryan Kwon",
        role: "President",
        secondary: "Founder",
        group: "Leadership",
      },
    ],
  },
  {
    label: "Events Team",
    members: [
      {
        name: "Justin Yoo",
        role: "Event Coordinator",
        secondary: "",
        group: "Events Team",
      },
      {
        name: "Hannah Choi",
        role: "Event Organizer",
        secondary: "Instagram Collaborator",
        group: "Events Team",
      },
      {
        name: "Angela Jin",
        role: "Event Coordinator",
        secondary: "Designer",
        group: "Events Team",
      },
    ],
  },
  {
    label: "Design & Instagram",
    members: [
      {
        name: "Harrison Kazimir",
        role: "Advocate",
        secondary: "Designer",
        group: "Design & Instagram",
      },
      {
        name: "Caleb Suh",
        role: "Instagram Collaborator",
        secondary: "Designer",
        group: "Design & Instagram",
      },
      {
        name: "Isabel Lee",
        role: "Instagram Collaborator",
        secondary: "Designer",
        group: "Design & Instagram",
      },
      {
        name: "Jay Kim",
        role: "Instagram Collaborator",
        secondary: "Designer",
        group: "Design & Instagram",
      },
      {
        name: "Samantha Arteaga",
        role: "Instagram Collaborator",
        secondary: "Advocate",
        group: "Design & Instagram",
      },
      {
        name: "Juno Moon",
        role: "Writer",
        secondary: "Associate",
        group: "Design & Instagram",
      },
    ],
  },
  {
    label: "Web & Content",
    members: [
      {
        name: "Alex Herrera",
        role: "Website Collaborator",
        secondary: "Supporter",
        group: "Web & Content",
      },
      {
        name: "Jonas Haro",
        role: "Website Collaborator",
        secondary: "Advocate",
        group: "Web & Content",
      },
      {
        name: "Chan Aung",
        role: "Website Collaborator",
        secondary: "Editor",
        group: "Web & Content",
      },
      {
        name: "Alex Kim",
        role: "Instagram Collaborator",
        secondary: "Website Collaborator",
        group: "Web & Content",
      },
      {
        name: "Tierney Wedeen",
        role: "Member",
        secondary: "",
        group: "Web & Content",
      },
    ],
  },
];

// Flatten all members for convenience
export const allMembers = teamGroups.flatMap((g) => g.members);

// Helper: get initials from name
export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
