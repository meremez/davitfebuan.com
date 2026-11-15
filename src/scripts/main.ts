import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const target = document.querySelector<HTMLMetaElement>('meta[name="deploy-target"]')?.content ?? 'production';
const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => scope.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<T>(sel));

/* ---------------- Smooth scroll ---------------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToTarget(sel: string) {
  const el = sel === '#top' ? document.body : $(sel);
  if (!el) return;
  if (lenis) lenis.scrollTo(sel === '#top' ? 0 : el, { duration: 1.4 });
  else if (sel === '#top') window.scrollTo({ top: 0 });
  else el.scrollIntoView();
  if (sel !== '#top') {
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
}

/* ---------------- Jakarta clock ---------------- */
const clockFmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' });
const clocks = $$('[data-clock]');
const tickClock = () => {
  const time = clockFmt.format(new Date());
  clocks.forEach((el) => (el.textContent = `JKT ${time} · GMT+7`));
};
tickClock();
setInterval(tickClock, 15000);

/* ---------------- Navigation ---------------- */
const nav = $('#nav')!;
const menu = $('[data-menu]')!;
const menuBtn = $<HTMLButtonElement>('[data-menu-btn]')!;
let activeSection = '';

function setMenu(open: boolean) {
  menu.hidden = !open;
  nav.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? menuBtn.dataset.close! : menuBtn.dataset.open!;
  if (open) { lenis?.stop(); nav.classList.remove('is-hidden'); } else lenis?.start();
}
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });

$$<HTMLAnchorElement>('[data-scroll-to]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    if (!menu.hidden) setMenu(false);
    scrollToTarget(a.dataset.scrollTo!);
  });
});

// Keep the reader's place when switching language.
$$<HTMLAnchorElement>('[data-lang-link]').forEach((a) => {
  a.addEventListener('click', () => {
    const base = a.getAttribute('href')!.split('#')[0];
    if (activeSection) a.setAttribute('href', `${base}#${activeSection}`);
  });
});

ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate(self) {
    const y = self.scroll();
    nav.classList.toggle('is-solid', y > 40);
    if (menu.hidden) nav.classList.toggle('is-hidden', self.direction === 1 && y > 320);
  },
});

const progress = $('[data-progress]');
if (progress) gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

const spyLinks = $$<HTMLAnchorElement>('[data-spy]');
['story', 'journey', 'expertise', 'impact', 'contact'].forEach((id) => {
  const section = document.getElementById(id);
  if (!section) return;
  ScrollTrigger.create({
    trigger: section,
    start: 'top 55%',
    end: 'bottom 55%',
    onToggle(self) {
      if (!self.isActive) return;
      activeSection = id;
      spyLinks.forEach((l) => l.classList.toggle('is-active', l.dataset.spy === id));
    },
  });
});

/* ---------------- Expertise tabs ---------------- */
const tabs = $$<HTMLButtonElement>('[data-tab]');
const panels = $$('[data-panel]');
function selectTab(index: number, focus = false) {
  tabs.forEach((tab, i) => {
    const on = i === index;
    tab.setAttribute('aria-selected', String(on));
    tab.tabIndex = on ? 0 : -1;
    if (on && focus) tab.focus();
  });
  panels.forEach((panel, i) => {
    const show = i === index;
    if (show && panel.hidden) {
      panel.hidden = false;
      if (!reduce) gsap.fromTo($$('li, .label', panel), { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.05, ease: 'power3.out' });
    } else if (!show) panel.hidden = true;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(i));
  tab.addEventListener('keydown', (e) => {
    const k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowRight') { e.preventDefault(); selectTab((i + 1) % tabs.length, true); }
    if (k === 'ArrowUp' || k === 'ArrowLeft') { e.preventDefault(); selectTab((i - 1 + tabs.length) % tabs.length, true); }
    if (k === 'Home') { e.preventDefault(); selectTab(0, true); }
    if (k === 'End') { e.preventDefault(); selectTab(tabs.length - 1, true); }
  });
  if (finePointer) {
    let timer = 0;
    tab.addEventListener('pointerenter', () => { timer = window.setTimeout(() => selectTab(i), 140); });
    tab.addEventListener('pointerleave', () => window.clearTimeout(timer));
  }
});

