import { describe, expect, it } from "vitest";

import { museumMissions } from "@/lib/museum-missions";

describe("SPACE LEGACY mission archive", () => {
  it("features five machines in the archive", () => {
    expect(museumMissions).toHaveLength(5);
    expect(museumMissions.map((mission) => mission.name)).toEqual([
      "Lunar Roving Vehicle",
      "Sojourner",
      "Opportunity (Oppy)",
      "Spirit",
      "InSight",
    ]);
  });

  it("uses verified dates for the Sojourner mission", () => {
    expect(museumMissions[1]?.dateLine).toBe("Pathfinder · launch 04 Dec 1996 · Mars landing 04 Jul 1997");
  });

  it("uses verified dates for the Spirit and Opportunity missions", () => {
    expect(museumMissions[2]?.dateLine).toBe("MER-B · launch 07 Jul 2003 · Mars landing 24 Jan 2004");
    expect(museumMissions[3]?.dateLine).toBe("MER-A · launch 10 Jun 2003 · Mars landing 03 Jan 2004");
  });

  it("uses verified dates for the InSight mission", () => {
    expect(museumMissions[4]?.dateLine).toBe("Launch 05 May 2018 · Mars landing 26 Nov 2018");
  });

  it("provides a NASA mission source and image credit for every entry", () => {
    for (const mission of museumMissions) {
      expect(isNasaDomain(new URL(mission.source).hostname)).toBe(true);
      expect(isNasaDomain(new URL(mission.imageSource).hostname)).toBe(true);
      expect(mission.imageCredit.length).toBeGreaterThan(0);
    }
  });

  it("provides concise map labels for every archived machine", () => {
    expect(museumMissions.map((mission) => mission.mapLabel)).toEqual([
      "Apollo 15",
      "Pathfinder",
      "MER-B",
      "MER-A",
      "InSight",
    ]);
  });
});

function isNasaDomain(hostname: string) {
  return hostname === "nasa.gov" || hostname.endsWith(".nasa.gov");
}