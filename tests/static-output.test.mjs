import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");

async function readRoute(route) {
  return readFile(path.join(root, "dist", route, "index.html"), "utf8");
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
  }));
  return nested.flat();
}

test("genera las rutas estáticas principales y el backoffice", async () => {
  await Promise.all([
    access(path.join(root, "dist", "index.html")),
    access(path.join(root, "dist", "diagnostico", "index.html")),
    access(path.join(root, "dist", "intervencion-estrategica", "index.html")),
    access(path.join(root, "dist", "login", "index.html")),
    access(path.join(root, "dist", "admin", "sesiones", "index.html")),
  ]);
});

test("el backoffice usa sesión por cookie y no expone un token administrativo", async () => {
  const files = await listFiles(path.join(root, "dist"));
  const adminFiles = files.filter((file) =>
    /(?:admin\/sesiones\/index\.html|sesiones\.astro.*\.js)$/.test(file),
  );
  const output = (await Promise.all(adminFiles.map((file) => readFile(file, "utf8")))).join("\n");

  assert.match(output, /\/admin\/session/);
  assert.match(output, /credentials:\s*[`"']include[`"']/);
  assert.doesNotMatch(output, /ADMIN_API_TOKEN/);
  assert.doesNotMatch(output, /sessions_admin_token/);
  assert.doesNotMatch(output, /data-admin-token/);
});

test("mantiene los textos y recorridos principales", async () => {
  const home = await readFile(path.join(root, "dist", "index.html"), "utf8");
  const diagnostico = await readRoute("diagnostico");
  const intervencion = await readRoute("intervencion-estrategica");
  const login = await readRoute("login");

  assert.match(home, /Si tu vida depende[\s\S]*de un sueldo,[\s\S]*estás en riesgo/);
  assert.match(home, /Yo te ayudo a[\s\S]*cambiar eso/);
  assert.match(home, /Dos puntos de entrada al Programa/);
  assert.match(home, /12–24 meses · De cero a libertad real/);
  assert.match(home, /convertimos ese margen en inversión, patrimonio e ingresos menos ligados/);
  assert.match(home, /TRABAJO PRIVADO 1:1/);
  assert.match(home, /INVERSIÓN DESDE 2\.400 € \+ IVA/);
  assert.match(home, /La sesión de las 6:00/);
  assert.match(diagnostico, /Tu vida puede no estar mal/);
  assert.match(diagnostico, /Alcanzar una libertad real/);
  assert.match(intervencion, /Tu salario no es el problema/);
  assert.match(intervencion, /Que tu vida dependa de él, sí/);
  assert.match(intervencion, /El tiempo necesario depende de dónde empiezas/);
  assert.match(intervencion, /Intervención 60D/);
  assert.match(intervencion, /Intervención 90D/);
  assert.match(intervencion, /Recorrido 6 meses/);
  assert.match(intervencion, /Recorrido 12 meses/);
  assert.match(intervencion, /2\.400 €/);
  assert.match(intervencion, /3\.200 €/);
  assert.match(intervencion, /5\.000 €/);
  assert.match(intervencion, /6\.800 €/);
  assert.match(intervencion, /No compras horas/);
  assert.match(intervencion, /Solicitar diagnóstico/);
  assert.match(intervencion, /¿Me garantizas resultados\?/);
  assert.match(login, /Bienvenido/);
  assert.match(login, /Enviar enlace de acceso/);
});

test("conserva vídeos, formularios, WhatsApp y redes sociales", async () => {
  const files = await listFiles(path.join(root, "dist"));
  const textFiles = files.filter((file) => /\.(?:html|js|css)$/.test(file));
  const output = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");

  assert.match(output, /loom\.com\/embed\/4a023603841845c597abf82503b0e363/);
  assert.match(output, /loom\.com\/embed\/7e031a268cad4e969e2ce57c1c3de375/);
  assert.match(output, /loom\.com\/embed\/027f62c2c09442b89a67a6ab04469462/);
  assert.match(output, /\/api\/sessions\/register/);
  assert.match(output, /fluirplus-webhook\.gonzalo-pareja\.workers\.dev\/auth\/request-link/);
  assert.match(output, /wa\.me\/34690205133/);
  assert.match(output, /instagram\.com\/gonzalo\.pareja\.ig/);
  assert.match(output, /youtube\.com\/@GonzaloParejaBola/);
  assert.match(output, /linkedin\.com\/in\/gonzalo-pareja-bola/);
});

test("incluye todos los assets obligatorios", async () => {
  const assets = [
    "home-hero.mp4",
    "home-hero-mobile-reverse.mp4",
    "home-hero-poster.jpg",
    "intervencion-private-advisory.jpg",
    "intervencion-arms.jpg",
    "diagnostico-hero.jpg",
    "diagnostico-pointing.png",
    "diagnostico-abel.png",
    "case-level-1-poster.jpg",
    "case-level-2-poster.jpg",
    "og.png",
    "og-v2.png",
    "og-home.png",
    "favicon.svg",
  ];

  await Promise.all(assets.map((asset) => access(path.join(root, "public", asset))));
});
