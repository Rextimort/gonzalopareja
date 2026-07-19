import type { Metadata } from "next";
import { Diagnostic } from "../components/Diagnostic";
import { ArrowLink, Footer, Header } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Entender por qué te sientes atrapado",
  description:
    "Un diagnóstico para entender qué te está frenando, cuál es tu punto de entrada y qué necesitas construir para recuperar dirección y libertad real.",
};

const signals = [
  ["01", "Te esfuerzas, pero no avanzas", "Haces cosas, aprendes y cumples. Pero nada parece cambiar de verdad tu situación."],
  ["02", "No puedes permitirte fallar", "Porque tienes poco margen o porque demasiadas cosas dependen de que todo siga igual."],
  ["03", "Tienes menos opciones de las que deberías", "No te falta capacidad. Te falta una estructura que te permita utilizarla."],
];

const method = [
  "Entender qué te está frenando realmente",
  "Recuperar capacidad, claridad y dirección",
  "Construir margen con ingresos y una estructura viable",
  "Revisar qué sostienes por miedo, identidad o inercia",
  "Crear una salida antes de necesitarla",
];

export default function DiagnosticoPage() {
  return (
    <main className="diagnostico-page">
      <Header active="diagnostico" />

      <section className="hero hero-diagnostic">
        <div className="diagnostic-hero-photo" aria-hidden="true" />
        <div className="diagnostic-hero-shade" aria-hidden="true" />
        <div className="shell hero-grid diagnostic-hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Un diagnóstico antes de tomar más decisiones</span>
            <h1>Tu vida puede no estar mal.<br />Y aun así sentirte <em>atrapado.</em></h1>
            <p className="hero-lead">
              Hay personas inteligentes que pasan años sintiendo que no avanzan. No porque les falte capacidad, sino porque todavía no han identificado qué necesitan cambiar primero.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-premium" href="#puntos-de-entrada">
                Entender qué me está pasando <span className="button-icon" aria-hidden="true">↓</span>
              </a>
              <ArrowLink href="/intervencion-estrategica">Conocer la Intervención 60D</ArrowLink>
            </div>
          </div>
        </div>
        <div className="shell trust-line" aria-label="Experiencia y enfoque">
          <span><b>+9 años</b> en dirección de empresas</span>
          <span><b>Decenas</b> de diagnósticos 1:1</span>
          <span><b>Un plan distinto</b> para cada punto de partida</span>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell intro-grid">
          <div>
            <span className="eyebrow dark">El problema no siempre se ve desde fuera</span>
            <h2 className="display-dark">No estás cansado solo de trabajar.</h2>
          </div>
          <div className="body-large">
            <p>Estás cansado de esforzarte para sostener una vida que se mantiene siempre en el mismo punto.</p>
            <p>Para algunas personas significa no tener todavía ingresos, habilidades o dirección suficientes. Para otras, haber construido una vida estable que ya no saben cómo cambiar.</p>
            <p className="ink-strong">Las situaciones son diferentes. La sensación termina siendo la misma: no poder moverte.</p>
          </div>
        </div>
        <div className="shell signal-grid">
          {signals.map(([number, title, text]) => (
            <article className="signal-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section entry-section" id="puntos-de-entrada">
        <div className="entry-photo" aria-hidden="true" />
        <div className="entry-shade" aria-hidden="true" />
        <div className="shell entry-content">
          <div className="entry-heading">
            <span className="eyebrow copper">La misma sensación. Dos puntos de entrada.</span>
            <h2>No todos están atrapados por lo mismo.</h2>
            <p>Por eso el recorrido no puede ser idéntico. Primero hay que entender qué necesitas construir y qué necesitas dejar de sostener.</p>
          </div>
          <div className="entry-cards">
            <article className="entry-card">
              <div className="entry-card-top"><span>Nivel 1</span><b>01</b></div>
              <h3>Construir capacidad</h3>
              <p>Sientes que tu vida no arranca. No tienes suficiente margen, dirección o una habilidad clara que te permita cambiar tu situación.</p>
              <ul>
                <li>Dirección y prioridades</li>
                <li>Habilidades monetizables</li>
                <li>Más ingresos y estabilidad</li>
              </ul>
            </article>
            <article className="entry-card">
              <div className="entry-card-top"><span>Nivel 2</span><b>02</b></div>
              <h3>Recuperar margen</h3>
              <p>En teoría te va bien, pero tu vida depende demasiado de un salario, una posición o una estructura que no puedes permitirte perder.</p>
              <ul>
                <li>Reposicionamiento y opciones</li>
                <li>Menos dependencia estructural</li>
                <li>Margen y capacidad de decisión</li>
              </ul>
            </article>
          </div>
          <p className="entry-common">
            <span>Un destino común</span>
            <strong>Alcanzar una libertad real: que tu vida responda a tus decisiones, no a tus dependencias.</strong>
          </p>
        </div>
      </section>

      <section className="section diagnostic-section" id="diagnostico">
        <div className="shell">
          <Diagnostic />
        </div>
      </section>

      <section className="section quote-section">
        <div className="shell quote-layout">
          <div className="story-photo">
            <img src="/diagnostico-abel.png" alt="Gonzalo Pareja junto a una ventana" />
            <span>Mi punto de entrada · Nivel 2 · 2018</span>
          </div>
          <div className="story-copy">
            <div className="story-copy-intro">
              <span className="eyebrow copper">El punto de inflexión</span>
              <blockquote className="origin-quote">“Mi vida no era mía. Era una vida prestada, que podía durar exactamente lo que otra persona decidiera.”</blockquote>
            </div>
            <div className="origin-story">
              <p>
                Gonzalo era director y ganaba más de 3.500 € al mes. Pero comprendió que la vida que había construido dependía por completo de una sola empresa. Empezó a reducir estructura, alquiló habitaciones en su propio domicilio y convirtió cada euro liberado en margen.
              </p>
              <p>
                Desde fuera parecía que estaba bajando de nivel. En realidad, estaba construyendo capacidad de movimiento. Ese margen le permitió reinvertir con intensidad, acelerar el crecimiento de su patrimonio y alcanzar algo mucho más valioso que un sueldo alto: riqueza y libertad real para decidir cómo vivir.
              </p>
            </div>
            <p className="origin-signature">No estaba bajando de nivel. Estaba financiando su libertad.</p>
          </div>
        </div>
      </section>

      <section className="section method-preview light-section">
        <div className="shell method-preview-grid">
          <div className="sticky-copy">
            <span className="eyebrow dark">Un camino de liberación</span>
            <h2 className="display-dark">El foco cambia. La lógica no.</h2>
            <p>Primero construimos la capacidad que te falta. Después, el margen que te permita moverte. Siempre sobre tu realidad, no sobre una fórmula genérica.</p>
          </div>
          <ol className="method-list dark-list">
            {method.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section transition-section">
        <div className="shell transition-inner">
          <span className="eyebrow copper">El siguiente paso</span>
          <h2>Pasar de sostener tu vida<br />a poder dirigirla.</h2>
          <p>La Intervención 60D parte de tu punto de entrada y convierte el diagnóstico en decisiones concretas y un plan ejecutable.</p>
          <a className="button button-light button-premium" href="/intervencion-estrategica">
            Ver cómo funciona <span className="button-icon dark-icon" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
