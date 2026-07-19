"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const questions = [
  "Sientes que tu vida no termina de arrancar, aunque sabes que tienes capacidad.",
  "No tienes suficiente margen para equivocarte, parar o probar otra dirección.",
  "No sabes qué habilidad, movimiento o cambio priorizar para mejorar tu situación.",
  "Tu vida funciona desde fuera, pero depende de algo que no puedes permitirte perder.",
  "Aunque te esfuerzas, tus opciones reales no parecen aumentar con el tiempo.",
  "Has pensado en invertir, emprender, cambiar o ganar más, pero sin una ruta clara.",
];

export function Diagnostic() {
  const [checked, setChecked] = useState<boolean[]>(questions.map(() => false));
  const [revealed, setRevealed] = useState(false);
  const score = useMemo(() => checked.filter(Boolean).length, [checked]);

  const levelOne = [0, 1, 2, 4, 5].filter((index) => checked[index]).length;
  const levelTwo = [1, 3, 4, 5].filter((index) => checked[index]).length;
  const result =
    score === 0 || levelOne === levelTwo
      ? {
          code: "DOS POSIBLES PUNTOS DE ENTRADA",
          title: "La sensación es la misma. Ahora hay que identificar qué la está provocando.",
          copy: "Puede faltarte capacidad, margen o una combinación de ambos. La intervención empieza separando esas piezas y ordenando qué debe cambiar primero.",
        }
      : levelOne > levelTwo
        ? {
            code: "TU FOCO INICIAL · CONSTRUIR CAPACIDAD",
            title: "No necesitas hacer más cosas. Necesitas una dirección que haga avanzar tu situación.",
            copy: "Tu primer recorrido pasa por claridad, habilidades monetizables, mejores ingresos y una estructura básica que te permita dejar de vivir al límite.",
          }
        : {
            code: "TU FOCO INICIAL · RECUPERAR MARGEN",
            title: "Tu vida funciona, pero depende de demasiadas condiciones que no controlas.",
            copy: "Tu recorrido pasa por reducir dependencia, revisar la estructura que sostienes y recuperar opciones antes de que la vida te obligue a hacerlo.",
          };

  function toggle(index: number) {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)));
    setRevealed(false);
  }

  return (
    <div className="diagnostic-tool">
      <div className="diagnostic-head">
        <div>
          <span className="eyebrow">Autodiagnóstico · 2 minutos</span>
          <h2>¿Qué está limitando hoy tu capacidad de avanzar?</h2>
        </div>
        <span className="score-orbit" aria-live="polite">{score}/6</span>
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
          <label className={checked[index] ? "question checked" : "question"} key={question}>
            <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} />
            <span className="custom-check" aria-hidden="true">{checked[index] ? "✓" : String(index + 1).padStart(2, "0")}</span>
            <span>{question}</span>
          </label>
        ))}
      </div>
      <div className="diagnostic-action">
        <button className="button button-primary button-premium" type="button" onClick={() => setRevealed(true)}>
          Ver mi lectura
          <span className="button-icon" aria-hidden="true">↓</span>
        </button>
        <span>Privado. No recoge ni envía ningún dato.</span>
      </div>
      {revealed && (
        <div className="diagnostic-result" aria-live="polite">
          <span className="eyebrow copper">{result.code}</span>
          <h3>{result.title}</h3>
          <p>{result.copy}</p>
          <Link className="text-link" href="/intervencion-estrategica">
            <span>Ver cómo funciona la Intervención 60D</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
