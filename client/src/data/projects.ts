export interface Project {
  id: string;
  title: string;
  location: string;
  featuredImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "sunrise-senior-living",
    title: "Sunrise Senior Living",
    location: "Princeton, NJ",
    featuredImage: "/images/lobby.jpg",
    images: [
      "/images/lobby.jpg",
      "/images/lounge.jpg",
      "/images/hallway.jpg",
      "/images/dining.jpg",
    ],
  },
  {
    id: "wellness-center",
    title: "Wellness Center",
    location: "Cherry Hill, NJ",
    featuredImage: "/images/gym.jpg",
    images: [
      "/images/gym.jpg",
      "/images/lounge.jpg",
      "/images/hallway.jpg",
    ],
  },
  {
    id: "patient-care-suite",
    title: "Patient Care Suite",
    location: "Morristown, NJ",
    featuredImage: "/images/patient-room.jpg",
    images: [
      "/images/patient-room.jpg",
      "/images/hallway.jpg",
      "/images/lounge.jpg",
    ],
  },
  {
    id: "memory-care-commons",
    title: "Memory Care Commons",
    location: "Red Bank, NJ",
    featuredImage: "/images/hallway.jpg",
    images: [
      "/images/hallway.jpg",
      "/images/dining.jpg",
      "/images/lounge.jpg",
      "/images/lobby.jpg",
    ],
  },
  {
    id: "assisted-living-dining",
    title: "Assisted Living Dining",
    location: "Summit, NJ",
    featuredImage: "/images/dining.jpg",
    images: [
      "/images/dining.jpg",
      "/images/lounge.jpg",
      "/images/lobby.jpg",
    ],
  },
  {
    id: "rehabilitation-lounge",
    title: "Rehabilitation Lounge",
    location: "Hoboken, NJ",
    featuredImage: "/images/lounge.jpg",
    images: [
      "/images/lounge.jpg",
      "/images/gym.jpg",
      "/images/hallway.jpg",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
