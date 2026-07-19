import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the diagnostic route", async () => {
  const response = await render("/diagnostico");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Tu vida puede no estar mal/);
  assert.match(html, /Construir capacidad/);
  assert.match(html, /Recuperar margen/);
  assert.match(html, /Alcanzar una libertad real: que tu vida responda a tus decisiones, no a tus dependencias/);
  assert.match(html, /alquiló habitaciones en su propio domicilio/);
  assert.match(html, /riqueza y libertad real para decidir cómo vivir/);
  assert.match(html, /Estaba financiando su libertad/);
  assert.match(html, /story-copy-intro/);
  assert.match(html, /Autodiagnóstico/);
  assert.match(html, /Entender qué me está pasando/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the new home and its main journeys", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Una vida con opciones/);
  assert.match(html, /home-hero\.mp4/);
  assert.match(html, /home-hero-mobile-reverse\.mp4/);
  assert.match(html, /data-mobile-playback="reverse-full-video"/);
  assert.match(html, /Empieza aquí/);
  assert.match(html, /Login Alumnos/);
  assert.match(html, /Quiero la estrategia/);
  assert.match(html, /Construir capacidad/);
  assert.match(html, /Recuperar margen/);
  assert.match(html, /Encuentra el recorrido más parecido al tuyo/);
  assert.match(html, /Construir una vida que no dependa por completo de tu salario/);
  assert.doesNotMatch(html, /Construir una vida que no dependa de una sola opción/);
  assert.match(html, /intervencion-estrategica#casos-reales/);
  assert.match(html, /Acceso de alumnos/);
});

test("server-renders the intervention route and conversion elements", async () => {
  const response = await render("/intervencion-estrategica");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Intervención 60D/);
  assert.match(html, /Tu salario no es el problema/);
  assert.match(html, /Que tu vida dependa de él, sí/);
  assert.match(html, /construir nuevas vías de ingresos, recuperar margen y alcanzar una libertad real/);
  assert.match(html, /intervencion-private-advisory\.jpg/);
  assert.match(html, /advisory-copy-intro/);
  assert.match(html, /Trabajo 1:1\. Decisiones reales/);
  assert.match(html, /Analizamos tus ingresos, gastos, obligaciones y decisiones para construir un plan viable y ejecutarlo contigo/);
  assert.doesNotMatch(html, /sin separar tus ingresos de la vida que realmente sostienes/);
  assert.match(html, /Entender antes de mover/);
  assert.match(html, /Seguimiento hasta moverla/);
  assert.match(html, /El plan no se entrega sin más/);
  assert.doesNotMatch(html, /El plan no se entrega y desaparece/);
  assert.match(html, /Revisamos el movimiento real y corrijo contigo lo que haga falta/);
  assert.doesNotMatch(html, /corregimos contigo lo que haga falta/);
  assert.match(html, /loom\.com\/embed\/4a023603841845c597abf82503b0e363/);
  assert.match(html, /loom\.com\/embed\/7e031a268cad4e969e2ce57c1c3de375/);
  assert.match(html, /case-level-1-poster\.jpg/);
  assert.match(html, /loom\.com\/embed\/027f62c2c09442b89a67a6ab04469462/);
  assert.match(html, /case-level-2-poster\.jpg/);
  assert.match(html, /Punto de entrada · Nivel 1/);
  assert.match(html, /Punto de entrada · Nivel 2/);
  assert.match(html, /Extracto del podcast/);
  assert.match(html, /Un caso real: cuando faltan capacidad y dirección/);
  assert.match(html, /Recuperar libertad cuando ganas bien, pero sigues atrapado/);
  assert.match(html, /No todos necesitan empezar por lo mismo/);
  assert.match(html, /El primer vídeo recorre un caso real de Nivel 1/);
  assert.match(html, /Una radiografía completa de tu situación y del coste real de seguir igual/);
  assert.match(html, /Contacto conmigo para decisiones clave y minicalls cuando haga falta/);
  assert.match(html, /una decisión tomada por «los de arriba» me hizo ver/);
  assert.match(html, /un piso en propiedad/);
  assert.doesNotMatch(html, /Tenía cargo, coche y propiedades/);
  assert.match(html, /Todo dependía de mi salario/);
  assert.match(html, /Entendí que no tenía capacidad real de decidir\. Vacié mi casa, alquilé dormitorios/);
  assert.doesNotMatch(html, /Una sola opción/);
  assert.match(html, /\+30–60 %/);
  assert.match(html, /Incremento del salario anual conseguido por varios clientes en un solo año/);
  assert.match(html, /Tiempo promedio observado para pasar desde cero hasta la independencia financiera/);
  assert.match(html, /1\.200 € → 5\.000 €\+/);
  assert.match(html, /Casos reales/);
  assert.match(html, /facturación propia superior a 5\.000 € mensuales en un año/);
  assert.match(html, /Quiero entrar al programa/);
  assert.match(html, /Después de ver el vídeo/);
  assert.match(html, /¿Me garantizas resultados\?/);
  assert.match(html, /criterio, dirección y un proceso/);
  assert.match(html, /wa\.me\/34690205133/);
  assert.match(html, /2\.400/);
});

test("server-renders the passwordless student login", async () => {
  const response = await render("/login");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Bienvenido/);
  assert.match(html, /Email asociado a tu acceso/);
  assert.match(html, /No necesitas contraseña/);
  assert.match(html, /Enviar enlace de acceso/);
  assert.match(html, /Pedir ayuda por WhatsApp/);
});
