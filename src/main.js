import './styles.css';

const sources = [
  {
    label: 'Trainstation.se',
    url: 'https://www.trainstation.se/post/fyra-anledningar-f%C3%B6r-dig-att-komma-till-vivalla-trainstation',
    note: 'Öppen mötesplats för digitalt skapande, handledare, iPads, robotar, musikstudio, YouTube-studio och VR-rum.',
  },
  {
    label: 'Örebro kommun / Fritidsboost',
    url: 'https://extra.orebro.se/fritidsboost/nyheter/artiklar/trainstationochfritidsboost.5.2cc7f27a19c2712925544d.html',
    note: 'Aktuella verksamheter: Filmverkstan, Musikstudios, Gaming & E-sport och Kreativ verkstad.',
  },
  {
    label: 'SVT Nyheter Örebro',
    url: 'https://www.svt.se/nyheter/lokalt/orebro/trainstation-digital-motesplats-i-vivalla',
    note: 'En digitalt topputrustad mötesplats där ungdomar kan chilla, programmera, spela in video och designa.',
  },
  {
    label: 'Sveriges Radio P4 Örebro',
    url: 'https://www.sverigesradio.se/artikel/7071497',
    note: 'Barn och unga kan lära sig robotik, programmering, spelskapande, digital design och mer.',
  },
];

const missions = [
  {
    id: 'film',
    title: 'Filmverkstan',
    icon: '🎬',
    color: '#ff5bc8',
    short: 'Ljus, kamera, berättelse.',
    fact: 'Testa studio: framför kameran, bakom kameran, foto, ljus och bildkomposition.',
    objective: 'Samla 4 bildrutor och nå studioplattformen.',
    unlockedText: 'Du byggde en scen där idéer blir video, foto och podcast.',
  },
  {
    id: 'music',
    title: 'Musikstudion',
    icon: '🎧',
    color: '#6ee7ff',
    short: 'Från beat till färdig låt.',
    fact: 'Skriv text, rappa, sjung, spela in, producera beats, mixa, mastra och dela digitalt.',
    objective: 'Samla 4 ljudvågor och nå mixbåset.',
    unlockedText: 'Du fångade ett beat och gjorde plats för nästa röst från Vivalla.',
  },
  {
    id: 'gaming',
    title: 'Gaming & E-sport',
    icon: '🎮',
    color: '#a78bfa',
    short: 'Spelglädje, taktik och lagkänsla.',
    fact: 'Spela tillsammans, träna kommunikation och bygg trygga lag med stöd av handledare.',
    objective: 'Samla 4 power-ups och nå lagbasen.',
    unlockedText: 'Du skapade ett lag där kommunikation ger poäng före ego.',
  },
  {
    id: 'code',
    title: 'Kod & spel',
    icon: '💻',
    color: '#34d399',
    short: 'Gör första appen möjlig.',
    fact: 'På Trainstation visas möjligheter med dator, platta och digitala verktyg — från spel till appar.',
    objective: 'Samla 4 kodblock och nå releaseportalen.',
    unlockedText: 'Du gick från nyfiken idé till första spelbara prototyp.',
  },
  {
    id: 'maker',
    title: 'Kreativ verkstad',
    icon: '🤖',
    color: '#fbbf24',
    short: 'Robotik, design och fysiskt skapande.',
    fact: 'Digitalt-fysiskt skapande kan vara robotar, elektronik, design, 3D och gemensam problemlösning.',
    objective: 'Samla 4 komponenter och nå labbet.',
    unlockedText: 'Du byggde något som både syns på skärmen och känns i händerna.',
  },
];

