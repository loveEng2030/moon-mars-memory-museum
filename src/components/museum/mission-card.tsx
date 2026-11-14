import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { museumMissions } from "@/lib/museum-missions";

type MuseumMission = (typeof museumMissions)[number];

export function MissionCard({ mission }: { mission: MuseumMission }) {
  return (
    <article className="mission-card" id={mission.id}>
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
      <div className="mission-card-actions">
        <Button asChild variant="outline" size="sm" className="mission-cta">
          <a href={mission.source} target="_blank" rel="noreferrer">
            Explore mission <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <a className="mission-source" href={mission.imageSource} target="_blank" rel="noreferrer">
          {mission.imageCredit} <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}