import type { Metadata } from "next";
import Link from "next/link";
import { HomeHeroVideo } from "./components/HomeHeroVideo";
import { HomeOptin } from "./components/HomeOptin";
import { Footer, Header } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Capacidad, margen y libertad de decisión",
  description:
    "Una estrategia para construir más capacidad, recuperar margen y dejar de depender de una única opción.",
};

export default function Home() {
  return (
    <main className="home-page">
      <Header active="home" overlay />

      <section className="home-hero">
        <HomeHeroVideo />
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="shell home-hero-content">
          <span className="eyebrow">Dos puntos de entrada · Una misma dirección</span>
          <h1>Una vida con opciones se construye <em>antes de necesitarlas.</em></h1>
          <p>
            Tanto si hoy necesitas construir ingresos y dirección como si ya tienes una vida estable que no puedes permitirte perder, el objetivo es el mismo: aumentar tu capacidad real de decidir.
          </p>
          <div className="home-hero-actions">
            <Link className="button button-primary button-premium" href="/diagnostico">
              Descubrir mi punto de entrada <span className="button-icon" aria-hidden="true">→</span>
            </Link>
            <a className="home-quiet-link" href="#estrategia">Recibir la estrategia por email <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="home-hero-index" aria-hidden="true">
          <span>CAPACIDAD</span><i /><span>MARGEN</span><i /><span>DIRECCIÓN</span>
        </div>
      </section>

      <section className="home-strategy" id="estrategia">
        <div className="shell home-strategy-grid">
          <div className="home-strategy-copy">
            <span className="eyebrow dark">Una carta a la semana. Sin ruido.</span>
            <h2>La estrategia que seguí para dejar de depender de un salario, un lugar y una única salida.</h2>
          </div>
          <div className="home-strategy-panel">
            <p className="home-strategy-lead">Recibe la estrategia completa, paso a paso, y correos directos sobre cómo construir una vida con libertad real.</p>
            <HomeOptin />
            <p className="home-privacy">Contenido directo. Sin spam. Puedes darte de baja cuando quieras.</p>
          </div>
        </div>
      </section>

      <section className="home-paths">
        <div className="shell home-paths-heading">
          <span className="eyebrow copper">Antes de aplicar más soluciones</span>
          <h2>Entiende qué necesitas construir primero.</h2>
          <p>No todas las personas se sienten atrapadas por la misma razón. El diagnóstico te ayuda a identificar tu punto de entrada sin obligarte a encajar en un recorrido genérico.</p>
        </div>
        <div className="shell home-paths-grid">
          <article>
            <span>Nivel 1 · Construir capacidad</span>
            <h3>Necesitas despegar.</h3>
            <p>Dirección, habilidades e ingresos suficientes para empezar a crear opciones.</p>
          </article>
          <article>
            <span>Nivel 2 · Recuperar margen</span>
            <h3>Necesitas poder moverte.</h3>
            <p>Menos dependencia estructural y más capacidad para decidir sin ponerlo todo en riesgo.</p>
          </article>
        </div>
        <div className="shell home-paths-cta">
          <Link className="button button-light button-premium" href="/diagnostico">
            Empezar el diagnóstico <span className="button-icon dark-icon" aria-hidden="true">→</span>
          </Link>
          <span>2 minutos · Sin registro previo</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
