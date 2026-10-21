import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="T3Kit home">
              <svg viewBox="0 0 961 820" aria-hidden="true">
                <use href="#mark" />
              </svg>
              <span>T3Kit</span>
            </a>
            <p className="footer-tagline">Web3, for everyone, everywhere.</p>
            <p className="footer-description">
              One connected ecosystem helping people learn, play, build, and participate in the digital economy.
            </p>
            <div className="footer-pill"><span aria-hidden="true" /> Building from Africa. Built for everyone.</div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#kitlab">KitLab</a></li>
                <li><a href="#kitarcade">KitArcade</a></li>
                <li><a href="#kitsetups">KitSetups</a></li>
              </ul>
            </div>
            <div className="footer-col footer-company">
              <h4>The ecosystem</h4>
              <ul>
                <li><a href="#mission">Our mission</a></li>
                <li><a href="#world">Global vision</a></li>
                <li><a href="#infrastructure">Infrastructure</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#kit">$KIT token</a></li>
                <li><a href="#team">The team</a></li>
              </ul>
            </div>
            <div className="footer-col" id="communityCol">
              <h4>Stay connected</h4>
              <ul>
                <li data-social="x"><a>X <span aria-hidden="true">↗</span></a></li>
                <li data-social="telegram"><a>Telegram <span aria-hidden="true">↗</span></a></li>
                <li data-social="discord"><a>Discord <span aria-hidden="true">↗</span></a></li>
                <li data-social="docs"><a>Documentation <span aria-hidden="true">↗</span></a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-disclaimer">
          <span className="footer-disclaimer-label">A quick note</span>
          <p>KitSetups surfaces market information and potential opportunities. Users are responsible for evaluating them and making their own trading decisions. Nothing on this site is financial advice.</p>
        </div>

        <div className="footer-bottom">
          <span>© <span id="yr">2026</span> T3Kit. All rights reserved.</span>
          <span className="footer-bottom-note">Learn <i /> Play <i /> Build <i /> Trade</span>
          <a href="#top" className="footer-back-top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
