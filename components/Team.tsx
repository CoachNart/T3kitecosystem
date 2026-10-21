"use client";

import { useEffect, useRef } from "react";
import type { JSX } from "react";

export default function Team(): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = carouselRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const firstCard = track.querySelector<HTMLElement>(".tm");
      if (!firstCard) return;
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0") || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: "smooth" });
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section className="team" id="team">
      <div className="wrap">
        <h2 className="scatter" data-fx="wave">
          The people building T3Kit.
        </h2>
        <p className="lead rv">
          Product, engineering, design, community and partnerships, working from Africa for a global audience.
        </p>
        <div className="tm-grid" ref={carouselRef}>
          <article className="tm rv">
            <div className="tm-ph" data-photo="nathan" data-name="Nathan Timothy">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                NT
              </b>
            </div>
            <h3>
              Nathan Timothy
            </h3>
            <p>
              Founder & CEO
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="caleb" data-name="Caleb Effiom">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                CE
              </b>
            </div>
            <h3>
              Caleb Effiom
            </h3>
            <p>
              Chief Technology Officer
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="shaibu" data-name="Shaibu Omoh">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                SO
              </b>
            </div>
            <h3>
              Shaibu Omoh
            </h3>
            <p>
              Chief Operating Officer
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="prince" data-name="Prince Oluebube">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                PO
              </b>
            </div>
            <h3>
              Prince Oluebube
            </h3>
            <p>
              Head of Design
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="amuda" data-name="Amuda Akorede">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                AA
              </b>
            </div>
            <h3>
              Amuda Akorede
            </h3>
            <p>
              Head of Community
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="kolawole" data-name="Kolawole David">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                KD
              </b>
            </div>
            <h3>
              Kolawole David
            </h3>
            <p>
              Community Lead
            </p>
          </article>
          <article className="tm rv">
            <div className="tm-ph" data-photo="royhan" data-name="Royhan Ajisegiri">
              <svg viewBox="265 21 713 689" aria-hidden="true">
                <use href="#spark"></use>
              </svg>
              <b aria-hidden="true">
                RA
              </b>
            </div>
            <h3>
              Royhan Ajisegiri
            </h3>
            <p>
              Head of Partnerships
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
