/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Cta(): JSX.Element {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="ring-wrap rv" aria-hidden="true">
          <div className="ring-glow" aria-hidden="true"></div>
          <svg className="ring-ticks" id="ringText" viewBox="0 0 200 200" aria-hidden="true">
            <circle className="t2" cx="100" cy="100" r="95"></circle>
            <circle className="t1" cx="100" cy="100" r="75" transform="rotate(-90 100 100)"></circle>
          </svg>
          <svg className="ring-orbit" viewBox="0 0 200 200" aria-hidden="true">
            <circle className="path" cx="100" cy="100" r="62"></circle>
            <circle className="n h" cx="100" cy="38" r="7.5"></circle>
            <circle className="n" cx="100" cy="38" r="3.6"></circle>
            <circle className="n h" cx="153.7" cy="131" r="7.5"></circle>
            <circle className="n" cx="153.7" cy="131" r="3.6"></circle>
            <circle className="n sun h" cx="46.3" cy="131" r="7.5"></circle>
            <circle className="n sun" cx="46.3" cy="131" r="3.6"></circle>
          </svg>
          <div className="ring-disc" aria-hidden="true"></div>
          <div className="core" id="core">
            <svg viewBox="0 0 961 820" aria-hidden="true">
              <use href="#mark"></use>
            </svg>
          </div>
        </div>
        <h2 className="scatter" data-fx="type">
          A new way to participate in Web3.
        </h2>
        <p className="rv">
          Start with the product that fits you, or build with us.
        </p>
        <div className="hero-cta rv" id="ctaRow">
          <a className="btn btn-primary" data-url="kitlab">
            Open KitLab
          </a>
          <a className="btn btn-ghost" data-url="kitarcade">
            Open KitArcade
          </a>
          <a className="btn btn-ghost" data-url="kitsetups">
            Open KitSetups
          </a>
          <a className="btn btn-primary" href="#products" id="ctaFallback" hidden={true}>
            Explore the products
          </a>
        </div>
      </div>
    </section>
  );
}
