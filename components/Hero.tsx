/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <header className="hero">
      <div className="hero-stage" aria-hidden="true">
        <canvas id="heroFx"></canvas>
        <video id="heroVideo" muted={true} loop={true} playsInline preload="auto" hidden={true}></video>
      </div>
      <div className="wrap">
        <div className="hero-copy">
          <h1 id="h1" className="scatter kin">
            <span className="l1">
              Web3, for everyone,
            </span>
            <span className="l2">
              everywhere.
            </span>
          </h1>
          <p className="lead rv">
            T3Kit is a multilayer Web3 ecosystem building the products, infrastructure, and community that bring the next generation into Web3, wherever they start.
          </p>
          <div className="hero-cta rv">
            <a href="#products" className="btn btn-primary">
              Explore the ecosystem
            </a>
            <a href="#partners" className="btn btn-ghost">
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
