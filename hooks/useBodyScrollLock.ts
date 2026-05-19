import { useEffect } from "react";

export function useBodyScrollLock() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      // Blur the focused input BEFORE restoring the body position.
      // On iOS, if a textarea is focused when the modal closes, the keyboard
      // starts its dismiss animation AFTER our cleanup runs — which shifts the
      // visual viewport and pushes the navbar off-screen. Blurring first makes
      // iOS start the keyboard dismiss before we touch the body styles.
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);
}
