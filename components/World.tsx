/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function World(): JSX.Element {
  return (
    <section className="world" id="world">
      <div className="wrap world-grid">
        <div className="rv">
          <div className="world-globe world-art">
            <img
              className="world-image"
              src="https://i.postimg.cc/QtFgCYsb/file-0000000095848211a653e4b55fc404ae.png"
              alt="T3Kit ecosystem visual"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div>
          <h2 className="scatter" data-fx="drift">
            A new way to participate in Web3.
          </h2>
          <p className="lead rv">
            Start with the product that fits you, or build with us.
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
