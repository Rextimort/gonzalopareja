"use client";

import { useEffect, useRef } from "react";

const MOBILE_QUERY = "(max-width: 620px)";
const MOBILE_SRC = "/home-hero-mobile-reverse.mp4";
const DESKTOP_SRC = "/home-hero.mp4";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobile = window.matchMedia(MOBILE_QUERY);

    const selectPlayback = () => {
      const nextSource = mobile.matches ? MOBILE_SRC : DESKTOP_SRC;
      const currentPath = video.currentSrc
        ? new URL(video.currentSrc, window.location.href).pathname
        : "";

      if (currentPath !== nextSource) {
        video.src = nextSource;
        video.load();
      }

      void video.play().catch(() => {
        // The video remains muted and ready if the browser delays autoplay.
      });
    };

    selectPlayback();
    mobile.addEventListener("change", selectPlayback);

    return () => {
      mobile.removeEventListener("change", selectPlayback);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="home-hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/home-hero-poster.jpg"
      aria-hidden="true"
      data-mobile-playback="reverse-full-video"
    >
      <source media={MOBILE_QUERY} src={MOBILE_SRC} type="video/mp4" />
      <source src={DESKTOP_SRC} type="video/mp4" />
    </video>
  );
}
