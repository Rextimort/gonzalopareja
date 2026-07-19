"use client";

import { useState } from "react";

export function VideoFrame({
  title,
  eyebrow,
  src,
  poster,
  posterLabel = "Vídeo preparado",
  placeholder = false,
}: {
  title: string;
  eyebrow: string;
  src?: string;
  poster?: string;
  posterLabel?: string;
  placeholder?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const showPoster = placeholder && (!src || !playing);
  const showVideo = Boolean(src) && (!placeholder || playing);

  return (
    <div className={placeholder ? "video-card is-placeholder" : "video-card"}>
      <div className="video-meta">
        <span>{eyebrow}</span>
        <span>16:9</span>
      </div>
      <div className="video-window">
        {showVideo ? (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : null}

        {showPoster ? (
          src ? (
            <button
              className={poster ? "video-placeholder video-poster-button has-poster" : "video-placeholder video-poster-button"}
              type="button"
              aria-label={`Reproducir vídeo: ${title}`}
              onClick={() => setPlaying(true)}
            >
              {poster ? <img className="video-poster-image" src={poster} alt="" aria-hidden="true" /> : null}
              <span className="play-button" aria-hidden="true">▶</span>
              <span className="video-placeholder-copy">
                <span className="placeholder-label">{posterLabel}</span>
                <strong>{title}</strong>
                <small>Pulsa para reproducir el vídeo completo</small>
              </span>
            </button>
          ) : (
            <div className="video-placeholder" role="img" aria-label={`${title}. Espacio preparado para el vídeo`}>
              <span className="play-button" aria-hidden="true">▶</span>
              <div>
                <span className="placeholder-label">{posterLabel}</span>
                <strong>{title}</strong>
                <small>Se activará al añadir la URL definitiva</small>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
