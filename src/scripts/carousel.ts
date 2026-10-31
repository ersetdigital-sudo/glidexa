// Mobile swipe carousels: keeps the dot indicator in sync and makes dots tappable.
const ACTIVE = ['w-6', 'bg-azure-64'];
const IDLE = ['w-1.5', 'bg-line'];

document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((track) => {
  const dots = track.parentElement?.querySelector<HTMLElement>('[data-dots]');
  if (!dots) return;
  const items = Array.from(track.children) as HTMLElement[];
  const marks = Array.from(dots.children) as HTMLElement[];

  const current = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    items.forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  };

  const paint = () => {
    const idx = current();
    marks.forEach((m, i) => {
      m.classList.remove(...(i === idx ? IDLE : ACTIVE));
      m.classList.add(...(i === idx ? ACTIVE : IDLE));
    });
  };

  let raf = 0;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(paint);
  }, { passive: true });

  marks.forEach((m, i) => {
    m.style.cursor = 'pointer';
    m.addEventListener('click', () => {
      const el = items[i];
      track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
    });
  });
  paint();
});
