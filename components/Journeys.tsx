/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Journeys(): JSX.Element {
  return (
    <section className="band" id="journeys">
      <div className="wrap">
        <h2 className="scatter" data-fx="door">
          Everyone enters through a different door.
        </h2>
        <p className="lead rv">
          Start where you are.
        </p>
        <div className="doors">
          <div className="door-list" role="tablist" aria-label="Choose your entry point">
            <button className="door rv" role="tab" aria-selected="true" data-i="0">
              <b>
                I'm new to Web3
              </b>
              <span>
                Understand it from the ground up
              </span>
            </button>
            <button className="door rv" role="tab" aria-selected="false" data-i="1">
              <b>
                I want to build
              </b>
              <span>
                Develop skills and ship projects
              </span>
            </button>
            <button className="door rv" role="tab" aria-selected="false" data-i="2">
              <b>
                I'm here to play
              </b>
              <span>
                Games, challenges and leaderboards
              </span>
            </button>
            <button className="door rv" role="tab" aria-selected="false" data-i="3">
              <b>
                I trade crypto
              </b>
              <span>
                Setups, analysis and AI-assisted tools
              </span>
            </button>
          </div>
          <div className="door-panel rv" id="doorPanel" role="tabpanel" aria-live="polite">
            <div>
              <h3 id="dp-title">
                KitLab
              </h3>
              <p id="dp-text">
                New to Web3? KitLab teaches it from the ground up, with structured paths and hands-on practice.
              </p>
            </div>
            <a href="#kitlab" className="btn btn-primary" id="dp-link">
              See KitLab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
