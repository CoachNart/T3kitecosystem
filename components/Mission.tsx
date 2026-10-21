/* Generated from the supplied source markup; preserve structure and styling. */
import type { JSX } from "react";

export default function Mission(): JSX.Element {
  return (
    <section className="mission" id="mission">
      <div className="wrap">
        <h2 className="scatter" data-fx="rise">
          One place to start with everything in Web3.
        </h2>
        <p className="lead rv">
          Learning, building, playing and trading usually happen on separate platforms, in separate communities. T3Kit brings them together, so a newcomer can start with any one and find the way to the rest.
        </p>
        <div className="ftwrap rv" aria-hidden="true">
          <svg id="ftSvg" viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialgradient id="ftGlow">
                <stop offset="0" stopColor="#00C6FF" stopOpacity=".55"></stop>
                <stop offset="1" stopColor="#00C6FF" stopOpacity="0"></stop>
              </radialgradient>
              <lineargradient id="ftTrail" x1="0" x2="1">
                <stop offset="0" stopColor="#00C6FF" stopOpacity=".05"></stop>
                <stop offset="1" stopColor="#00C6FF" stopOpacity=".5"></stop>
              </lineargradient>
            </defs>
            <g className="ft-grid" id="ftGrid"></g>
            <path id="ftPath" className="ft-trail" d="M30,350 C200,355 250,245 410,255 C560,265 600,345 730,235 C810,165 860,105 935,88"></path>
            <g id="ftGhost"></g>
            <g id="ftMiles"></g>
            <g id="ftPrints"></g>
            <circle id="ftHead" className="ft-head" r="5"></circle>
            <g id="ftBeing" className="ft-being">
              <ellipse className="ft-shadow" cx="0" cy="1" rx="13" ry="3.2"></ellipse>
              <line id="bLegL" className="ft-limb" x1="-4" y1="-11" x2="-4" y2="0"></line>
              <line id="bLegR" className="ft-limb" x1="4" y1="-11" x2="4" y2="0"></line>
              <line id="bArmB" className="ft-limb arm" x1="-8" y1="-26" x2="-13" y2="-17"></line>
              <g id="bBody">
                <line className="ft-ant" x1="0" y1="-37" x2="0" y2="-47"></line>
                <circle id="bBulb" className="ft-bulb" cx="0" cy="-49" r="3.4"></circle>
                <rect className="ft-torso" x="-10" y="-38" width="20" height="28" rx="10"></rect>
                <rect className="ft-visor" x="-7" y="-34" width="14" height="10" rx="5"></rect>
                <circle id="bEyeL" className="ft-eye" cx="-2.6" cy="-29" r="1.5"></circle>
                <circle id="bEyeR" className="ft-eye" cx="2.6" cy="-29" r="1.5"></circle>
                <circle className="ft-core" cx="0" cy="-17" r="2.6"></circle>
              </g>
              <line id="bArmF" className="ft-limb arm" x1="8" y1="-26" x2="13" y2="-17"></line>
            </g>
            <g className="ft-dest" transform="translate(935 88)">
              <circle className="ft-halo" r="90"></circle>
              <circle className="ft-orb o1" r="34"></circle>
              <circle className="ft-orb o2" r="56"></circle>
              <g className="ft-rays" id="ftRays"></g>
              <g className="ft-star">
                <use href="#spark" x="-24" y="-24" width="48" height="46"></use>
              </g>
            </g>
          </svg>
        </div>
        <div className="pillars">
          <div className="pillar rv">
            <b>
              Enter.
            </b>
            <p>
              <strong>
                Easier to enter
              </strong>
              Many doors instead of one path.
            </p>
          </div>
          <div className="pillar rv">
            <b>
              Understand.
            </b>
            <p>
              <strong>
                Easier to understand
              </strong>
              Learning that goes from lessons to real projects.
            </p>
          </div>
          <div className="pillar rv">
            <b>
              Participate.
            </b>
            <p>
              <strong>
                More meaningful to participate in
              </strong>
              Games, tools, rewards and community worth staying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
