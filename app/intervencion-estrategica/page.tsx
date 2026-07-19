import type { Metadata } from "next";
import { Footer, Header, WhatsAppButton } from "../components/SiteChrome";
import { VideoFrame } from "../components/VideoFrame";

export const metadata: Metadata = {
  title: "Intervención Estratégica 60D",
  description:
    "Intervención 1:1 para rediseñar ingresos, gastos, decisiones y estructura de vida, construir margen y reducir dependencia salarial.",
};

const workAreas = [
  { n: "01", title: "Radiografía real", text: "Qué estás sosteniendo, qué te está frenando y cuánto cuesta seguir exactamente igual." },
  { n: "02", title: "Capacidad y margen", text: "Reducimos presión y recuperamos espacio para que puedas decidir sin ponerlo todo en riesgo." },
  { n: "03", title: "Ingresos y dirección", text: "Reposicionamiento, nuevas capacidades y decisiones alineadas con tu potencial real." },
  { n: "04", title: "Estructura de vida", text: "Rediseñamos lo que mantienes para construir más libertad, estabilidad y opciones." },
];

const included = [
  ["90–120 min", "Diagnóstico inicial", "Una radiografía completa de tu situación y del coste real de seguir igual."],
  ["60 días", "Plan estratégico", "Decisiones ordenadas, prioridades, responsables y plazos concretos."],
  ["Semanal", "Revisión 1:1", "Seguimiento, desbloqueo y ajuste del plan sobre lo que sucede en tu vida."],
  ["Directo", "Canal privado", "Contacto conmigo para decisiones clave y minicalls cuando haga falta."],
];

const journey = [
  { n: "01", meta: "Días 01–10", title: "Entender antes de mover", text: "Radiografía de ingresos, gastos, compromisos, identidad y coste real de la vida que sostienes." },
  { n: "02", meta: "Días 11–30", title: "Decidir con margen", text: "Ordenamos prioridades y definimos la dirección: qué proteger, qué cambiar y qué empezar a construir." },
  { n: "03", meta: "Días 31–60", title: "Ejecutar y ajustar", text: "Las decisiones salen del papel. Revisamos el movimiento real y corrijo contigo lo que haga falta." },
];

const faqs = [
  ["¿Tengo que dejar mi trabajo?", "No. El objetivo no es escapar del empleo, sino dejar de necesitar que sea tu única opción. En algunos casos la decisión correcta es reposicionarte y ganar más; en otros, reducir estructura o crear una vía adicional."],
  ["¿Se consigue la libertad en 60 días?", "No prometo una vida resuelta en 60 días. En ese periodo diagnosticamos la dependencia, tomamos las decisiones principales y ponemos en marcha una salida. Las transformaciones profundas pueden necesitar entre 6 y 12 meses."],
  ["¿Voy a tener que cambiar radicalmente mi vida?", "No necesariamente. Muchas veces no se trata de destruir lo construido, sino de dejar de sostener partes que ya no eliges conscientemente. El proceso es estratégico y gradual."],
  ["¿Y si mi situación es demasiado particular?", "Por eso la intervención es personalizada. No trabajamos con una fórmula genérica: partimos de tu estructura, tus miedos, tus obligaciones y el margen que tienes hoy."],
  ["¿Es terapia o asesoría financiera?", "No es terapia ni una recomendación de inversión aislada. Es una intervención estratégica sobre ingresos, gastos, decisiones, identidad y estructura de vida. Cuando un asunto exige un profesional regulado, se deriva."],
  ["¿Me garantizas resultados?", "No. Y desconfía de quien lo haga. Lo que sí garantizo es criterio, dirección y un proceso para tomar decisiones y ejecutarlas: recuperar margen, aumentar tus ingresos si ese es tu caso, construir reglas de decisión para no dar pasos atrás y planificar tus primeras inversiones. El recorrido dependerá de los objetivos que fijemos y del tiempo contratado. El resultado depende también de que hagas lo que toca."],
];

