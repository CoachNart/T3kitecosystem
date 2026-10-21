/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Products(): JSX.Element {
  return (
    <section id="products" style={{paddingTop: "20px"}}>
      <div className="wrap">
        <div className="prod-head">
          <h2 className="scatter" data-fx="flip">
            Multiple products. Multiple ways in.
          </h2>
          <p className="lead rv">
            Each is built for a different part of the Web3 journey. Use one or all, and expect more to come.
          </p>
        </div>
        <div className="feature" id="kitlab">
          <div className="f-text rv">
            <span className="f-tag">
              KitLab
            </span>
            <h2 className="scatter" data-fx="drop">
              Learn it. Then build it.
            </h2>
            <p>
              A learning and experimentation environment for newcomers and existing Web3 participants. Tasks, experiments and projects, not just courses.
            </p>
            <ul className="ticks">
              <li>
                Web3 fundamentals
              </li>
              <li>
                Developer pathways across chains and tech stacks
              </li>
              <li>
                Trading, content and community skills
              </li>
              <li>
                Project-based learning, from concept to launch
              </li>
            </ul>
            <a className="btn btn-primary" data-url="kitlab">
              Open KitLab
            </a>
          </div>
          <div className="visual rv">
            <div className="card tilt" aria-label="KitLab preview">
              <div className="card-head">
                <span>
                  Developer pathway
                </span>
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="path">
                <div className="step done">
                  <span className="ic">
                    ✓
                  </span>
                  <div>
                    <b>
                      Web3 fundamentals
                    </b>
                    <small>
                      Wallets, chains and how it all fits
                    </small>
                  </div>
                </div>
                <div className="step now">
                  <span className="ic">
                    2
                  </span>
                  <div style={{flex: "1"}}>
                    <b>
                      Build your first contract
                    </b>
                    <small>
                      Hands-on task in progress
                    </small>
                    <div className="pb">
                      <i id="labBar"></i>
                    </div>
                  </div>
                </div>
                <div className="step">
                  <span className="ic">
                    3
                  </span>
                  <div>
                    <b>
                      Ship a project
                    </b>
                    <small>
                      Take it into the wider ecosystem
                    </small>
                  </div>
                </div>
              </div>
              <div className="code" id="typed" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        <div className="feature flip" id="kitarcade">
          <div className="f-text rv">
            <span className="f-tag">
              KitArcade
            </span>
            <h2 className="scatter" data-fx="pop">
              Play, explore, compete.
            </h2>
            <p>
              A gaming and interactive layer that goes beyond traditional Web3 gaming models.
            </p>
            <ul className="ticks">
              <li>
                Browser-based games and experiences
              </li>
              <li>
                Community challenges and leaderboards
              </li>
              <li>
                Distribution for creators and developers
              </li>
              <li>
                Web3-native experiments
              </li>
            </ul>
            <a className="btn btn-primary" data-url="kitarcade">
              Open KitArcade
            </a>
          </div>
          <div className="visual rv">
            <div className="card tilt arc" aria-label="KitArcade preview">
              <div className="arc-bar">
                <svg className="arc-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                <div className="arc-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg><span>Search games and categories</span></div>
                <svg className="arc-ic arc-user" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="3.6" /><path d="M5 20c.6-3.6 3.6-5.4 7-5.4s6.4 1.8 7 5.4z" /></svg>
              </div>
              <div className="arc-body">
                <h3 className="arc-title">All Games</h3>
                <div className="arc-grid">
                  <div className="ag"><img src="/hexanaut-preview.jpg" alt="Hexanaut.io" loading="lazy" width="336" height="189" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature" id="kitsetups">
          <div className="f-text rv">
            <span className="f-tag">
              KitSetups
            </span>
            <h2 className="scatter" data-fx="tick">
              AI-native infrastructure for crypto trading.
            </h2>
            <p>
              Understand markets, spot potential setups and analyze conditions. It supports your decisions. It doesn't make them.
            </p>
            <ul className="ticks">
              <li>
                Setups, market analysis and market structure
              </li>
              <li>
                Technical and AI-assisted analysis
              </li>
              <li>
                Trading tools, CEX trading and education
              </li>
              <li>
                Premium trading features
              </li>
            </ul>
            <a className="btn btn-primary" data-url="kitsetups">
              Open KitSetups
            </a>
          </div>
          <div className="visual rv">
            <img
              src="https://i.postimg.cc/MGHSNzZv/Screenshot-20261021-190546.jpg"
              alt="KitSetups preview"
              loading="lazy"
              style={{ display: "block", position: "relative", zIndex: 1, width: "100%", height: "auto", borderRadius: "16px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
