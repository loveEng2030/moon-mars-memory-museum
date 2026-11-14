import { useState } from "react";
import { ArrowRight, ArrowUpRight, Bot, CircleHelp, Orbit, RadioTower } from "lucide-react";

import { Button } from "@/components/ui/button";
import { museumMissions } from "@/lib/museum-missions";

const moonMachines = [museumMissions[0]];
const marsMachines = museumMissions.filter((mission) => mission.world === "MARS");

const milestones = [
  {
    date: "31 JUL 1971",
    name: "Lunar Roving Vehicle",
    detail: "Apollo 15's rover makes its first lunar drive.",
    href: "https://www.nasa.gov/image-article/apollo-15-lunar-roving-vehicle/",
    source: "NASA · Apollo 15",
  },
  {
    date: "04 DEC 1996",
    name: "Mars Pathfinder",
    detail: "Pathfinder launches with Sojourner aboard.",
    href: "https://science.nasa.gov/mission/mars-pathfinder/",
    source: "NASA · Mars Pathfinder",
  },
  {
    date: "04 JUL 1997",
    name: "Pathfinder lands on Mars",
    detail: "The lander reaches Ares Vallis with the Sojourner rover aboard.",
    href: "https://science.nasa.gov/mission/mars-pathfinder/",
    source: "NASA · Mars Pathfinder",
  },
  {
    date: "06 JUL 1997",
    name: "Sojourner reaches the surface",
    detail: "The rover rolls down from the Pathfinder lander onto Martian soil.",
    href: "https://nssdc.gsfc.nasa.gov/planetary/mesur.html",
    source: "NASA · Pathfinder project records",
  },
  {
    date: "03 JAN 2004",
    name: "Spirit lands on Mars",
    detail: "Spirit reaches Gusev Crater.",
    href: "https://science.nasa.gov/mission/mer-spirit/",
    source: "NASA · Spirit",
  },
  {
    date: "24 JAN 2004",
    name: "Opportunity lands",
    detail: "Opportunity reaches Meridiani Planum.",
    href: "https://science.nasa.gov/mission/mer-opportunity/",
    source: "NASA · Opportunity",
  },
  {
    date: "25 MAY 2011",
    name: "NASA ends contact attempts with Spirit",
    detail: "The Spirit mission is declared complete after contact is lost.",
    href: "https://science.nasa.gov/mission/mer-spirit/",
    source: "NASA · Spirit",
  },
  {
    date: "10 JUN 2018",
    name: "Opportunity sends its final communication",
    detail: "The last signal arrives during a planet-wide dust storm.",
    href: "https://science.nasa.gov/mission/mer-opportunity/",
    source: "NASA · Opportunity",
  },
  {
    date: "26 NOV 2018",
    name: "InSight arrives",
    detail: "The stationary lander touches down at Elysium Planitia.",
    href: "https://science.nasa.gov/mission/insight/",
    source: "NASA · InSight",
  },
] as const;

