import apolloImage from "@/assets/nasa-apollo-15-roving-vehicle.jpg.asset.json";
import insightImage from "@/assets/nasa-insight-self-portrait.jpg.asset.json";
import sojournerImage from "@/assets/nasa-mars-pathfinder-sojourner.jpg.asset.json";
import opportunityImage from "@/assets/nasa-opportunity-self-portrait.jpg.asset.json";
import spiritImage from "@/assets/nasa-spirit-self-portrait.jpg.asset.json";

export const museumMissions = [
  {
    id: "lunar-roving-vehicle",
    name: "Lunar Roving Vehicle",
    mission: "Apollo 15",
    mapLabel: "Apollo 15",
    world: "MOON",
    dateLine: "Apollo 15 · launch 26 Jul 1971 · rover debut 31 Jul",
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
    mapLabel: "Pathfinder",
    world: "MARS",
    dateLine: "Pathfinder · launch 04 Dec 1996 · Mars landing 04 Jul 1997",
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
    name: "Opportunity (Oppy)",
    mission: "Mars Exploration Rover",
    mapLabel: "MER-B",
    world: "MARS",
    dateLine: "MER-B · launch 07 Jul 2003 · Mars landing 24 Jan 2004",
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
    mapLabel: "MER-A",
    world: "MARS",
    dateLine: "MER-A · launch 10 Jun 2003 · Mars landing 03 Jan 2004",
    image: spiritImage.url,
    imageAlt: "NASA Mars Exploration Rover Spirit's self-portrait",
    imageCredit: "NASA / JPL-Caltech / Cornell",
    imageSource: "https://www.nasa.gov/image-article/spirits-self-portrait/",
    summary:
      "Opportunity's twin rover uncovered strong evidence that Mars was once much wetter than it is today.",
    source: "https://science.nasa.gov/mission/mer-spirit/",
    sourceLabel: "NASA · Spirit",
  },
  {
    id: "insight",
    name: "InSight",
    mission: "Interior Exploration using Seismic Investigations, Geodesy and Heat Transport",
    mapLabel: "InSight",
    world: "MARS",
    dateLine: "Launch 05 May 2018 · Mars landing 26 Nov 2018",
    image: insightImage.url,
    imageAlt: "NASA InSight's first self-portrait, showing its deck and solar panels on Mars",
    imageCredit: "NASA / JPL-Caltech",
    imageSource: "https://science.nasa.gov/resource/insights-first-selfie/",
    summary:
      "A stationary lander that investigated Mars' deep interior using instruments placed on the surface.",
    source: "https://science.nasa.gov/mission/insight/",
    sourceLabel: "NASA · InSight",
  },
] as const;