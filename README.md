# Prototipo web — Gonzalo Pareja

Prototipo local del recorrido de conversión de la marca personal:

- `/diagnostico`: diagnóstico de dependencia estructural con autodiagnóstico interactivo.
- `/intervencion-estrategica`: presentación de la Intervención 60D, VSL, método, casos, inversión y preguntas frecuentes.

## Vídeos

La VSL actual ya está conectada mediante Loom. Los dos casos de éxito incluyen espacios 16:9 preparados para sustituirlos por las URLs definitivas:

- Caso real · Nivel 1.
- Caso real · Nivel 2.

## Puesta en marcha

Requiere Node.js 22.13 o posterior y pnpm.

```bash
pnpm install
pnpm dev
```

Para validar una versión de producción:

```bash
pnpm build
node --test tests/rendered-html.test.mjs
```

## Contenido pendiente antes de publicar

- Sustituir los dos placeholders por las URLs de los vídeos de casos.
- Confirmar las métricas y afirmaciones de resultados antes de su uso público.
- Decidir si el prototipo sustituye las páginas actuales o se integra en la tecnología existente.
