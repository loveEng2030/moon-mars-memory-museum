import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MissionCard } from "@/components/museum/mission-card";
import { SiteHeader } from "@/components/museum/site-header";
import {
  HistorianPreviewSection,
  MissionTimelineSection,
  ModelBaySection,
  QuizPreviewSection,
  SpaceMapSection,
} from "@/components/museum/homepage-sections";
import lunarRoverHero from "@/assets/nasa-apollo-15-lunar-rover-hero.jpg.asset.json";
import { museumMissions } from "@/lib/museum-missions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPACE LEGACY — Abandoned but Not Forgotten" },
      {
        name: "description",
        content:
          "An independent educational digital museum preserving the stories of NASA exploration equipment left on the Moon and Mars.",
      },
      { property: "og:title", content: "SPACE LEGACY — Abandoned but Not Forgotten" },
      {
        property: "og:description",
        content:
          "Explore the machines humanity left on the Moon and Mars through cited NASA mission records and archival photographs.",
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
      <section className="museum-hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-photograph"
          src={lunarRoverHero.url}
          alt="Apollo 15 astronaut driving the Lunar Roving Vehicle across the Moon"
          fetchPriority="high"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <div className="starfield-layer" aria-hidden="true" />
        <div className="solar-horizon" aria-hidden="true" />
        <SiteHeader />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-rule" /> INDEPENDENT MUSEUM / NOT AFFILIATED WITH NASA
          </p>
          <h1 id="hero-title" className="hero-title">
            <span>EVERY MISSION</span>
            <span>LEAVES A</span>
            <span>LEGACY.</span>
          </h1>
          <p className="hero-description">
            Explore the machines humanity left behind on the Moon and Mars. Discover their missions,
            stories, discoveries, and the legacy they created.
          </p>
          <div className="hero-actions">
            <Button asChild variant="hero" size="lg">
              <a href="#space-map">
                EXPLORE THE MUSEUM <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="#missions">
                DISCOVER THE MISSIONS <ArrowRight aria-hidden="true" />
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
            <span>INDEPENDENT EDUCATIONAL PROJECT</span>
            Apollo 15 Lunar Roving Vehicle · NASA image archive <ArrowUpRight aria-hidden="true" />
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

      <SpaceMapSection />
      <ModelBaySection />
      <MissionTimelineSection />
      <QuizPreviewSection />
      <HistorianPreviewSection />

      <footer className="museum-footer" id="about">
        <div className="content-wrap footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="Space Legacy, return to top">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
            <span className="brand-name"><span>SPACE</span><span>LEGACY</span></span>
          </a>
          <div className="footer-project-credit">
            <strong>Abandoned but Not Forgotten.</strong>
            <p>AN INDEPENDENT EDUCATIONAL PROJECT · NOT AFFILIATED WITH NASA</p>
            <p>NASA / JPL DATA & IMAGE SOURCES · TEAM COSMIC · PROJECT CREDITS</p>
          </div>
          <a className="back-to-top" href="#top">BACK TO THE SURFACE <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
