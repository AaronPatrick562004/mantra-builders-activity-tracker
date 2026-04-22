// lib/mantra-eco-club-data.ts
// Types
export interface MantraProject {
  id: string
  name: string
  district: string
  block: string
  type: "premium" | "luxury" | "township" | "mixed-use"
  coordinator: string
  residentVolunteers: number
  ecoClubFormed: boolean
  activitiesCompleted: number
  lastActivityDate: string
  rating: number
}

export interface MantraActivity {
  id: string
  projectId: string
  projectName: string
  type: ActivityType
  title: string
  description: string
  date: string
  residentsParticipated: number
  photosCount: number
  status: "completed" | "upcoming" | "cancelled"
  report?: string
}

export type ActivityType =
  | "tree-plantation"
  | "waste-segregation"
  | "plastic-free"
  | "water-conservation"
  | "energy-saving"
  | "cleanliness-drive"
  | "biodiversity"
  | "nature-walk"
  | "environmental-day"
  | "composting"

export interface DistrictStats {
  district: string
  totalProjects: number
  activeEcoClubs: number
  activitiesThisMonth: number
  residentParticipation: number
}

export const activityTypeLabels: Record<ActivityType, string> = {
  "tree-plantation": "Tree Plantation & Nurturing",
  "waste-segregation": "Waste Segregation & Recycling",
  "plastic-free": "Plastic-Free Community",
  "water-conservation": "Water Conservation",
  "energy-saving": "Energy Saving Practices",
  "cleanliness-drive": "Cleanliness Drive",
  "biodiversity": "Biodiversity Awareness",
  "nature-walk": "Nature Walk / Eco-Trail",
  "environmental-day": "Environmental Day Celebration",
  "composting": "Composting / Kitchen Garden",
}

// Mantra Properties Pune Projects - 12 completed, 18 ongoing
export const mantraProjects: MantraProject[] = [
  {
    id: "MNT001",
    name: "Mantra 24 West",
    district: "Pune West",
    block: "Baner",
    type: "luxury",
    coordinator: "Ms. Sneha Kulkarni",
    residentVolunteers: 320,
    ecoClubFormed: true,
    activitiesCompleted: 9,
    lastActivityDate: "2026-02-20",
    rating: 4.9,
  },
  {
    id: "MNT002",
    name: "Mantra Insignia",
    district: "Pune Central",
    block: "Kothrud",
    type: "premium",
    coordinator: "Mr. Rohit Patil",
    residentVolunteers: 280,
    ecoClubFormed: true,
    activitiesCompleted: 8,
    lastActivityDate: "2026-02-18",
    rating: 4.8,
  },
  {
    id: "MNT003",
    name: "Mantra Mirari",
    district: "Pune East",
    block: "Kharadi",
    type: "premium",
    coordinator: "Mrs. Priya Deshmukh",
    residentVolunteers: 210,
    ecoClubFormed: true,
    activitiesCompleted: 7,
    lastActivityDate: "2026-02-15",
    rating: 4.7,
  },
  {
    id: "MNT004",
    name: "Mantra Park View",
    district: "Pune North",
    block: "Wakad",
    type: "township",
    coordinator: "Mr. Amit Joshi",
    residentVolunteers: 450,
    ecoClubFormed: true,
    activitiesCompleted: 11,
    lastActivityDate: "2026-02-22",
    rating: 4.9,
  },
  {
    id: "MNT005",
    name: "Mantra Moments",
    district: "Pune South",
    block: "Undri",
    type: "premium",
    coordinator: "Ms. Neha Shinde",
    residentVolunteers: 165,
    ecoClubFormed: true,
    activitiesCompleted: 6,
    lastActivityDate: "2026-02-10",
    rating: 4.6,
  },
  {
    id: "MNT006",
    name: "Mantra Divine",
    district: "Pune West",
    block: "Hinjawadi",
    type: "mixed-use",
    coordinator: "Mr. Sagar More",
    residentVolunteers: 380,
    ecoClubFormed: true,
    activitiesCompleted: 10,
    lastActivityDate: "2026-02-25",
    rating: 4.8,
  },
]

