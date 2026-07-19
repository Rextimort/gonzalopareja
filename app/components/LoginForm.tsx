"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const endpoint = "https://fluirplus-webhook.gonzalo-pareja.workers.dev/auth/request-link";

type Status = {
  message: string;
  tone: "idle" | "sending" | "success" | "error";
};

async function requestMagicLink(email: string) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(payload?.error || "request_failed") as Error & { code?: string };
    error.code = payload?.error || "request_failed";
    throw error;
  }
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ message: "", tone: "idle" });
  const [sending, setSending] = useState(false);
  const autoRequestStarted = useRef(false);

  async function sendLink(targetEmail: string, paymentConfirmed = false) {
    setSending(true);
    setStatus({
      tone: "sending",
      message: paymentConfirmed
        ? "Pago confirmado. Estamos preparando tu enlace de acceso…"
        : "Estamos preparando tu enlace seguro…",
    });

    try {
      await requestMagicLink(targetEmail);
      setStatus({
        tone: "success",
        message: "Listo. Te hemos enviado el enlace de acceso. Revisa también la carpeta de Spam.",
      });
    } catch (error) {
      const code = (error as Error & { code?: string })?.code;
      setStatus({
        tone: "error",
        message:
          code === "no_entitlement"
            ? paymentConfirmed
              ? "El pago está confirmado, pero el acceso todavía no aparece asociado a este email. Espera 30 segundos y vuelve a intentarlo."
              : "No encontramos un acceso asociado a este email. Comprueba que sea el mismo que utilizaste al realizar el pago."
            : "No hemos podido enviar el enlace. Espera 30 segundos y vuelve a intentarlo.",
      });
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paid = params.get("paid") === "1";
    const paidEmail = params.get("email") || "";

    if (!paid || !paidEmail || autoRequestStarted.current) return;
    autoRequestStarted.current = true;
    setEmail(paidEmail);
    const timer = window.setTimeout(() => void sendLink(paidEmail, true), 50);
    return () => window.clearTimeout(timer);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendLink(email.trim());
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-field">
        <label htmlFor="login-email">Email asociado a tu acceso</label>
        <input
          id="login-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby="login-help login-status"
          required
        />
      </div>
      <p className="login-help" id="login-help">
        No necesitas contraseña. Recibirás un enlace seguro en tu correo.
      </p>
      <button className="button button-primary button-premium login-submit" type="submit" disabled={sending}>
        <span>{sending ? "Enviando enlace…" : "Enviar enlace de acceso"}</span>
        <span className="button-icon" aria-hidden="true">→</span>
      </button>
      <div
        className={status.tone === "idle" ? "login-status" : `login-status is-${status.tone}`}
        id="login-status"
        role="status"
        aria-live="polite"
      >
        {status.message && <span aria-hidden="true">{status.tone === "success" ? "✓" : status.tone === "error" ? "!" : "·"}</span>}
        <p>{status.message}</p>
      </div>
    </form>
  );
}
