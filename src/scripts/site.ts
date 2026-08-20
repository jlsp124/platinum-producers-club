const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-revealed"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -7% 0px", threshold: 0.08 }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll<HTMLButtonElement>("[data-player-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.closest<HTMLElement>("[data-provider-video]");
    const source = button.dataset.playerSrc;
    if (!container || !source) return;

    const playerUrl = new URL(source);
    playerUrl.searchParams.set("autoplay", reducedMotion.matches ? "0" : "1");

    const iframe = document.createElement("iframe");
    iframe.src = playerUrl.toString();
    iframe.title = button.dataset.playerTitle || "Video";
    iframe.allow = "accelerometer; gyroscope; autoplay; encrypted-media; fullscreen; picture-in-picture";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    container.replaceChildren(iframe);
  });
});

const supportedUtms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const incoming = new URLSearchParams(window.location.search);
document.querySelectorAll<HTMLAnchorElement>(".js-calendly").forEach((link) => {
  const destination = new URL(link.href);
  supportedUtms.forEach((parameter) => {
    const value = incoming.get(parameter);
    if (value && value.length < 255) destination.searchParams.set(parameter, value);
  });
  link.href = destination.toString();

  link.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("ppc:calendly-click", {
      detail: { context: link.dataset.calendlyContext || "unknown" }
    }));
  });
});

document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
