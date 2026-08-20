const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setMenuOpen = (open: boolean): void => {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  if (!toggle || !menu) return;

  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  toggle.classList.toggle("is-open", open);
  menu.hidden = !open;
  document.body.classList.toggle("menu-is-open", open);

  if (open) {
    window.requestAnimationFrame(() => menu.querySelector<HTMLElement>("a")?.focus());
  }
};

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

document.querySelectorAll<HTMLElement>("[data-menu-link]").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
let progressQueued = false;

const updateProgress = (): void => {
  progressQueued = false;
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  progress.style.transform = `scaleX(${value})`;
};

window.addEventListener(
  "scroll",
  () => {
    if (!progressQueued) {
      progressQueued = true;
      window.requestAnimationFrame(updateProgress);
    }
  },
  { passive: true }
);
updateProgress();

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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

const methodSteps = document.querySelectorAll<HTMLElement>("[data-method-step]");
const methodIndicators = document.querySelectorAll<HTMLElement>("[data-method-indicator]");
if (methodSteps.length && "IntersectionObserver" in window) {
  const methodObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = (visible.target as HTMLElement).dataset.methodStep;
      methodIndicators.forEach((indicator) => {
        indicator.classList.toggle("is-active", indicator.dataset.methodIndicator === id);
      });
    },
    { threshold: [0.25, 0.5, 0.75], rootMargin: "-18% 0px -35% 0px" }
  );
  methodSteps.forEach((step) => methodObserver.observe(step));
}

const testimonialRoot = document.querySelector<HTMLElement>("[data-testimonials]");
if (testimonialRoot) {
  const slides = [...testimonialRoot.querySelectorAll<HTMLElement>("[data-testimonial]")];
  const count = testimonialRoot.querySelector<HTMLElement>("[data-testimonial-count]");
  let index = 0;

  const show = (next: number): void => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== index;
      slide.setAttribute("aria-hidden", String(slideIndex !== index));
    });
    if (count) count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  };

  testimonialRoot.querySelector("[data-testimonial-prev]")?.addEventListener("click", () => show(index - 1));
  testimonialRoot.querySelector("[data-testimonial-next]")?.addEventListener("click", () => show(index + 1));
  show(0);
}

const dialog = document.querySelector<HTMLDialogElement>("[data-video-dialog]");
const frameContainer = dialog?.querySelector<HTMLElement>("[data-video-frame]");
let videoOpener: HTMLElement | null = null;

const closeVideo = (): void => {
  if (!dialog?.open) return;
  dialog.close();
};

document.querySelectorAll<HTMLAnchorElement>("[data-video-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!dialog || !frameContainer || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    videoOpener = link;
    const iframe = document.createElement("iframe");
    const source = frameContainer.dataset.videoSrc;
    if (!source) return;
    iframe.src = reducedMotion.matches ? source.replace("autoplay=1", "autoplay=0") : source;
    iframe.title = "Platinum Producers Club program overview video";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    frameContainer.replaceChildren(iframe);
    dialog.showModal();
  });
});

dialog?.querySelector("[data-video-close]")?.addEventListener("click", closeVideo);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeVideo();
});
dialog?.addEventListener("close", () => {
  frameContainer?.replaceChildren();
  videoOpener?.focus();
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
});

document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