// Pune district breakdown - 12 completed + 18 ongoing = 30 total
export const mantraDistrictStats: DistrictStats[] = [
  {
    district: "Pune West",
    totalProjects: 8,
    activeEcoClubs: 7,
    activitiesThisMonth: 24,
    residentParticipation: 7200,
  },
  {
    district: "Pune East",
    totalProjects: 7,
    activeEcoClubs: 6,
    activitiesThisMonth: 18,
    residentParticipation: 5400,
  },
  {
    district: "Pune North",
    totalProjects: 6,
    activeEcoClubs: 6,
    activitiesThisMonth: 21,
    residentParticipation: 6100,
  },
  {
    district: "Pune South",
    totalProjects: 5,
    activeEcoClubs: 4,
    activitiesThisMonth: 12,
    residentParticipation: 3800,
  },
  {
    district: "Pune Central",
    totalProjects: 4,
    activeEcoClubs: 3,
    activitiesThisMonth: 11,
    residentParticipation: 2950,
  },
]

export const mantraMonthlyProgress = [
  { month: "Sep 2025", activities: 38, participation: 11200 },
  { month: "Oct 2025", activities: 52, participation: 15800 },
  { month: "Nov 2025", activities: 41, participation: 12900 },
  { month: "Dec 2025", activities: 29, participation: 9100 },
  { month: "Jan 2026", activities: 61, participation: 18900 },
  { month: "Feb 2026", activities: 86, participation: 25450 },
]

export function getMantraTotalStats() {
  const totalProjects = mantraDistrictStats.reduce((sum, d) => sum + d.totalProjects, 0) // 30
  const activeClubs = mantraDistrictStats.reduce((sum, d) => sum + d.activeEcoClubs, 0) // 26
  const totalActivities = mantraDistrictStats.reduce((sum, d) => sum + d.activitiesThisMonth, 0)
  const totalParticipation = mantraDistrictStats.reduce((sum, d) => sum + d.residentParticipation, 0)

  return {
    totalProjects, // 30 = 12 completed + 18 ongoing
    activeClubs,
    totalActivities,
    totalParticipation,
    completedProjects: 12,
    ongoingProjects: 18,
    legacyYears: 17,
  }
}

export function getMantraProjectById(id: string) {
  return mantraProjects.find((project) => project.id === id)
}

export function getMantraActivitiesByProjectId(projectId: string) {
  return mantraActivities.filter((activity) => activity.projectId === projectId)
}

export const mantraActivities: MantraActivity[] = [
  {
    id: "ACT001",
    projectId: "MNT001",
    projectName: "Mantra 24 West",
    type: "tree-plantation",
    title: "Van Mahotsav Tree Plantation",
    description: "Planted 120 native trees across the community landscape.",
    date: "2026-02-20",
    residentsParticipated: 180,
    photosCount: 28,
    status: "completed",
    report: "Planted neem, banyan, and gulmohar trees in open spaces.",
  },
  {
    id: "ACT002",
    projectId: "MNT004",
    projectName: "Mantra Park View",
    type: "waste-segregation",
    title: "Zero Waste Township Initiative",
    description: "Launched color-coded bins and resident training program.",
    date: "2026-02-22",
    residentsParticipated: 450,
    photosCount: 22,
    status: "completed",
    report: "65% waste segregation compliance achieved in first month.",
  },
  {
    id: "ACT003",
    projectId: "MNT002",
    projectName: "Mantra Insignia",
    type: "water-conservation",
    title: "Rainwater Harvesting Awareness",
    description: "Workshop on rooftop rainwater harvesting systems.",
    date: "2026-02-18",
    residentsParticipated: 95,
    photosCount: 15,
    status: "completed",
  },
  {
    id: "ACT004",
    projectId: "MNT006",
    projectName: "Mantra Divine",
    type: "composting",
    title: "Community Composting Hub",
    description: "Setup centralized composting for 300+ households.",
    date: "2026-02-25",
    residentsParticipated: 140,
    photosCount: 18,
    status: "completed",
  },
]