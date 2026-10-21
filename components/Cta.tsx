/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Cta(): JSX.Element {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="ring-wrap rv" aria-hidden="true">
          <img
            className="cta-image"
            src="https://i.postimg.cc/QtFgCYsb/file-0000000095848211a653e4b55fc404ae.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
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
