import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-topline" aria-hidden="true"><span /></div>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="T3Kit home">
              <svg viewBox="0 0 961 820" aria-hidden="true"><use href="#mark" /></svg>
              <span>T3Kit<span className="footer-brand-dot">.</span></span>
            </a>
            <p className="footer-tagline">Web3, for everyone, everywhere.</p>
            <a className="footer-contact-link" href="#alliances">Build with T3Kit <span aria-hidden="true">↗</span></a>
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
            <div className="footer-col">
              <h4>Ecosystem</h4>
              <ul>
                <li><a href="#mission">Our mission</a></li>
                <li><a href="#world">Our vision</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#alliances">Partners</a></li>
                <li><a href="#kit">$KIT token</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-disclaimer">
          <span className="footer-disclaimer-label">Important</span>
          <p>KitSetups provides market information and potential trading opportunities for research purposes only. Nothing on this website is financial advice. Always do your own research and make independent decisions.</p>
        </div>

        <div className="footer-bottom">
          <span>© <span id="yr">2026</span> T3Kit. All rights reserved.</span>
          <a href="#top" className="footer-back-top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
