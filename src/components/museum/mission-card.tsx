import { ArrowUpRight } from "lucide-react";

import type { museumMissions } from "@/lib/museum-missions";

type MuseumMission = (typeof museumMissions)[number];

export function MissionCard({ mission }: { mission: MuseumMission }) {
  const sectionId = mission.id === "lunar-roving-vehicle" ? "moon" : mission.id === "sojourner" ? "mars" : mission.id;

  return (
    <article className="mission-card" id={sectionId}>
      <a className="mission-image-link" href={mission.imageSource} target="_blank" rel="noreferrer">
        <img className="mission-image" src={mission.image} alt={mission.imageAlt} loading="lazy" />
        <span className="mission-image-arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </a>
      <div className="mission-card-meta">
        <span>{mission.world} / {mission.mission === "Apollo 15" ? "LUNAR SURFACE" : "SURFACE ARCHIVE"}</span>
        <span className="mission-photo-credit">{mission.imageCredit}</span>
      </div>
      <h3>{mission.name}</h3>
      <p className="mission-date">{mission.dateLine}</p>
      <p className="mission-summary">{mission.summary}</p>
      <a className="mission-source" href={mission.source} target="_blank" rel="noreferrer">
        {mission.sourceLabel} <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}