export default function IntervencionPage() {
  return (
    <main className="intervencion-page">
      <Header active="intervencion" />

      <section className="hero intervention-hero">
        <div className="hero-glow copper-glow" aria-hidden="true" />
        <div className="shell intervention-intro">
          <span className="eyebrow copper">Programa de Intervención 60D · 1:1</span>
          <h1>Tu salario no es el problema.<br /><em>Que tu vida dependa de él, sí.</em></h1>
          <p className="hero-lead narrow">
            <span className="intervention-lead-desktop">Una intervención 1:1 para construir nuevas vías de ingresos, recuperar margen y alcanzar una libertad real: que tu vida responda a tus decisiones, no a una única fuente de estabilidad.</span>
            <span className="intervention-lead-mobile">Una intervención 1:1 para construir nuevas vías de ingresos, recuperar margen y alcanzar una libertad real: que tu vida responda a tus decisiones.</span>
          </p>
          <div className="hero-actions centered">
            <WhatsAppButton />
            <span className="cta-note">Te hago dos preguntas. Si no encaja, te lo diré.</span>
          </div>
        </div>
        <div className="shell vsl-wrap">
          <VideoFrame
            eyebrow="La intervención, explicada por Gonzalo"
            title="Qué es la Intervención Estratégica 60D"
            src="https://www.loom.com/embed/4a023603841845c597abf82503b0e363?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          />
          <div className="vsl-action">
            <span className="vsl-action-index" aria-hidden="true">GP</span>
            <div className="vsl-action-copy">
              <span>Después de ver el vídeo</span>
              <p>Si quieres que valore si la Intervención encaja contigo, cuéntame tu situación.</p>
              <small>Abre WhatsApp · Te hago dos preguntas · Respondo yo personalmente</small>
            </div>
            <WhatsAppButton label="Quiero entrar al programa" />
          </div>
        </div>
      </section>

      <section className="section promise-strip">
        <div className="shell promise-grid">
          <p>Esto no es un curso.</p>
          <p>No es motivación.</p>
          <p>No es una fórmula para “escalar”.</p>
          <strong>Es una intervención sobre tu vida real.</strong>
        </div>
      </section>

      <section className="section advisory-section" id="metodo">
        <div className="shell advisory-card">
          <figure className="advisory-photo">
            <img src="/intervencion-private-advisory.jpg" alt="Gonzalo Pareja trabajando en una conversación estratégica individual" />
            <figcaption>
              <span>Intervención real</span>
              Conversación, criterio y decisiones 1:1
            </figcaption>
          </figure>

          <div className="advisory-copy">
            <div className="advisory-copy-intro">
              <span className="eyebrow copper">Programa de Intervención 60D</span>
              <h2>Intervención directa.<br /><em>Trabajo 1:1. Decisiones reales.</em></h2>
              <p className="advisory-lead">Sesenta días de trabajo sobre tu situación real: sin teoría innecesaria ni motivación vacía. Analizamos tus ingresos, gastos, obligaciones y decisiones para construir un plan viable y ejecutarlo contigo.</p>
            </div>

            <div className="advisory-areas">
              {workAreas.map((area) => (
                <article key={area.n}>
                  <span>{area.n}</span>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="advisory-format" aria-label="Formato de la intervención">
            {included.map(([meta, title, text]) => (
              <div key={title}>
                <span>{meta}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section origin-section" id="historia">
        <div className="shell origin-intro">
          <div>
            <span className="eyebrow copper">No nace de un libro</span>
            <h2>“Mi vida funcionaba… mientras todo siguiera funcionando igual.”</h2>
          </div>
          <p className="origin-lead">En 2018, durante una comida con otros directivos, una decisión tomada por «los de arriba» me hizo ver que la vida que había construido podía dejar de depender de mí.</p>
        </div>

        <div className="shell origin-composition">
          <figure className="origin-photo-stage">
            <img src="/intervencion-arms.jpg" alt="Gonzalo Pareja apoyado sobre los bloques que cuentan su historia" />
          </figure>

          <div className="origin-story-panel" id="historia-bloques">
            <article>
              <span>Lo que parecía</span>
              <h3>Una vida resuelta.</h3>
              <p>Ganaba más de 3.500 € al mes. Tenía <em>estatus</em>, coche y un piso en propiedad. Desde fuera, todo funcionaba.</p>
            </article>
            <article>
              <span>Lo que realmente había</span>
              <h3>Todo dependía de mi salario.</h3>
              <p>Entendí que no tenía capacidad real de decidir. Vacié mi casa, alquilé dormitorios y reduje conscientemente mi nivel de vida para construir margen antes de necesitarlo.</p>
            </article>
            <blockquote>“La libertad no se construye con lo que puedes permitirte, sino con lo que eres capaz de sostener sin depender.”</blockquote>
          </div>
        </div>
      </section>

      <section className="section case-section light-section" id="casos-reales">
        <div className="shell section-heading centered-heading">
          <span className="eyebrow dark">Dos puntos de entrada. Una misma dirección.</span>
          <h2 className="display-dark">No todos necesitan empezar por lo mismo.</h2>
          <p>El primer vídeo recorre un caso real de Nivel 1. El segundo explica el trabajo de Nivel 2 para quien ya gana bien, pero sigue dependiendo de una sola estructura.</p>
        </div>
        <div className="shell case-video-grid">
          <div>
            <VideoFrame
              eyebrow="Punto de entrada · Nivel 1"
              title="Un caso real: cuando faltan capacidad y dirección"
              src="https://www.loom.com/embed/7e031a268cad4e969e2ce57c1c3de375?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"
              poster="/case-level-1-poster.jpg"
              posterLabel="Extracto del podcast"
              placeholder
            />
            <div className="case-caption">
              <strong>Construir capacidad</strong>
              <p>Un caso real sobre cómo desarrollar una capacidad monetizable y convertirla en dirección e ingresos.</p>
            </div>
          </div>
          <div>
            <VideoFrame
              eyebrow="Punto de entrada · Nivel 2"
              title="Recuperar libertad cuando ganas bien, pero sigues atrapado"
              src="https://www.loom.com/embed/027f62c2c09442b89a67a6ab04469462?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"
              poster="/case-level-2-poster.jpg"
              posterLabel="Extracto del podcast"
              placeholder
            />
            <div className="case-caption">
              <strong>Recuperar libertad</strong>
              <p>Una explicación del recorrido para quien gana bien, pero necesita margen, estructura y más de una opción.</p>
            </div>
          </div>
        </div>
        <div className="shell proof-grid">
          <article>
            <small>Resultados de clientes</small>
            <div>
              <strong>+30–60 %</strong>
              <span>Incremento del salario anual conseguido por varios clientes en un solo año.</span>
            </div>
          </article>
          <article>
            <small>Tiempo promedio</small>
            <div>
              <strong>18 meses</strong>
              <span>Tiempo promedio observado para pasar desde cero hasta la independencia financiera.</span>
            </div>
          </article>
          <article>
            <small>Casos reales</small>
            <div>
              <strong>1.200 € → 5.000 €+</strong>
              <span>De un salario de 1.200 € al mes a una facturación propia superior a 5.000 € mensuales en un año.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section execution-section" id="recorrido-60d">
        <div className="shell execution-layout">
          <div className="execution-intro">
            <span className="eyebrow copper">Cómo transcurren los 60 días</span>
            <h2>Una dirección clara.<br /><em>Seguimiento hasta moverla.</em></h2>
            <p>El plan no se entrega sin más. Se contrasta con tu vida real, se ejecuta contigo y se ajusta cuando la realidad cambia.</p>
            <div className="execution-mark" aria-label="Intervención de 60 días, individual y adaptativa">
              <strong>60D</strong>
              <span>1:1 · semanal · adaptativo</span>
            </div>
          </div>

          <div className="execution-steps">
            {journey.map((step) => (
              <article key={step.n}>
                <span className="execution-number" aria-hidden="true">{step.n}</span>
                <div>
                  <span className="execution-meta">{step.meta}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section light-section">
        <div className="shell section-heading centered-heading">
          <span className="eyebrow dark">Expectativas honestas</span>
          <h2 className="display-dark">Sesenta días para cambiar la dirección.<br />Más tiempo para consolidarla.</h2>
        </div>
        <div className="shell timeline">
          <article><span>01–02 semanas</span><h3>Entender</h3><p>Números reales, dependencia, identidad y coste de seguir igual.</p></article>
          <article><span>02–06 meses</span><h3>Mover</h3><p>Reducir presión, ajustar estructura y activar nuevas decisiones o ingresos.</p></article>
          <article><span>06–12 meses</span><h3>Consolidar</h3><p>Una estructura más ligera, flexible y menos dependiente.</p></article>
        </div>
      </section>

      <section className="section fit-section">
        <div className="shell fit-grid">
          <div className="fit-card positive">
            <span className="eyebrow copper">Es para ti si</span>
            <h2>Estás preparado para cuestionar lo que sostienes.</h2>
            <ul>
              <li>Ganas bien, pero no te sientes libre.</li>
              <li>Tu vida depende completamente de tu salario.</li>
              <li>No quieres seguir construyendo algo cada vez más pesado.</li>
              <li>Estás dispuesto a tomar decisiones incómodas.</li>
            </ul>
          </div>
          <div className="fit-card muted">
            <span className="eyebrow">No es para ti si</span>
            <h2>Solo quieres añadir más sin cambiar nada.</h2>
            <ul>
              <li>Buscas hacks, validación o motivación.</li>
              <li>Quieres ganar más manteniendo intacta toda tu estructura.</li>
              <li>Esperas que otra persona ejecute por ti.</li>
              <li>No estás preparado para revisar identidad y estatus.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section investment-section" id="inversion">
        <span className="investment-watermark" aria-hidden="true">60D</span>
        <div className="shell investment-layout">
          <div className="investment-heading">
            <span className="eyebrow copper">Inversión · Intervención 60D</span>
            <h2>Una intervención sobre<br /><em>tu vida real.</em></h2>
            <p>El formato y la profundidad se definen después de entender tu situación, no antes.</p>
          </div>

          <div className="investment-decision">
            <div className="price-block">
              <span>Inversión desde</span>
              <strong>2.400 <small>€</small></strong>
              <i>+ IVA</i>
            </div>
            <div className="investment-admission">
              <p>Antes de entrar, valoro personalmente tu caso. Si no encaja, te lo diré.</p>
              <WhatsAppButton label="Quiero que valores mi caso" />
              <small>Abre WhatsApp · Dos preguntas · Respondo yo personalmente</small>
            </div>
          </div>

          <div className="investment-signals" aria-label="Principios de la intervención">
            <article>
              <span>01 · Trabajo directo</span>
              <strong>Intervención 1:1 conmigo.</strong>
            </article>
            <article>
              <span>02 · Entrada con criterio</span>
              <strong>Primero entiendo tu situación.</strong>
            </article>
            <article>
              <span>03 · Profundidad adaptada</span>
              <strong>El plan se define según tu caso.</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section light-section">
        <div className="shell faq-grid">
          <div>
            <span className="eyebrow dark">Preguntas frecuentes</span>
            <h2 className="display-dark">Las dudas correctas antes de tomar una decisión importante.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="shell final-cta-inner">
          <span className="eyebrow copper">Antes de necesitar una salida</span>
          <h2>Empieza a construirla.</h2>
          <p>No necesitas tenerlo todo claro. Necesitas estar dispuesto a mirar tu situación sin autoengaño.</p>
          <WhatsAppButton label="Contarte mi situación" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