const app = document.querySelector('#app');
app.innerHTML = `
  <section class="hero" aria-labelledby="page-title">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <nav class="topbar" aria-label="Sidnavigering">
      <a class="brand" href="#top" aria-label="Trainstation Vivalla Skaparresan">
        <span class="brand-mark">TV</span>
        <span><strong>Trainstation Vivalla</strong><small>Skaparresan</small></span>
      </a>
      <div class="nav-actions">
        <a href="#research">Underlag</a>
        <a href="#game">Spela</a>
      </div>
    </nav>

    <div class="hero-grid" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Digital fritidsgård · kreativ studio · trygg gemenskap</p>
        <h1 id="page-title">Bygg framtidens Vivalla — en idé i taget.</h1>
        <p class="lead">
          Ett snabbt, polerat webbspel där spelaren lotsar Trainstation-tåget genom verksamhetens kreativa stationer:
          film, musik, gaming, kod och makerskap. Samla gnistor, undvik brus och lås upp berättelsen om vad unga kan skapa här.
        </p>
        <div class="hero-actions">
          <a class="primary-button" href="#game">Starta spelet</a>
          <button class="ghost-button" id="howToPlayButton" type="button">Så spelar du</button>
        </div>
        <div class="stats" aria-label="Spelöversikt">
          <article><strong>5</strong><span>skaparmiljöer</span></article>
          <article><strong>90s</strong><span>lagom demo-runda</span></article>
          <article><strong>100%</strong><span>Vivalla-känsla</span></article>
        </div>
      </div>
      <aside class="mission-card" aria-label="Spelets tema">
        <div class="card-glow"></div>
        <p>Uppdrag</p>
        <h2>Fyll stationen med kreativ energi</h2>
        <div class="track-preview">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="card-text">Varje insamlad gnista representerar handledning, utrustning, mod och samarbete.</p>
      </aside>
    </div>
  </section>

  <section class="insight-strip" aria-label="Trainstation i korthet">
    ${missions.map((mission) => `
      <article style="--accent:${mission.color}">
        <span>${mission.icon}</span>
        <h3>${mission.title}</h3>
        <p>${mission.short}</p>
      </article>
    `).join('')}
  </section>

  <section class="game-shell" id="game" aria-labelledby="game-title">
    <div class="game-header">
      <div>
        <p class="eyebrow">Interaktiv upplevelse</p>
        <h2 id="game-title">Trainstation: Skaparresan</h2>
      </div>
      <div class="scoreboard" aria-live="polite">
        <span>Poäng <strong id="score">0</strong></span>
        <span>Energi <strong id="energy">0/4</strong></span>
        <span>Nivå <strong id="level">1/5</strong></span>
      </div>
    </div>

    <div class="game-layout">
      <div class="canvas-wrap">
        <canvas id="gameCanvas" width="1120" height="640" aria-label="Spelplan för Trainstation Skaparresan"></canvas>
        <div class="overlay active" id="startOverlay">
          <div class="overlay-panel">
            <p class="eyebrow">Redo?</p>
            <h3>Styr tåget genom Vivallas kreativa stationer.</h3>
            <p>Samla stationens symboler, undvik distraktioner och nå plattformen innan tiden tar slut.</p>
            <button class="primary-button" id="startButton" type="button">Spela nu</button>
          </div>
        </div>
      </div>

      <aside class="mission-panel">
        <div class="current-mission" id="missionPanel"></div>
        <div class="controls">
          <h3>Kontroller</h3>
          <p><kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> eller <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></p>
          <p>På mobil: dra med fingret över spelplanen.</p>
        </div>
        <div class="progress-list" id="progressList"></div>
      </aside>
    </div>
  </section>

  <section class="research" id="research" aria-labelledby="research-title">
    <div>
      <p class="eyebrow">Researchbaserat innehåll</p>
      <h2 id="research-title">Spelet är byggt på det Trainstation faktiskt gör.</h2>
      <p>
        Innehållet fokuserar på den öppna digitala mötesplatsen, handledarna, de trygga sociala formerna och skapandet inom film,
        musik, gaming, programmering, digital design och robotik.
      </p>
    </div>
    <div class="source-grid">
      ${sources.map((source) => `
        <a class="source-card" href="${source.url}" target="_blank" rel="noreferrer">
          <strong>${source.label}</strong>
          <span>${source.note}</span>
        </a>
      `).join('')}
    </div>
  </section>
`;

const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.querySelector('#score');
const energyEl = document.querySelector('#energy');
const levelEl = document.querySelector('#level');
const missionPanel = document.querySelector('#missionPanel');
const progressList = document.querySelector('#progressList');
const startOverlay = document.querySelector('#startOverlay');
const startButton = document.querySelector('#startButton');
const howToPlayButton = document.querySelector('#howToPlayButton');

