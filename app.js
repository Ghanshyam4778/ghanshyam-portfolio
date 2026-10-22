/* Progressive enhancement only: portfolio HTML remains visible without JavaScript. */
(function () {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const destination = (hash) => document.getElementById(hash.replace(/^#/, ''));
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function scrollToSection(section) {
    const el = destination(section);
    if (el) { el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); window.history.replaceState(null, '', section); }
  }
  // Menu
  const menu = $('#main-nav');
  const menuToggle = $('#menu-toggle');
  menuToggle?.addEventListener('click', () => {
    const opened = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(opened));
  });
  $$('#main-nav a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false');
  }));
  // Scroll progress
  const scrollBar = $('#scroll-progress'), backTop = $('#back-top');
  function updateScroll() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = (distance > 0 ? window.scrollY / distance * 100 : 0) + '%';
    backTop?.classList.toggle('show', window.scrollY > 650);
  }
  window.addEventListener('scroll', updateScroll, { passive: true }); updateScroll();
  backTop?.addEventListener('click', () => scrollToSection('#top'));
  // Project filters
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.filter;
    $$('[data-filter]').forEach(b => {const on = b === button; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on));});
    $$('#projects-list .project-card').forEach(card => {card.hidden = value !== 'all' && card.dataset.category !== value;});
  }));
  // Vehicle security concept explorer
  const topics = [
    ['Electronic Control Units', 'Embedded computers that manage functions inside a vehicle. Understanding how components communicate is a foundation for automotive cybersecurity.'],
    ['Controller Area Network (CAN)', 'A commonly used in-vehicle communication bus. Learning how it works helps explain the challenges of protecting messages inside connected vehicles.'],
    ['Connected Services', 'Vehicle connectivity adds communication interfaces, remote features and privacy considerations that demand careful security design.'],
    ['Security Engineering', 'A future professional focus: risk assessment, secure communication, system boundaries and responsible testing of connected technologies.'],
  ];
  $$('[data-topic]').forEach(button => button.addEventListener('click', () => {
    const idx = Number(button.dataset.topic); const selected = topics[idx]; if (!selected) return;
    $('#topic-title').textContent = selected[0]; $('#topic-copy').textContent = selected[1];
    $$('[data-topic]').forEach(b => {const active = Number(b.dataset.topic) === idx; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active));});
  }));
  // Terminal commands are exclusively navigation and informational responses
  const termOutput = $('#term-output'), termInput = $('#terminal-command');
  const navCommands = {about:'#about',projects:'#projects',skills:'#skills',experience:'#experience',lab:'#lab',community:'#community',contact:'#contact',automotive:'#automotive'};
  const results = {
    help:'Commands: help, whoami, status, about, projects, skills, experience, lab, automotive, community, contact, clear',
    whoami:'Ghanshyam Vekariya · cybersecurity student · full-stack developer',
    status:'Portfolio: online · focus: Cybersecurity – Automobility · environment: personal website',
  };
  function appendLog(message, clazz) {
    const p = document.createElement('p'); if (clazz) p.className = clazz; p.textContent = message; termOutput.appendChild(p); termOutput.scrollTop = termOutput.scrollHeight;
  }
  $('#terminal-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); const command = termInput.value.trim().toLowerCase(); termInput.value = '';
    if (!command) return;
    if (command === 'clear') {termOutput.textContent = ''; return;}
    appendLog('guest@gv:~$ ' + command, 'term-note');
    if (navCommands[command]) {appendLog('Opening ' + command + '...', 'term-result'); scrollToSection(navCommands[command]);}
    else if (results[command]) appendLog(results[command], 'term-result');
    else appendLog('Unknown command. Type help for available commands.', 'term-result');
  });
  // Command palette
  const overlay = $('#command-overlay'), search = $('#command-search'), resultsBox = $('#command-results');
  const sections = [['About','#about'],['Projects','#projects'],['Skills','#skills'],['Experience','#experience'],['Security Lab','#lab'],['Automotive Security','#automotive'],['Community','#community'],['Contact','#contact']];
  function populate() {
    resultsBox.textContent = '';
    const items = sections.filter(([title]) => title.toLowerCase().includes(search.value.toLowerCase()));
    if (!items.length) {const p = document.createElement('p'); p.textContent = 'No matching section'; p.style.padding = '0 14px'; resultsBox.appendChild(p);}
    for (const [name, id] of items) {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = '↗  ' + name;
      b.addEventListener('click', () => { closePalette(); scrollToSection(id); }); resultsBox.appendChild(b);
    }
  }
  let previousFocus;
  function openPalette() {previousFocus=document.activeElement;overlay.hidden=false;search.value='';populate();search.focus();}
  function closePalette() {overlay.hidden=true;previousFocus?.focus();}
  $('#quick-open')?.addEventListener('click', openPalette);
  $('#command-close')?.addEventListener('click', closePalette);
  $('[data-close]')?.addEventListener('click', closePalette);
  search?.addEventListener('input', populate);
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {event.preventDefault(); overlay.hidden ? openPalette() : closePalette();}
    if (event.key === 'Escape' && !overlay.hidden) {event.preventDefault();closePalette();}
    if (!overlay.hidden && event.key === 'Tab') {
      const controls = Array.from(overlay.querySelectorAll('button,input')).filter(el => !el.disabled);
      if (controls.length) {const first=controls[0], last=controls[controls.length-1];
        if (event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();}
        else if (!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();}}
    }
  });
  // Copy email without pretending message was sent
  $('#copy-email')?.addEventListener('click', async () => {
    const b=$('#copy-email'), label=b.querySelector('span');
    try {await navigator.clipboard.writeText('ghanshyamvekariya609@gmail.com');label.textContent='Copied email';setTimeout(()=>label.textContent='Copy email',2200);}
    catch {label.textContent='Use the email link to contact me';setTimeout(()=>label.textContent='Copy email',2500);}
  });
  $('#year').textContent = String(new Date().getFullYear());
  // current link indicator (optional)
  if ('IntersectionObserver' in window) {
    const links = $$('#main-nav a');
    const obs = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) links.forEach(link=>link.classList.toggle('is-active', link.getAttribute('href')==='#'+e.target.id));
    }, {rootMargin:'-25% 0px -65% 0px'});
    links.forEach(link => {const el=destination(link.getAttribute('href'));if(el)obs.observe(el);});
  }
})();
