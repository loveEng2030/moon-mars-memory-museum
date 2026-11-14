import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Orbit, RadioTower } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MissionCard } from "@/components/museum/mission-card";
import { SiteHeader } from "@/components/museum/site-header";
import lunarRoverHero from "@/assets/nasa-apollo-15-lunar-rover-hero.jpg.asset.json";
import { museumMissions } from "@/lib/museum-missions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPACE LEGACY — The machines we left behind" },
      {
        name: "description",
        content:
          "An interactive digital museum of the machines that explored the Moon and Mars. Discover NASA mission histories, archival photographs, and the work these explorers left behind.",
      },
      { property: "og:title", content: "SPACE LEGACY — The machines we left behind" },
      {
        property: "og:description",
        content:
          "Explore the legacy of human exploration across the Moon and Mars through NASA mission histories and archival photographs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="museum-hero" aria-labelledby="hero-title">
        <img
          className="hero-photograph"
          src={lunarRoverHero.url}
          alt="Apollo 15 astronaut driving the Lunar Roving Vehicle across the Moon"
          fetchPriority="high"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <SiteHeader />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-rule" /> A digital museum of planetary exploration
          </p>
          <h1 id="hero-title" className="hero-title">
            <span>THE MACHINES</span>
            <span>WE LEFT</span>
            <span>BEHIND.</span>
          </h1>
          <p className="hero-description">
            Explore the legacy of human exploration across the Moon and Mars. Discover the machines
            that went farther than we could, and the stories they left behind.
          </p>
          <div className="hero-actions">
            <Button asChild variant="hero" size="lg">
              <a href="#moon">
                Explore the Moon <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="#mars">
                Explore Mars <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="hero-bottomline">
          <a
            className="hero-image-credit"
            href="https://www.nasa.gov/image-article/taking-ride-moon-lunar-roving-vehicle/"
            target="_blank"
            rel="noreferrer"
          >
            <span>01 / THE MOON</span>
            NASA · Apollo 15 · Lunar Roving Vehicle <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="scroll-cue" href="#missions">
            ENTER THE ARCHIVE <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="archive-intro content-wrap" id="missions" aria-labelledby="missions-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-rule" /> THE MISSION ARCHIVE</p>
            <h2 id="missions-title">A record of arrival.</h2>
          </div>
          <p className="section-intro-copy">
            Each machine was built for a different world and a different question. Start with the
            missions documented here.
          </p>
        </div>

        <div className="mission-grid">
          {museumMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <div className="content-wrap why-layout">
          <div className="why-title-block">
            <p className="eyebrow"><span className="eyebrow-rule" /> PURPOSE / PLACE / LEGACY</p>
            <h2 id="why-title">They went to answer questions we couldn’t ask from Earth.</h2>
          </div>
          <div className="why-copy-block">
            <p>
              Apollo’s lunar rover extended the distance astronauts could travel from their landing
              site. On Mars, robotic geologists sought signs of ancient water; later, InSight listened
              for clues about the planet’s deep interior.
            </p>
            <p>
              These machines were built to work where they landed, not to make the journey home. Their
              tracks, images and measurements remain part of the record—evidence of what careful
              exploration can reveal.
            </p>
            <div className="fact-links">
              <a href="https://www.nasa.gov/missions/apollo/apollo-15-mission-details/" target="_blank" rel="noreferrer">
                Apollo 15 mission details <ArrowUpRight aria-hidden="true" />
              </a>
              <a href="https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/" target="_blank" rel="noreferrer">
                Mars Exploration Rovers <ArrowUpRight aria-hidden="true" />
              </a>
              <a href="https://science.nasa.gov/mission/insight/" target="_blank" rel="noreferrer">
                InSight mission <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="worlds-section content-wrap" aria-labelledby="worlds-title">
        <div className="section-heading worlds-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-rule" /> TWO WORLDS / ONE ARCHIVE</p>
            <h2 id="worlds-title">Choose a world.</h2>
          </div>
          <p className="section-intro-copy">Follow the surface record, one machine at a time.</p>
        </div>

        <div className="world-links">
          <a className="world-link world-moon" href="#moon">
            <span className="world-index">01 / LUNAR SURFACE</span>
            <span className="world-name">The Moon</span>
            <span className="world-footnote">One Apollo rover · first drive 1971</span>
            <span className="world-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
          <a className="world-link world-mars" href="#mars">
            <span className="world-index">02 / MARTIAN SURFACE</span>
            <span className="world-name">Mars</span>
            <span className="world-footnote">Four landers and rovers · 1997–2018</span>
            <span className="world-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
        </div>
      </section>

      <section className="explorer-section" id="explorer" aria-labelledby="explorer-title">
        <div className="content-wrap explorer-layout">
          <div className="explorer-emblem" aria-hidden="true"><Orbit /></div>
          <div className="explorer-copy">
            <p className="eyebrow"><span className="eyebrow-rule" /> THE COLLECTION / IN PROGRESS</p>
            <h2 id="explorer-title">A closer look is coming.</h2>
            <p>
              A 3D collection, interactive surface maps, and a machine-by-machine archive are planned
              for a later edition. This space will open when verified models and source material are
              ready.
            </p>
          </div>
          <div className="explorer-status">
            <RadioTower aria-hidden="true" />
            <span>3D MODEL VIEWER</span>
            <span>NOT YET AVAILABLE</span>
          </div>
        </div>
      </section>

      <footer className="museum-footer" id="about">
        <div className="content-wrap footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="Space Legacy, return to top">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
            <span className="brand-name"><span>SPACE</span><span>LEGACY</span></span>
          </a>
          <p>HISTORICAL PHOTOGRAPHS & MISSION SOURCES · NASA / JPL</p>
          <a className="back-to-top" href="#top">BACK TO THE SURFACE <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