const state = {
  running: false,
  level: 0,
  score: 0,
  collected: 0,
  timeLeft: 72,
  message: 'Samla kreativa gnistor!',
  player: { x: 128, y: 320, w: 78, h: 54, speed: 360 },
  keys: new Set(),
  sparks: [],
  obstacles: [],
  particles: [],
  unlocked: [],
  lastTime: 0,
  touch: null,
  transitioning: false,
};

function mission() {
  return missions[state.level];
}

function resetLevel() {
  state.transitioning = false;
  state.collected = 0;
  state.timeLeft = Math.max(38, 72 - state.level * 7);
  state.player.x = 110;
  state.player.y = canvas.height / 2 - state.player.h / 2;
  state.sparks = Array.from({ length: 4 }, (_, index) => ({
    x: 300 + index * 175 + Math.random() * 46,
    y: 125 + Math.random() * 360,
    r: 18,
    taken: false,
    bob: Math.random() * Math.PI * 2,
  }));
  state.obstacles = Array.from({ length: 5 + state.level }, (_, index) => ({
    x: 260 + index * 135 + Math.random() * 80,
    y: 85 + Math.random() * 445,
    w: 42 + Math.random() * 34,
    h: 42 + Math.random() * 34,
    vy: (Math.random() > 0.5 ? 1 : -1) * (45 + state.level * 9 + Math.random() * 34),
  }));
  updatePanels();
}

function startGame() {
  state.running = true;
  state.level = 0;
  state.score = 0;
  state.unlocked = [];
  state.transitioning = false;
  state.message = 'Samla kreativa gnistor!';
  startOverlay.classList.remove('active');
  resetLevel();
  state.lastTime = performance.now();
  requestAnimationFrame(loop);
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function addParticles(x, y, color, count = 18) {
  for (let i = 0; i < count; i += 1) {
    state.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 260,
      vy: (Math.random() - 0.5) * 260,
      life: 0.75 + Math.random() * 0.35,
      color,
      size: 3 + Math.random() * 5,
    });
  }
}

function completeLevel() {
  if (state.transitioning) return;
  state.transitioning = true;
  const activeMission = mission();
  state.unlocked.push(activeMission.id);
  state.score += Math.round(state.timeLeft * 12) + 350;
  state.message = activeMission.unlockedText;
  addParticles(1000, canvas.height / 2, activeMission.color, 54);
  if (state.level === missions.length - 1) {
    state.running = false;
    showEndOverlay();
    updatePanels();
    return;
  }
  state.level += 1;
  window.setTimeout(resetLevel, 650);
}

function showEndOverlay() {
  startOverlay.innerHTML = `
    <div class="overlay-panel celebration">
      <p class="eyebrow">Resan klar</p>
      <h3>Vivalla lyser av skaparkraft.</h3>
      <p>Du låste upp alla stationer och visade hur Trainstation kan göra idéer spelbara, hörbara, synliga och delbara.</p>
      <strong class="final-score">${state.score} poäng</strong>
      <button class="primary-button" id="restartButton" type="button">Spela igen</button>
    </div>
  `;
  startOverlay.classList.add('active');
  document.querySelector('#restartButton').addEventListener('click', startGame);
}