/* ---------------- Contact form ---------------- */
const form = $<HTMLFormElement>('[data-form]');
if (form) {
  const status = $('[data-form-status]', form)!;
  const button = $<HTMLButtonElement>('button[type="submit"]', form)!;
  const label = button.innerHTML;
  const say = (text: string, kind: 'ok' | 'err' | '' = '') => { status.textContent = text; status.className = `form-status ${kind}`; };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (target === 'artifact') { say(form.dataset.preview!); return; }
    const data = new FormData(form);
    button.disabled = true;
    button.textContent = form.dataset.sending!;
    say('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/davit.febuan@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _honey: data.get('_honey'),
          _subject: `${target === 'staging' ? '[staging] ' : ''}New inquiry from davitfebuan.com`,
          _url: location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      say(form.dataset.success!, 'ok');
      form.reset();
    } catch {
      say(form.dataset.error!, 'err');
    } finally {
      button.disabled = false;
      button.innerHTML = label;
    }
  });
}

/* ---------------- Motion (skipped entirely for reduced motion) ---------------- */
function countUp(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const end = Number(el.dataset.count);
  const obj = { v: 0 };
  gsap.to(obj, {
    v: end, duration: end > 50 ? 1.4 : 0.9, ease: 'power2.out',
    onUpdate: () => (el.textContent = `${el.dataset.prefix}${Math.round(obj.v)}${el.dataset.suffix}`),
  });
}

