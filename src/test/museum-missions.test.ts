import { describe, expect, it } from "vitest";

import { museumMissions } from "@/lib/museum-missions";

describe("SPACE LEGACY mission archive", () => {
  it("features five machines in the archive", () => {
    expect(museumMissions).toHaveLength(5);
  });

  it("provides a NASA mission source and image credit for every entry", () => {
    for (const mission of museumMissions) {
      expect(isNasaDomain(new URL(mission.source).hostname)).toBe(true);
      expect(isNasaDomain(new URL(mission.imageSource).hostname)).toBe(true);
      expect(mission.imageCredit.length).toBeGreaterThan(0);
    }
  });
});

function isNasaDomain(hostname: string) {
  return hostname === "nasa.gov" || hostname.endsWith(".nasa.gov");
}