export function SpaceMapSection() {
  const [world, setWorld] = useState<"MOON" | "MARS">("MOON");
  const missions = world === "MOON" ? moonMachines : marsMachines;

  return (
    <section className="map-section content-wrap" id="space-map" aria-labelledby="map-title">
      <div className="section-heading map-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-rule" /> SURFACE INDEX / SELECT A WORLD</p>
          <h2 id="map-title">Space map.</h2>
        </div>
        <p className="section-intro-copy">
          Explore the mission archive by world. Landing-site map layers are being prepared from
          verified mission records.
        </p>
      </div>
      <div className="map-console">
        <div className="map-world-tabs" role="group" aria-label="Choose a world">
          {(["MOON", "MARS"] as const).map((option) => (
            <Button
              key={option}
              type="button"
              variant={world === option ? "default" : "ghost"}
              aria-pressed={world === option}
              onClick={() => setWorld(option)}
            >
              <span className={`map-tab-indicator map-tab-${option.toLowerCase()}`} aria-hidden="true" />
              {option}
            </Button>
          ))}
        </div>
        <div className={`map-world-view map-view-${world.toLowerCase()}`} aria-live="polite">
          <div className={`planet-disc planet-${world.toLowerCase()}`} aria-hidden="true" />
          <div className="map-world-caption">
            <span className="eyebrow">{world === "MOON" ? "LUNAR SURFACE" : "MARTIAN SURFACE"}</span>
            <h3>{world === "MOON" ? "The Moon" : "Mars"}</h3>
            <p>{world === "MOON" ? "One lunar rover in this archive." : "Four Mars machines in this archive."}</p>
          </div>
          <div className="map-mission-list">
            {missions.map((mission) => (
              <a
                className="map-mission-row"
                href={`#${mission.id}`}
                key={mission.id}
                aria-label={`View ${mission.name} in featured missions`}
              >
                <span className="map-mission-location">{mission.mapLabel}</span>
                <span className="map-mission-name">{mission.name}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p className="map-disclaimer">
          Mission markers and coordinates are not shown until verified map data is available.
        </p>
      </div>
    </section>
  );
}

export function ModelBaySection() {
  return (
    <section className="model-section" id="explorer" aria-labelledby="model-title">
      <div className="content-wrap model-layout">
        <div className="model-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> THE COLLECTION / IN PROGRESS</p>
          <h2 id="model-title">Meet the machines up close.</h2>
          <p>
            Authentic, source-attributed GLB and GLTF models will be added here when available.
            Interactive rotation and zoom are planned for a future edition.
          </p>
          <span className="model-status"><Orbit aria-hidden="true" /> 3D COLLECTION · IN PREPARATION</span>
        </div>
        <div className="model-stage" aria-label="3D explorer not yet available">
          <div className="model-grid" aria-hidden="true" />
          <div className="model-stage-frame" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="model-stage-caption">
            <span>MODEL BAY 01</span>
            <span>NO VERIFIED MODEL LOADED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionTimelineSection() {
  return (
    <section className="timeline-section content-wrap" id="timeline" aria-labelledby="timeline-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-rule" /> A CHRONOLOGY OF ARRIVAL</p>
          <h2 id="timeline-title">A history measured in landings.</h2>
        </div>
        <p className="section-intro-copy">Milestones checked against NASA mission records.</p>
      </div>
      <ol className="mission-timeline">
        {milestones.map((milestone, index) => (
          <li className="timeline-entry" key={`${milestone.date}-${milestone.name}`}>
            <span className="timeline-sequence">{String(index + 1).padStart(2, "0")}</span>
            <span className="timeline-node" aria-hidden="true" />
            <div className="timeline-date">{milestone.date}</div>
            <div className="timeline-content">
              <h3>{milestone.name}</h3>
              <p>{milestone.detail}</p>
              <a href={milestone.href} target="_blank" rel="noreferrer">
                {milestone.source} <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function QuizPreviewSection() {
  return (
    <section className="quiz-section" id="space-quiz" aria-labelledby="quiz-title">
      <div className="content-wrap preview-layout">
        <div className="preview-icon"><CircleHelp aria-hidden="true" /></div>
        <div className="preview-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> LEARNING LAB / IN PREPARATION</p>
          <h2 id="quiz-title">Space quiz.</h2>
            <p>A student quiz will be built from verified mission records. It is not available yet.</p>
        </div>
        <span className="preview-status">COMING IN A FUTURE EDITION</span>
      </div>
    </section>
  );
}

export function HistorianPreviewSection() {
  return (
    <section className="historian-section content-wrap" id="ai-historian" aria-labelledby="historian-title">
      <div className="historian-console">
        <div className="historian-topline">
          <span><Bot aria-hidden="true" /> THE ARCHIVE DESK</span>
          <span>OFFLINE / NO AI SERVICE CONNECTED</span>
        </div>
        <div className="historian-body">
          <p className="eyebrow"><span className="eyebrow-rule" /> FUTURE RESEARCH TOOL</p>
          <h2 id="historian-title">AI Space Historian</h2>
          <p>
            A research assistant grounded in cited mission documents is planned. No AI historian is
            connected to this museum yet.
          </p>
          <Button type="button" variant="outline" disabled>
            Not available yet <ArrowRight aria-hidden="true" />
          </Button>
        </div>
        <div className="historian-footer">SPACE LEGACY · AN INDEPENDENT EDUCATIONAL PROJECT</div>
      </div>
    </section>
  );
}