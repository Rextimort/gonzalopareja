import type { Metadata } from "next";
import { LoginForm } from "../components/LoginForm";
import { Header } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Acceso de alumnos",
  description: "Acceso privado para alumnos mediante enlace seguro enviado por email.",
};

export default function LoginPage() {
  return (
    <main className="login-page">
      <Header active="login" overlay />
      <div className="login-photo" aria-hidden="true" />
      <div className="login-shade" aria-hidden="true" />
      <div className="login-lines" aria-hidden="true"><i /><i /><i /></div>

      <div className="shell login-layout">
        <div className="login-story">
          <span className="eyebrow">Área privada · Alumnos</span>
          <p>Pasar de sostener tu vida<br />a poder dirigirla.</p>
          <small>Gonzalo Pareja · Capacidad, margen y dirección</small>
        </div>

        <section className="login-panel" aria-labelledby="login-title">
          <div className="login-panel-index"><span>ACCESO SEGURO</span><b>01</b></div>
          <h1 id="login-title">Bienvenido<br /><em>de vuelta.</em></h1>
          <p className="login-intro">Introduce el email con el que adquiriste tu acceso y te enviaremos un enlace para entrar.</p>
          <LoginForm />
          <div className="login-support">
            <span>¿Necesitas ayuda?</span>
            <a href="https://wa.me/34690205133?text=Hola%20Gonzalo.%20Necesito%20ayuda%20para%20acceder%20al%20%C3%A1rea%20de%20alumnos." target="_blank" rel="noreferrer">
              Pedir ayuda por WhatsApp <b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
