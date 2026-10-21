/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function World(): JSX.Element {
  return (
    <section className="world" id="world">
      <div className="wrap world-grid">
        <div className="rv">
          <div className="world-globe" aria-hidden="true">
            <canvas className="globe" id="globeB"></canvas>
          </div>
        </div>
        <div>
          <h2 className="scatter" data-fx="drift">
            Built from Africa. Pointed at the world.
          </h2>
          <p className="lead rv">
            Africa is where T3Kit builds. The world is who it builds for, wherever people are in their Web3 journey.
          </p>
          <div className="prin">
            <div className="pr rv">
              <svg className="ds" viewBox="0 0 713 689">
                <use href="#spark"></use>
              </svg>
              <div>
                <b>
                  Build focused products
                </b>
                <span>
                  Each solves one meaningful problem.
                </span>
              </div>
            </div>
            <div className="pr rv">
              <svg className="ds" viewBox="0 0 713 689">
                <use href="#spark"></use>
              </svg>
              <div>
                <b>
                  Build independently
                </b>
                <span>
                  Each grows its own users, community and business model.
                </span>
              </div>
            </div>
            <div className="pr rv">
              <svg className="ds" viewBox="0 0 713 689">
                <use href="#spark"></use>
              </svg>
              <div>
                <b>
                  Connect strategically
                </b>
                <span>
                  Products link up only where it creates real value.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
