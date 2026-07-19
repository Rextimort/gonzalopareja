"use client";

import { FormEvent, useState } from "react";

export function HomeOptin() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");

    setSending(true);
    setStatus("Enviando…");

    try {
      const response = await fetch("https://app.gonzalopareja.com/newsletter/optin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) throw new Error("No se pudo completar el registro");
      window.location.assign("/intervencion-estrategica");
    } catch {
      setStatus("No he podido completar el registro. Revisa los datos e inténtalo de nuevo.");
      setSending(false);
    }
  }

  return (
    <form className="home-optin-form" onSubmit={handleSubmit}>
      <div className="home-field">
        <label htmlFor="optin-name">Nombre</label>
        <input id="optin-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
      </div>
      <div className="home-field">
        <label htmlFor="optin-email">Email</label>
        <input id="optin-email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
      </div>
      <button className="button button-primary button-premium home-submit" type="submit" disabled={sending}>
        <span>{sending ? "Enviando…" : "Quiero la estrategia"}</span>
        <span className="button-icon" aria-hidden="true">→</span>
      </button>
      <p className="home-form-status" aria-live="polite">{status}</p>
    </form>
  );
}
