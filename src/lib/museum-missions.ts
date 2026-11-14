import apolloImage from "@/assets/nasa-apollo-15-roving-vehicle.jpg.asset.json";
import insightImage from "@/assets/nasa-insight-seismometer-deployment.jpg.asset.json";
import sojournerImage from "@/assets/nasa-mars-pathfinder-sojourner.jpg.asset.json";
import opportunityImage from "@/assets/nasa-opportunity-self-portrait.jpg.asset.json";
import spiritImage from "@/assets/nasa-spirit-husband-hill.jpg.asset.json";

export const museumMissions = [
  {
    id: "lunar-roving-vehicle",
    name: "Lunar Roving Vehicle",
    mission: "Apollo 15",
    world: "MOON",
    dateLine: "First lunar drive · 31 July 1971",
    image: apolloImage.url,
    imageAlt: "Apollo 15 Lunar Roving Vehicle on the lunar surface",
    imageCredit: "NASA / Apollo 15",
    imageSource: "https://www.nasa.gov/image-article/apollo-15-lunar-roving-vehicle/",
    summary:
      "A battery-powered electric rover that gave Apollo astronauts greater mobility for lunar surface exploration.",
    source: "https://www.nasa.gov/missions/apollo/apollo-15-mission-details/",
    sourceLabel: "NASA · Apollo 15",
  },
  {
    id: "sojourner",
    name: "Sojourner",
    mission: "Mars Pathfinder",
    world: "MARS",
    dateLine: "Launched 1996 · landed 04 July 1997",
    image: sojournerImage.url,
    imageAlt: "NASA's Sojourner rover on the surface of Mars",
    imageCredit: "NASA / JPL",
    imageSource: "https://www.nasa.gov/image-article/nasas-first-rover-red-planet/",
    summary:
      "NASA's first Mars rover explored the terrain and helped prove a new way to deliver a rover to another planet.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/",
    sourceLabel: "NASA · Mars Pathfinder",
  },
  {
    id: "opportunity",
    name: "Opportunity",
    mission: "Mars Exploration Rover",
    world: "MARS",
    dateLine: "Launched 07 July 2003 · landed 25 January 2004",
    image: opportunityImage.url,
    imageAlt: "Opportunity's panoramic self-portrait on Mars",
    imageCredit: "NASA / JPL-Caltech / Cornell / ASU",
    imageSource: "https://science.nasa.gov/mission/mer-opportunity/",
    summary:
      "A robotic geologist that found evidence of ancient wet conditions and explored Mars for almost 15 years.",
    source: "https://science.nasa.gov/mission/mer-opportunity/",
    sourceLabel: "NASA · Opportunity",
  },
  {
    id: "spirit",
    name: "Spirit",
    mission: "Mars Exploration Rover",
    world: "MARS",
    dateLine: "Launched 10 June 2003 · landed 03 January 2004",
    image: spiritImage.url,
    imageAlt: "The view from Spirit's summit on Husband Hill, Mars",
    imageCredit: "NASA / JPL-Caltech / Cornell",
    imageSource: "https://science.nasa.gov/mission/mer-spirit/",
    summary:
      "Opportunity's twin rover uncovered strong evidence that Mars was once much wetter than it is today.",
    source: "https://science.nasa.gov/mission/mer-spirit/",
    sourceLabel: "NASA · Spirit",
  },
  {
    id: "insight",
    name: "InSight",
    mission: "Interior Exploration using Seismic Investigations, Geodesy and Heat Transport",
    world: "MARS",
    dateLine: "Launched 05 May 2018 · landed 26 November 2018",
    image: insightImage.url,
    imageAlt: "InSight's camera view as it deploys a seismometer on Mars",
    imageCredit: "NASA / JPL-Caltech",
    imageSource: "https://science.nasa.gov/mission/insight/",
    summary:
      "A stationary lander that investigated Mars' deep interior using instruments placed on the surface.",
    source: "https://science.nasa.gov/mission/insight/",
    sourceLabel: "NASA · InSight",
  },
] as const;