function update(dt) {
  const p = state.player;
  let dx = 0;
  let dy = 0;
  if (state.keys.has('arrowleft') || state.keys.has('a')) dx -= 1;
  if (state.keys.has('arrowright') || state.keys.has('d')) dx += 1;
  if (state.keys.has('arrowup') || state.keys.has('w')) dy -= 1;
  if (state.keys.has('arrowdown') || state.keys.has('s')) dy += 1;
  if (state.touch) {
    dx += state.touch.x;
    dy += state.touch.y;
  }
  const length = Math.hypot(dx, dy) || 1;
  p.x = Math.max(26, Math.min(canvas.width - p.w - 26, p.x + (dx / length) * p.speed * dt));
  p.y = Math.max(58, Math.min(canvas.height - p.h - 45, p.y + (dy / length) * p.speed * dt));

  state.timeLeft -= dt;
  if (state.timeLeft <= 0) {
    state.score = Math.max(0, state.score - 120);
    state.message = 'Ny chans — handledaren hjälper dig tillbaka på spåret.';
    resetLevel();
  }

  state.sparks.forEach((spark) => {
    spark.bob += dt * 4;
    if (!spark.taken && rectsOverlap(p, { x: spark.x - spark.r, y: spark.y - spark.r, w: spark.r * 2, h: spark.r * 2 })) {
      spark.taken = true;
      state.collected += 1;
      state.score += 220 + state.level * 40;
      state.message = `Du samlade ${mission().title.toLowerCase()}-energi.`;
      addParticles(spark.x, spark.y, mission().color);
    }
  });

  state.obstacles.forEach((obstacle) => {
    obstacle.y += obstacle.vy * dt;
    if (obstacle.y < 72 || obstacle.y + obstacle.h > canvas.height - 55) obstacle.vy *= -1;
    if (rectsOverlap(p, obstacle)) {
      state.score = Math.max(0, state.score - 75);
      state.message = 'Brus på spåret — fokusera om!';
      obstacle.vy *= -1;
      obstacle.x += 24;
      addParticles(p.x + p.w / 2, p.y + p.h / 2, '#ff385c', 10);
    }
  });

  const platform = { x: canvas.width - 155, y: canvas.height / 2 - 82, w: 98, h: 164 };
  if (state.collected >= 4 && rectsOverlap(p, platform)) completeLevel();

  state.particles = state.particles
    .map((particle) => ({
      ...particle,
      x: particle.x + particle.vx * dt,
      y: particle.y + particle.vy * dt,
      vy: particle.vy + 80 * dt,
      life: particle.life - dt,
    }))
    .filter((particle) => particle.life > 0);
}

