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

test("genera las cuatro rutas estáticas", async () => {
  await Promise.all([
    access(path.join(root, "dist", "index.html")),
    access(path.join(root, "dist", "diagnostico", "index.html")),
    access(path.join(root, "dist", "intervencion-estrategica", "index.html")),
    access(path.join(root, "dist", "login", "index.html")),
  ]);
});

test("mantiene los textos y recorridos principales", async () => {
  const home = await readFile(path.join(root, "dist", "index.html"), "utf8");
  const diagnostico = await readRoute("diagnostico");
  const intervencion = await readRoute("intervencion-estrategica");
  const login = await readRoute("login");

  assert.match(home, /Si tu vida depende de un sueldo, estás en riesgo/);
  assert.match(home, /Yo te ayudo a cambiar eso/);
  assert.match(home, /Dos puntos de entrada al Programa/);
  assert.match(home, /convertir ese margen en inversión, patrimonio y fuentes de ingresos/);
  assert.match(home, /TRABAJO PRIVADO 1:1/);
  assert.match(home, /INVERSIÓN DESDE 2\.400 € \+ IVA/);
  assert.match(home, /Quiero la estrategia/);
  assert.match(diagnostico, /Tu vida puede no estar mal/);
  assert.match(diagnostico, /Alcanzar una libertad real/);
  assert.match(intervencion, /Tu salario no es el problema/);
  assert.match(intervencion, /Que tu vida dependa de él, sí/);
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
  assert.match(output, /app\.gonzalopareja\.com\/newsletter\/optin/);
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
