import Link from "next/link";

const whatsapp =
  "https://wa.me/34690205133?text=Hola%20Gonzalo.%20He%20visto%20tu%20web%20y%20quiero%20saber%20si%20la%20Intervenci%C3%B3n%2060D%20encaja%20con%20mi%20situaci%C3%B3n.";

export function Header({
  active,
  overlay = false,
}: {
  active: "home" | "diagnostico" | "intervencion" | "login";
  overlay?: boolean;
}) {
  return (
    <header className={overlay ? "site-header header-overlay" : "site-header"}>
      <div className="shell header-inner">
        <nav className="header-left" aria-label="Accesos principales">
          <Link className={active === "diagnostico" ? "nav-link active" : "nav-link"} href="/diagnostico">
            Empieza aquí
          </Link>
          <Link className={active === "login" ? "nav-link active" : "nav-link"} href="/login">Login Alumnos</Link>
        </nav>
        <Link className="brand" href="/" aria-label="Gonzalo Pareja, inicio">
          Gonzalo Pareja
        </Link>
        <nav className="header-right" aria-label="Contacto">
          <Link className="mobile-login" href="/login">Alumnos</Link>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
            <span className="header-cta-long">Contáctame por WhatsApp <i>(Soy yo)</i></span>
            <span className="header-cta-short">WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-identity">
          <Link className="footer-wordmark" href="/">Gonzalo Pareja</Link>
          <span className="eyebrow copper">Capacidad · Margen · Dirección</span>
          <h2>Construir una vida que no dependa por completo de tu salario.</h2>
        </div>
        <Link className="footer-next" href="/intervencion-estrategica#casos-reales">
          <span>
            <small>Dos puntos de partida</small>
            <strong>Encuentra el recorrido más parecido al tuyo</strong>
          </span>
          <b aria-hidden="true">→</b>
        </Link>
      </div>

      <div className="shell footer-navigation">
        <nav className="footer-journey" aria-label="Recorrido principal">
          <Link href="/diagnostico"><span>01</span> Diagnóstico</Link>
          <Link href="/intervencion-estrategica"><span>02</span> Intervención 60D</Link>
        </nav>
        <nav className="footer-social" aria-label="Redes sociales">
          <a href="https://www.instagram.com/gonzalo.pareja.ig/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">IG</a>
          <a href="https://www.youtube.com/@GonzaloParejaBola%C3%B1os" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">YT</a>
          <a href="https://www.linkedin.com/in/gonzalo-pareja-bola%C3%B1os/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
        </nav>
      </div>

      <div className="shell footer-bottom">
        <p>© 2026 Gonzalo Pareja Bolaños</p>
        <span>Estrategia personal para construir capacidad real de decisión.</span>
        <Link href="/login">Acceso de alumnos <b aria-hidden="true">→</b></Link>
      </div>
    </footer>
  );
}

export function WhatsAppButton({ label = "Contarte mi situación" }: { label?: string }) {
  return (
    <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-link" href={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