function heroIntro() {
  const name = $('[data-hero-name]')!;
  const rows = $$('.row', name);
  const photo = $('[data-hero-photo] .frame')!;
  const caption = $('[data-hero-photo] figcaption');
  const img = $('img', photo);
  const statement = SplitText.create('[data-hero-statement]', { type: 'lines', mask: 'lines' });
  const chars = rows.map((r) => SplitText.create(r, { type: 'chars' }).chars).flat();
  rows.forEach((r) => r.classList.add('line-mask'));

  gsap.set(chars, { yPercent: 105 });
  gsap.set(statement.lines, { yPercent: 105 });
  gsap.set(photo, { clipPath: 'inset(100% 0% 0% 0%)' });
  if (img) gsap.set(img, { scale: 1.2 });
  gsap.set(['[data-hero-fade]', caption], { autoAlpha: 0, y: 16 });
  root.classList.add('is-ready');

  gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: () => rows.forEach((r) => r.classList.remove('line-mask')) })
    .to(chars, { yPercent: 0, duration: 1.3, stagger: 0.035 }, 0.1)
    .to(photo, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' }, 0.2)
    .to(img, { scale: 1, duration: 1.8 }, 0.35)
    .to(statement.lines, { yPercent: 0, duration: 1.1, stagger: 0.08 }, 0.6)
    .to(['[data-hero-fade]', caption], { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 }, 0.75);

  if (img) {
    gsap.to(img, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  }
}

function sectionMotion() {
  // Headings rise line by line.
  $$('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines', mask: 'lines', autoSplit: true,
      onSplit: (self) => gsap.from(self.lines, {
        yPercent: 105, duration: 1.1, stagger: 0.09, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      }),
    });
  });

  // Supporting blocks fade up.
  $$('[data-fade]').forEach((el) => {
    gsap.from(el, { y: 32, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  // Story lead lights up word by word as you read.
  const lead = $('[data-scrub-words]');
  if (lead) {
    const words = $$('.w', lead);
    ScrollTrigger.create({
      trigger: lead, start: 'top 78%', end: 'bottom 42%', scrub: true,
      onUpdate(self) {
        const n = Math.round(self.progress * words.length);
        words.forEach((w, i) => w.classList.toggle('on', i < n));
      },
    });
  }

  // Marquee: steady drift, nudged by scroll speed and direction.
  const track = $('[data-marquee-track]');
  const group = track?.firstElementChild as HTMLElement | null;
  if (track && group) {
    const loop = gsap.to(track, { x: () => -group.offsetWidth, duration: 38, ease: 'none', repeat: -1, invalidateOnRefresh: true });
    let dir = 1;
    ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate(self) {
        dir = self.direction;
        const boost = Math.min(Math.abs(self.getVelocity()) / 250, 6);
        gsap.to(loop, { timeScale: dir * (1 + boost), duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2, ease: 'power2.out' });
      },
    });
  }

  // Journey: route line draws, sticky year follows the stop in view.
  const stopsWrap = $('[data-stops]');
  const fill = $('[data-route-fill]');
  const yearBox = $('[data-year]');
  const tag = $('[data-chapter-tag]');
  if (stopsWrap && fill) {
    gsap.to(fill, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: stopsWrap, start: 'top 62%', end: 'bottom 62%', scrub: true } });
    const stops = $$('[data-stop]', stopsWrap);
    let current = 0;
    const setCurrent = (index: number) => {
      stops.forEach((s, i) => { s.classList.toggle('is-current', i === index); s.classList.toggle('is-past', i < index); });
      if (index === current) return;
      const dirUp = index > current;
      current = index;
      const stop = stops[index];
      if (yearBox) {
        const spans = Array.from(yearBox.children) as HTMLElement[];
        spans.slice(0, -1).forEach((o) => { gsap.killTweensOf(o); o.remove(); });
        const old = spans[spans.length - 1];
        const next = document.createElement('span');
        next.textContent = stop.dataset.short!;
        yearBox.appendChild(next);
        gsap.fromTo(next, { yPercent: dirUp ? 100 : -100 }, { yPercent: 0, duration: 0.7, ease: 'expo.out' });
        if (old) {
          gsap.killTweensOf(old);
          gsap.to(old, { yPercent: dirUp ? -100 : 100, duration: 0.7, ease: 'expo.out', onComplete: () => old.remove() });
        }
      }
      if (tag) {
        const ch = stop.dataset.chapter as 'physical' | 'digital';
        tag.dataset.chapter = ch;
        const label = stopsWrap.dataset[ch === 'physical' ? 'chapterPhysical' : 'chapterDigital'];
        const text = tag.querySelector('span');
        if (text && label) text.textContent = label;
      }
    };
    setCurrent(0);
    stops.forEach((stop, i) => {
      ScrollTrigger.create({
        trigger: stop, start: 'top 62%', end: 'bottom 62%',
        onToggle: (self) => { if (self.isActive) setCurrent(i); },
      });
    });
  }

  // Impact: the terminal holds still while the receipt prints upward; figures count up as they appear.
  const receipt = $('[data-receipt]');
  const terminal = $('[data-terminal]');
  if (receipt && terminal) {
    const items = $$('[data-receipt-item]', receipt);
    const nums = items.map((it) => $('[data-count]', it)!);
    nums.forEach((n) => (n.textContent = `${n.dataset.prefix}0${n.dataset.suffix}`));
    const fits = () => terminal.offsetHeight < window.innerHeight * 0.86;
    gsap.fromTo(receipt, { yPercent: 100 }, {
      yPercent: 0, ease: 'none',
      scrollTrigger: {
        trigger: terminal,
        start: () => (fits() ? 'top 12%' : 'bottom bottom-=12'),
        end: () => '+=' + Math.round(Math.max(480, window.innerHeight * 0.7)),
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate(self) {
          const shown = self.progress * receipt.offsetHeight;
          items.forEach((it, i) => { if (it.offsetTop + it.offsetHeight * 0.6 < shown) countUp(nums[i]); });
          if (self.progress > 0.98) nums.forEach(countUp);
        },
      },
    });
  }

  // Footer wordmark rises in.
  const wordmark = $('[data-wordmark]');
  if (wordmark) {
    const split = SplitText.create(wordmark, { type: 'chars' });
    gsap.from(split.chars, { yPercent: 60, autoAlpha: 0, duration: 1.2, stagger: 0.03, ease: 'expo.out', scrollTrigger: { trigger: wordmark, start: 'top 95%', once: true } });
  }

  // Magnetic buttons on precise pointers.
  if (finePointer) {
    $$('[data-magnetic]').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.25);
        yTo((e.clientY - r.top - r.height / 2) * 0.4);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }
}

async function start() {
  if (reduce) { root.classList.add('is-ready'); return; }
  // Line splits depend on final font metrics; wait briefly for web fonts.
  await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1200))]);
  heroIntro();
  sectionMotion();
  ScrollTrigger.refresh();
  if (location.hash.length > 1 && $(location.hash)) {
    requestAnimationFrame(() => lenis?.scrollTo(location.hash, { immediate: true }));
  }
}

start();
window.addEventListener('load', () => ScrollTrigger.refresh());