function drawBackground(activeMission) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#08111f');
  gradient.addColorStop(0.48, '#10244a');
  gradient.addColorStop(1, '#170b2e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 56) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x - 80, canvas.height);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255,255,255,.08)';
  ctx.fillRect(0, 70, canvas.width, 2);
  ctx.fillRect(0, canvas.height - 55, canvas.width, 2);

  for (let y of [210, 320, 430]) {
    ctx.strokeStyle = 'rgba(255,255,255,.18)';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(50, y);
    ctx.lineTo(canvas.width - 50, y);
    ctx.stroke();
    ctx.strokeStyle = activeMission.color;
    ctx.globalAlpha = 0.18;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, y - 14);
    ctx.lineTo(canvas.width - 50, y - 14);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function drawPlayer(activeMission) {
  const p = state.player;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.shadowColor = activeMission.color;
  ctx.shadowBlur = 24;
  const body = ctx.createLinearGradient(0, 0, p.w, p.h);
  body.addColorStop(0, '#ffffff');
  body.addColorStop(1, activeMission.color);
  roundRect(0, 7, p.w, 35, 16, body);
  roundRect(48, 0, 28, 42, 12, '#dff6ff');
  ctx.shadowBlur = 0;
  roundRect(10, 14, 19, 14, 5, '#0b1020');
  roundRect(34, 14, 19, 14, 5, '#0b1020');
  ctx.fillStyle = '#0b1020';
  ctx.beginPath();
  ctx.arc(18, 47, 8, 0, Math.PI * 2);
  ctx.arc(59, 47, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 18px Space Grotesk';
  ctx.fillText(activeMission.icon, 54, 27);
  ctx.restore();
}

function drawSparks(activeMission, now) {
  state.sparks.forEach((spark) => {
    if (spark.taken) return;
    const y = spark.y + Math.sin(spark.bob) * 9;
    ctx.save();
    ctx.translate(spark.x, y);
    ctx.shadowColor = activeMission.color;
    ctx.shadowBlur = 26;
    ctx.fillStyle = activeMission.color;
    ctx.beginPath();
    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8 + now / 700;
      const radius = i % 2 === 0 ? spark.r : spark.r * 0.45;
      ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
    }
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#07111f';
    ctx.font = '700 17px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(activeMission.icon, 0, 1);
    ctx.restore();
  });
}

function drawObstacles() {
  state.obstacles.forEach((obstacle, index) => {
    ctx.save();
    ctx.translate(obstacle.x, obstacle.y);
    ctx.rotate(Math.sin(performance.now() / 550 + index) * 0.08);
    roundRect(0, 0, obstacle.w, obstacle.h, 14, 'rgba(255,56,92,.86)');
    ctx.fillStyle = 'rgba(255,255,255,.82)';
    ctx.font = '800 20px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('!', obstacle.w / 2, obstacle.h / 2);
    ctx.restore();
  });
}

function drawPlatform(activeMission) {
  const x = canvas.width - 155;
  const y = canvas.height / 2 - 82;
  ctx.save();
  ctx.shadowColor = state.collected >= 4 ? activeMission.color : 'rgba(255,255,255,.2)';
  ctx.shadowBlur = state.collected >= 4 ? 34 : 8;
  roundRect(x, y, 98, 164, 26, state.collected >= 4 ? activeMission.color : 'rgba(255,255,255,.14)');
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#07111f';
  ctx.font = '800 34px Space Grotesk';
  ctx.textAlign = 'center';
  ctx.fillText('MÅL', x + 49, y + 74);
  ctx.font = '700 28px Inter';
  ctx.fillText(activeMission.icon, x + 49, y + 112);
  ctx.restore();
}

function drawHud(activeMission) {
  roundRect(24, 18, 470, 38, 18, 'rgba(8,17,31,.72)');
  ctx.fillStyle = '#fff';
  ctx.font = '700 18px Inter';
  ctx.textAlign = 'left';
  ctx.fillText(`${activeMission.title}: ${state.message}`, 44, 43);
  roundRect(canvas.width - 192, 18, 168, 38, 18, 'rgba(8,17,31,.72)');
  ctx.fillStyle = activeMission.color;
  ctx.textAlign = 'center';
  ctx.fillText(`${Math.ceil(state.timeLeft)} sek`, canvas.width - 108, 43);
}

function drawParticles() {
  state.particles.forEach((particle) => {
    ctx.globalAlpha = Math.max(0, particle.life);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

function draw(now) {
  const activeMission = mission();
  drawBackground(activeMission);
  drawPlatform(activeMission);
  drawSparks(activeMission, now);
  drawObstacles();
  drawPlayer(activeMission);
  drawParticles();
  drawHud(activeMission);
}

function roundRect(x, y, w, h, r, fillStyle) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}

function updatePanels() {
  const activeMission = mission();
  scoreEl.textContent = state.score;
  energyEl.textContent = `${state.collected}/4`;
  levelEl.textContent = `${state.level + 1}/${missions.length}`;
  missionPanel.innerHTML = `
    <span class="mission-icon" style="--accent:${activeMission.color}">${activeMission.icon}</span>
    <p class="eyebrow">Aktuell station</p>
    <h3>${activeMission.title}</h3>
    <p>${activeMission.fact}</p>
    <strong>${activeMission.objective}</strong>
  `;
  progressList.innerHTML = missions.map((item, index) => `
    <div class="progress-item ${state.unlocked.includes(item.id) ? 'done' : ''} ${index === state.level ? 'current' : ''}">
      <span style="--accent:${item.color}">${item.icon}</span>
      <div><strong>${item.title}</strong><small>${state.unlocked.includes(item.id) ? 'Upplåst' : index === state.level ? 'Pågår' : 'Väntar'}</small></div>
    </div>
  `).join('');
}

function loop(now) {
  if (!state.running) return;
  const dt = Math.min(0.033, (now - state.lastTime) / 1000);
  state.lastTime = now;
  update(dt);
  draw(now);
  updatePanels();
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', (event) => state.keys.add(event.key.toLowerCase()));
window.addEventListener('keyup', (event) => state.keys.delete(event.key.toLowerCase()));
canvas.addEventListener('pointerdown', (event) => {
  canvas.setPointerCapture(event.pointerId);
  state.touch = { startX: event.clientX, startY: event.clientY, x: 0, y: 0 };
});
canvas.addEventListener('pointermove', (event) => {
  if (!state.touch) return;
  state.touch.x = Math.max(-1, Math.min(1, (event.clientX - state.touch.startX) / 70));
  state.touch.y = Math.max(-1, Math.min(1, (event.clientY - state.touch.startY) / 70));
});
canvas.addEventListener('pointerup', () => { state.touch = null; });
canvas.addEventListener('pointercancel', () => { state.touch = null; });
startButton.addEventListener('click', startGame);
howToPlayButton.addEventListener('click', () => document.querySelector('#game').scrollIntoView({ behavior: 'smooth' }));

resetLevel();
draw(performance.now());
