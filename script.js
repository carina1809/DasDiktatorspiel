/* =========================================================
   DIKTATORSPIEL – Full Working Script
   Intro: Satz-für-Satz + Mascot Animation
   ========================================================= */

/* ---------- Config ---------- */

// Karten-ID -> Bilddatei (im Ordner /Bilder)
// Tipp: Benenne sauber: exakt Dateinamen inkl. Endung
const CARD_IMAGES = {
  
  2:"./Bilder/Militärbudgeterhöhung_Annehmen.png",
  3:"./Bilder/Studiengebühren_Annehmen.png",
  4:"./Bilder/Spätzle_Annehmen.png",
  5:"./Bilder/Kostenloser-Nahverkehr_Annehmen.png",
  6: "./Bilder/Maultaschenverbot_Annehmen.png",
  7:"./Bilder/Schwarzwaldabholzung_Annehmen.png",
  8:"./Bilder/Brezelsteuer_Annehmen.png",
  9:"./Bilder/Flughafen_Annehmen.png",
  10:"./Bilder/Bodensee_Annehmen.png",
  11:"./Bilder/Kuckucksuhr_Annehmen.png",
  12:"./Bilder/Bahnhof_Annehmen.png",
  13:"./Bilder/Trachtenpflicht_Annehmen.png",
  14:"./Bilder/Dialektpflicht_Annehmen.png",
  15:"./Bilder/Freibadverbot_Annehmen.png",
  16:"./Bilder/Schwobentaler_Annehmen.png",
  17:"./Bilder/Windradausbau_Annehmen.png",
  18:"./Bilder/Maut_Annehmen.png",
  19:"./Bilder/Bargeldabschaffung_Annehmen.png",
  20:"./Bilder/Alkoholverbot_Annehmen.png",
  21:"./Bilder/Seilbahn_Annehmen.png",
  22:"./Bilder/Einwegplastikverbot_Annehmen.png",
  24:"./Bilder/Religionsverbot Annehmen.png",
  25:"./Bilder/Vier-Tage-Woche_Annehmen.png"
  
};

// Für jede Karten-ID: Bild für links/rechts
// Pfade anpassen: ich nehme an: ./Bilder/<DATEI>.png
const DECISION_IMAGES = {
  2:  { left: "./Artikel/Militärbudgeterhöhung_Annehmen.png",  right: "./Artikel/Militärbudgeterhöhung_Ablehnen.png"  },
  3:  { left: "./Artikel/Studiengebühren_Annehmen.png",  right: "./Artikel/Studiengebühren_Ablehnen.png"  },
  4:  { left: "./Artikel/Spätzle_Annehmen.png",  right: "./Artikel/Spätzle_Ablehnen.png"  },
  5:  { left: "./Artikel/Kostenloser-Nahverkehr_Annehmen.png",  right: "./Artikel/Kostenloser-Nahverkehr_Ablehnen.png"  },
  6:  { left: "./Artikel/Maultaschenverbot_Annehmen.png",  right: "./Artikel/Maultaschenverbot_Ablehnen.png"  },
  7:  { left: "./Artikel/Schwarzwaldabholzung_Annehmen.png",  right: "./Artikel/Schwarzwaldabholzung_Ablehnen.png"  },
  8: { left: "./Artikel/Brezelsteuer_Annehmen.png", right: "./Artikel/Brezelsteuer_Ablehnen.png" },
  9:  { left: "./Artikel/Flughafen_Annehmen.png",  right: "./Artikel/Flughafen_Ablehnen.png"  },
  10:  { left: "./Artikel/Bodenseeprivatisierung_Annehmen.png",  right: "./Artikel/Bodenseeprivatisierung_Ablehnen.png"  },
  11:  { left: "./Artikel/Kuckucksuhr_Annehmen.png",  right: "./Artikel/Kuckucksuhr_Ablehnen.png"  }, 
  12:  { left: "./Artikel/Bahnhof_Annehmen.png",  right: "./Artikel/Bahnhof_Ablehnen.png"  },
  13:  { left: "./Artikel/Trachtenpflicht_Annehmen.png",  right: "./Artikel/Trachtenpflicht_Ablehnen.png"  },
  14:  { left: "./Artikel/Dialektpflicht_Annehmen.png",  right: "./Artikel/Dialektpflicht_Ablehnen.png"  }, 
  15:  { left: "./Artikel/Freibadverbot_Annehmen.png",  right: "./Artikel/Freibadverbot_Ablehnen.png"  },
  16:  { left: "./Artikel/Schwobentaler_Annehmen.png",  right: "./Artikel/Schwobentaler_Ablehnen.png"  },
  17:  { left: "./Artikel/Windradausbau_Annehmen.png",  right: "./Artikel/Windradausbau_Ablehnen.png"  }, 
  18:  { left: "./Artikel/Maut_Annehmen.png",  right: "./Artikel/Maut_Ablehnen.png"  },
  19:  { left: "./Artikel/Bargeldabschaffung_Annehmen.png",  right: "./Artikel/Bargeldabschaffung_Ablehnen.png"   },
  20:  { left: "./Artikel/Alkoholverbot_Annehmen.png",  right: "./Artikel/Alkoholverbot_Ablehnen.png"  },
  21:  { left: "./Artikel/Seilbahn_Annehmen.png",  right: "./Artikel/Seilbahn_Ablehnen.png"  },
  22: { left: "./Artikel/Einwegplastikverbot_Annehmen.png",  right: "./Artikel/Einwegplastikverbot_Ablehnen.png"  },
  24:  { left: "./Artikel/Religionsverbot_Annehmen.png",  right: "./Artikel/Religionsverbot_Ablehnen.png"  },
  25:  { left: "./Artikel/Vier-Tage-Woche_Annehmen.png",  right: "./Artikel/Vier-Tage-Woche_Ablehnen.png"  },
   
};




const CATEGORIES = ["Bildung", "Sicherheit", "Zufriedenheit", "Finanzen"];

const SCORE_MIN = 0;
const SCORE_MAX = 10;
const START_SCORE = 5;

/* ---------- Intro Dialog / Mascot ---------- */
const INTRO_SENTENCES = [
  "Hallo, mein/e Führer/in!",
  "Heute schlüpfst du in die Rolle eines waschechten Diktators!",
  "Deine Aufgabe wird es sein, das Land nach deinen Vorstellungen zu formen und zu regieren.",
  "Doch pass auf: Deine Entscheidungen bringen Konsequenzen mit sich.",
  "Achte daher darauf, die Dinge immer im Gleichgewicht zu halten.",
  "Viel Erfolg und ein gutes Gelingen!"
];

// Wie viele Bildwechsel (Mund zu/auf) pro Satz
const INTRO_IMAGES_PER_LINE = 6;

// Tempo der Bildwechsel (ms)
const INTRO_FRAME_INTERVAL_MS = 140;

// Mascot Frames
const MASCOT_FRAMES = {
  idle: "./Diktator/MundZuAugenAuf.png",
  talk: "./Diktator/MundAufAugenAuf.png",
  blink: "./Diktator/MundAufAugenZu.png"
};

/* ---------- Event-System ---------- */
const EVENT_TIMER_SECONDS = 10;
const EVENT_CHANCE_PER_TURN = 0.05;

const MUSIC_MUTE_KEY = "diktatorspiel-music-muted";
let musicMuted = false;


function loadMusicMute() {
  const saved = localStorage.getItem(MUSIC_MUTE_KEY);
  musicMuted = saved === "1";
}

function setMusicMuted(on) {
  musicMuted = !!on;
  localStorage.setItem(MUSIC_MUTE_KEY, musicMuted ? "1" : "0");
  applyVolumeToAllSounds();
  updateMusicToggleBtn();
}

function updateMusicToggleBtn() {
  const btn = document.getElementById("music-toggle");
  if (!btn) return;
  btn.textContent = musicMuted ? "Musik: AUS" : "Musik: AN";
}



/* ---------- Volume ---------- */
const VOLUME_KEY = "diktatorspiel-volume";
let masterVolume = 1.0;

/* =========================================================
   DOM helpers (MUSS VOR renderBoard existieren)
   ========================================================= */
const $ = (sel, el = document) => el.querySelector(sel);

const create = (tag, cls) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

const INTRO_SPEAK_SOUNDS = [
  "./sounds/SprechenEins.mpeg",
  "./sounds/SprechenZwei.mpeg"
];


/* =========================================================
   DATA: Deck / Rescue / Events / Messages
   ========================================================= */


const DECK = [
  
  {
    id: 2,
    prompt: "Das Militärbudget soll um 300 % erhöht werden.",
    left: {
      label: "Finanzieren",
      effects: { Sicherheit: +2, Zufriedenheit: -2, Finanzen: -1 }
    },
    right: {
      label: "Nicht Finanzieren",
      effects: { Sicherheit: -1, Zufriedenheit: +2 }
    }
  },
  {
    id: 3,
    prompt: "Die Studiengebühren sollen erhöht werden.",
    left: {
      label: "Annehmen",
      effects: { Finanzen: +1, Bildung: -2 }
    },
    right: {
      label: "Ablehnen",
      effects: { Finanzen: -1, Bildung: +1 }
    }
  },

  
{
   id: 4,
    prompt: "Subventionen (finanzielle Unterstützung) für die Spätzle Produktion.",
    left: {
     label: "Unterstützen",
      effects: { Finanzen: -1, Zufriedenheit: +1 }
    },
    right: {
      label: "Nicht Unterstützen",
    effects: { Finanzen: +1, Zufriedenheit: -2}
  }

  
},



  {
    id: 5,
    prompt: "Schüler fordern kostenlosen Nahverkehr für alle.",
    left: {
      label: "Finanzieren",
      effects: { Bildung: +2, Zufriedenheit: +1, Finanzen: -2 }
    },
    right: {
      label: "Nicht finanzieren",
      effects: { Bildung: -2, Zufriedenheit: -2, Finanzen: +1 }
    }
  },
  {
    id: 6,
    prompt: "Maultaschen sollen verboten werden, um Fleischverbrauch zu reduzieren.",
    left: {
      label: "Verbieten",
      effects: { Sicherheit: -2, Zufriedenheit: -1, Finanzen: +1 }
    },
    right: {
      label: "Nicht verbieten",
      effects: { Finanzen: +2, Zufriedenheit: +2, Bildung: -1 }
    }
  },
  {
    id: 7,
    prompt: "Schwarzwald soll im großen Stil abgeholzt werden, um neue Ferienorte zu schaffen.",
    left: {
      label: "Abholzen",
      effects: { Zufriedenheit: -2, Finanzen: +2 }
    },
    right: {
      label: "Nicht abholzen",
      effects: { Finanzen: -2, Zufriedenheit: +2 }
    }
  },
  {
    id: 8,
    prompt: "Einfürung einer Brezel-Steuer zur Finanzierung der Straßen.",
    left: {
      label: "Besteuern",
      effects: { Zufriedenheit: -1, Finanzen: +2 }
    },
    right: {
      label: "Nicht besteuern",
      effects: { Sicherheit: -1, Zufriedenheit: +2 }
    }
  },

  {
    id: 9,
    prompt: "Ausbau des Stuttgarter Flughafens mitten in ein Naturschutzgebiet.",
    left: {
      label: "Zulassen",
      effects: { Zufriedenheit: -1, Finanzen: +2, Bildung: -2 }
    },
    right: {
      label: "Ablehnen",
      effects: { Zufriedenheit: +1, Bildung: +1 }
    }
  },

  {
    id: 10,
    prompt: "Der Bodensee soll privatisiert werden.",
    left: {
      label: "Zulassen",
      effects: { Zufriedenheit: -2, Finanzen: +2 }
    },
    right: {
      label: "Ablehnen",
      effects: { Finanzen: -2, Zufriedenheit: +2 }
    }
  },

  {
    id: 11,
    prompt: "Die Kuckucksuhr soll als nationales Kulturerbe gefördert werden.",
    left: {
      label: "Fördern",
      effects: { Zufriedenheit: +2, Finanzen: -1, Bildung: +1 }
    },
    right: {
      label: "Nicht fördern",
      effects: { Zufriedenheit: -1, Finanzen: -1 }
    }
  },

  {
    id: 12,
    prompt: "Der Stuttgarter Bahnhof soll noch größer werden und mehr Geld bekommen.",
    left: {
      label: "Vergrößern",
      effects: { Zufriedenheit: -2, Finanzen: -1 }
    },
    right: {
      label: "Nicht vergrößern",
      effects: { Finanzen: -1, Zufriedenheit: -1 }
    }
  },
  {
    id: 13,
    prompt: "Einführung einer Pflicht zum Tragen von Trachten an Feiertagen.",
    left: {
      label: "Zulassen",
      effects: { Zufriedenheit: -1, Finanzen: +1, Bildung: -1 }
    },
    right: {
      label: "Ablehnen",
      effects: { Finanzen: -1, Zufriedenheit: +1, Bildung: +1 }
    }
  },
  {
    id: 14,
    prompt: "Einführung eines Dialekt-Pflichtfaches in Schulen.",
    left: {
      label: "Einführen",
      effects: { Zufriedenheit: -1, Bildung: -2 }
    },
    right: {
      label: "Nicht einführen",
      effects: { Zufriedenheit: -1, Bildung: +2 }
    }
  },

  {
    id: 15,
    prompt: "Freibäder sollen verboten werden, um Wasser zu sparen.",
    left: {
      label: "Verbieten",
      effects: { Zufriedenheit: -1, Bildung: +1, Finanzen: -1, Sicherheit: -1 }
    },
    right: {
      label: "Nicht verbieten",
      effects: { Zufriedenheit: +1, Finanzen: +1, Sicherheit: +1 }
    }
  },

  {
    id: 16,
    prompt: "Baden-Würtemberg soll seine eigene Währung bekommen, den Schwobentaler.",
    left: {
      label: "Einführen",
      effects: { Finanzen: -1, Zufriedenheit: -1, Bildung: +1 }
    },
    right: {
      label: "Nicht einführen",
      effects: { Finanzen: -1 }
    }
  },
  {
    id: 17,
    prompt: "Ausbau von Windrädern auf Schwarzwald-Gipfeln.",
    left: {
      label: "Bauen",
      effects: { Finanzen: +2, Zufriedenheit: -1 }
    },
    right: {
      label: "Nicht bauen",
      effects: { Finanzen: -1, Zufriedenheit: +1 }
    }
  },

  {
    id: 18,
    prompt: "Einführung einer Schwarzwaldmaut für Touristen.",
    left: {
      label: "Einführen",
      effects: { Finanzen: +2, Zufriedenheit: -1 }
    },
    right: {
      label: "Nicht einführen",
      effects: { Sicherheit: -1, Zufriedenheit: +1 }
    }
  },

  {
    id: 19,
    prompt: "Abschaffung des Bargelds.",
    left: {
      label: "Abschaffen",
      effects: { Sicherheit: +1, Zufriedenheit: -1 }
    },
    right: {
      label: "Nicht abschaffen",
      effects: { Sicherheit: -1, Zufriedenheit: +1 }
    }
  },
  {
    id: 20,
    prompt: "Verbot von Alkohol.",
    meta: "Zufriedenheit",
    left: {
      label: "Verbieten",
      effects: { Sicherheit: -1, Bildung: +1 }
    },
    right: {
      label: "Nicht verbieten",
      effects: { Zufriedenheit: +1, Sicherheit: -1 }
    }
  },

    {
    id: 21,
    prompt: "Bau einer Seilbahn über dem Schwarzwald, um den Tourismus zu fördern.",
    left: {
      label: "Bauen",
      effects: { Finanzen: +2, Zufriedenheit: -1 }
    },
    right: {
      label: "Nicht bauen",
      effects: { Finanzen: -1, Zufriedenheit: +1 }
    }
  },

  {
    id: 22,
    prompt: "Verbot von Einwegplastik.",
    left: {
      label: "Verbieten",
      effects: { Sicherheit: +1, Finanzen: -1 }
    },
    right: {
      label: "Nicht verbieten",
      effects: { Sicherheit: -1 }
    }
  },

  {
    id: 24,
    prompt: "Verbot von Religion.",
    left: {
      label: "Verbieten",
      effects: { Sicherheit: +1, Zufriedenheit: -2 }
    },
    right: {
      label: "Nicht verbieten",
      effects: { Sicherheit: -1, Zufriedenheit: +1 }
    }
  },

  {
    id: 25,
    prompt: "Einführung einer 4-Tage Woche.",
    left: {
      label: "Umsetzen",
      effects: { Zufriedenheit: +2, Finanzen: -1 }
    },
    right: {
      label: "Ablehnen",
      effects: { Zufriedenheit: -1, Finanzen: +1 }
    }
  }
];


const RESCUE_CARDS = {
  Zufriedenheit: [
    { prompt: "Du kannst die Bevölkerung durch eine große Gratis-Show beruhigen.", left: { label: "Show finanzieren (-5 Finanzen)", effects: { Zufriedenheit: +4, Finanzen: -5 } }, right: { label: "Show absagen", effects: {} } },
    { prompt: "Du kannst eine landesweite PR-Kampagne starten.", left: { label: "Kampagne starten (-3 Bildung)", effects: { Zufriedenheit: +3, Bildung: -3 } }, right: { label: "Nicht starten", effects: {} } }
  ],
  Sicherheit: [
    { prompt: "Geheime Eliteeinheit einsetzen?", left: { label: "Einsetzen (-4 Finanzen)", effects: { Sicherheit: +4, Finanzen: -4 } }, right: { label: "Nein", effects: {} } },
    { prompt: "Strengere Gesetze erlassen?", left: { label: "Erlassen (-3 Zufriedenheit)", effects: { Sicherheit: +3, Zufriedenheit: -3 } }, right: { label: "Nein", effects: {} } }
  ],
  Bildung: [
    { prompt: "Elite-Unis fördern?", left: { label: "Fördern (-4 Finanzen)", effects: { Bildung: +4, Finanzen: -4 } }, right: { label: "Nein", effects: {} } },
    { prompt: "Unis von Experten leiten?", left: { label: "Einsetzen (-3 Zufriedenheit)", effects: { Bildung: +3, Zufriedenheit: -3 } }, right: { label: "Nein", effects: {} } }
  ],
  Finanzen: [
    { prompt: "Schwarze Kassen öffnen?", left: { label: "Öffnen (-4 Sicherheit)", effects: { Finanzen: +4, Sicherheit: -4 } }, right: { label: "Nein", effects: {} } },
    { prompt: "Einmalige Steuererhöhung?", left: { label: "Einführen (-3 Zufriedenheit)", effects: { Finanzen: +3, Zufriedenheit: -3 } }, right: { label: "Nein", effects: {} } }
  ]
};

const EVENT_DECK = [
  {
    id: "E1",
    prompt: "⚠️ Stromausfall im ganzen Land. Sofort reagieren?",
    left: { label: "Notfallplan aktivieren", consequence: "Strom kommt schneller zurück, kostet aber Geld.", effects: { Sicherheit: +1, Finanzen: -2, Zufriedenheit: +1 } },
    right:{ label: "Ignorieren", consequence: "Chaos, Plünderungen, Wut.", effects: { Sicherheit: -2, Zufriedenheit: -1 } },
    timeout:{ consequence: "Zu langsam. Das Chaos nimmt seinen Lauf.", effects: { Sicherheit: -2, Zufriedenheit: -1 , Finanzen: -1} }
  },
  {
    id: "E2",
    prompt: "⚠️ In deinem Land ensteht eine Rebellion!",
    left: { label: "Angreifen", consequence: "Du vernichtest sie und die Bevölkerung erzittert.", effects: { Sicherheit: +2, Finanzen: -1, Zufriedenheit: -2 } },
    right:{ label: "Verhandeln", consequence: "Ihr kommt auf einen Kompromiss, doch wirkt Schwach auf die Bevölkerung.", effects: { Sicherheit: -2, Zufriedenheit: +2 } },
    timeout:{ consequence: "Die Rebellen richten großen Schaden an.", effects: { Sicherheit: -1, Zufriedenheit: -1 , Finanzen: -1} }
  },
  {
    id: "E3",
    prompt: "⚠️ Skandalvideo über dich geht viral. Statement?",
    left: { label: "Abwiegeln", consequence: "Einige glauben es, andere werden misstrauisch.", effects: { Zufriedenheit: -1, Bildung: -1 } },
    right:{ label: "Transparenz", consequence: "Du wirkst menschlich, aber machst dich angreifbar.", effects: { Zufriedenheit: +1, Sicherheit: -1 } },
    timeout:{ consequence: "Kein Statement. Die Gerüchte gewinnen.", effects: { Zufriedenheit: -2 } }
  }
];

const GAME_OVER_MESSAGES = {
  Bildung: {
    low: "Dein Land ist verblödet. Es ist rückständig geworden und deine Bevölkerung bewirft sich auf offener Straße mit Kacke.",
    high: "Deine Bevölkerung ist zu schlau geworden. Sie durchschauen deine Tricks und lassen sich von niemandem regieren."
  },
  Sicherheit: {
    low: "Die niedrigen Sicherheitsstandards haben deine gierigen Nachbarn aufmerksam gemacht. Sie ziehen in den Krieg gegen dich und gewinnen.",
    high: "Du wurdest zu gierig. Du startest einen Krieg mit dem Nachbarland, verlierst jedoch."
  },
  Zufriedenheit: {
    low: "Die Leute waren unzufrieden mit dir. Du wirst von deinen engsten Beratern im Schlaf erschossen.",
    high: "Die Menschen sind fett und faul geworden. Keiner macht mehr seinen Job. Du wirst im Schlaf erschossen."
  },
  Finanzen: {
    low: "Krankenhäuser brechen zusammen. Alle werden krank und sterben an ihren Qualen.",
    high: "Das ganze Geld hat dich korrupt gemacht. Deine Bevölkerung lehnt sich gegen dich auf."
  }
};

/* ---------- Validation ---------- */
function validateData() {
  const known = new Set(CATEGORIES);
  const warn = (msg, obj) => console.warn(`[DATA] ${msg}`, obj);

  for (const card of DECK) {
    if (!card || typeof card !== "object") continue;
    if (card.meta && !known.has(card.meta)) warn(`Unbekannte meta-Kategorie "${card.meta}" (Karte id=${card.id})`, card);
    for (const s of ["left", "right"]) {
      const eff = card?.[s]?.effects;
      if (!eff) continue;
      for (const k of Object.keys(eff)) if (!known.has(k)) warn(`Unbekannte effects-Kategorie "${k}" (Karte id=${card.id}, side=${s})`, card);
    }
  }

  for (const ev of EVENT_DECK) {
    for (const s of ["left", "right", "timeout"]) {
      const eff = ev?.[s]?.effects;
      if (!eff) continue;
      for (const k of Object.keys(eff)) if (!known.has(k)) warn(`Unbekannte Event-effects-Kategorie "${k}" (Event id=${ev.id}, side=${s})`, ev);
    }
  }
}


function buildIllustrationForCard(cardData) {
  const src = CARD_IMAGES[cardData.id];
  if (!src) return null;

  const wrap = create("div", "illustration");

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Illustration zu Karte ${cardData.id}`;
  img.loading = "eager";

  // Falls Datei fehlt -> Bildslot komplett entfernen (sauberer)
  img.addEventListener("error", () => {
    console.warn("[IMG] nicht gefunden:", src, "(Karte id=" + cardData.id + ")");
    wrap.remove();
  });

  wrap.appendChild(img);
  return wrap;
}











/* =========================================================
   Core: Random draw + State
   ========================================================= */

function sampleDeck(base, n) {
  const arr = base.slice();
  if (arr.length === 0) return [];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

const state = {
  index: 0,
  history: [],
  scores: {
    Bildung: START_SCORE,
    Sicherheit: START_SCORE,
    Zufriedenheit: START_SCORE,
    Finanzen: START_SCORE
  },

  startScreenDone: false,
  introLineIndex: 0,
  introDone: false,

  playDeck: sampleDeck(DECK, 10),
  rescueUsed: false,

  eventActive: false,
  eventSeenThisTurn: false
};



/* =========================================================
   UI: progress & scoreboard
   ========================================================= */

function updateProgress() {
  const total = state.playDeck.length || 1;
  const p = Math.round((state.index / total) * 100);
  const bar = $("#bar");
  if (bar) bar.style.width = p + "%";
}

function updateBars() {
  for (const cat of CATEGORIES) {
    const el = document.getElementById("bar-" + cat);
    if (!el) continue;

    const val = state.scores[cat];
    const percent = (val / SCORE_MAX) * 100;

    el.style.width = percent + "%";
    el.style.background = "#FDF6EA"; // IMMER weiß
  }
}


/* =========================================================
   Points overlay
   ========================================================= */

function showPointsAnimation(effects) {
  const overlay = document.getElementById("points-overlay");
  if (!overlay) return;

  const wrap = document.createElement("div");
  wrap.className = "points-float";

  wrap.innerHTML = Object.entries(effects)
    .map(([cat, val]) => {
      const cls = val >= 0 ? "points-positive" : "points-negative";
      const sign = val >= 0 ? "+" : "";
      return `<div class="${cls}">${cat}: ${sign}${val}</div>`;
    })
    .join("");

  overlay.appendChild(wrap);
  setTimeout(() => wrap.remove(), 1300);
}

/* =========================================================
   Volume
   ========================================================= */

function loadVolume() {
  const saved = localStorage.getItem(VOLUME_KEY);
  if (saved !== null) {
    const v = Number(saved);
    if (!Number.isNaN(v)) masterVolume = Math.min(1, Math.max(0, v));
  }
}

function setVolume(v01) {
  masterVolume = Math.min(1, Math.max(0, v01));
  localStorage.setItem(VOLUME_KEY, String(masterVolume));
  applyVolumeToAllSounds();
}

function initMusicToggle() {
  const btn = document.getElementById("music-toggle");
  if (!btn) return;

  updateMusicToggleBtn();
  btn.addEventListener("click", () => setMusicMuted(!musicMuted));
}


function initVolumeSlider() {
  const slider = document.getElementById("volume");
  if (!slider) return;

  slider.value = String(Math.round(masterVolume * 100));
  // sync CSS variable used for the styled filled-track
  slider.style.setProperty('--value', slider.value + '%');
  slider.addEventListener("input", () => {
    slider.style.setProperty('--value', slider.value + '%');
    setVolume(Number(slider.value) / 100);
  });
}

/* =========================================================
   Sound
   ========================================================= */

let currentGameOverSound = null;

function stopCurrentSound() {
  if (!currentGameOverSound) return;
  currentGameOverSound.pause();
  currentGameOverSound.currentTime = 0;
  currentGameOverSound = null;
}

/* =========================================================
   Music System (Intro + Random Loop + Timer overlay)
   ========================================================= */

const MUSIC_INTRO = "./sounds/Intro.mpeg";
const MUSIC_POOL = [
  "./sounds/MusikZwei.mpeg",
  "./sounds/MusikDrei.mpeg",
  "./sounds/MusikVier.mpeg"
];

const TIMER_SOUND = "./sounds/Timer.mp3";

let bgAudio = null;         // Hintergrundmusik (Intro + Pool)
let timerAudio = null;      // Timer-Sound (nur bei Event)
let bgPausedForTimer = false;
let musicStarted = false;

function applyVolumeToAllSounds() {
  const v = masterVolume;

  // GameOver
  if (currentGameOverSound) currentGameOverSound.volume = v;
    if (introSpeakAudio) introSpeakAudio.volume = v;


  // Musik + Timer: wenn gemutet -> 0, sonst normal
  const mv = musicMuted ? 0 : v;
  if (bgAudio) bgAudio.volume = mv;
  if (timerAudio) timerAudio.volume = musicMuted ? 0 : Math.min(1, v * 0.9);
}


// Shuffle helper
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let musicQueue = [];
let queueIndex = 0;

function rebuildMusicQueue() {
  musicQueue = shuffle(MUSIC_POOL);
  queueIndex = 0;
}

function ensureBgAudio() {
  if (!bgAudio) {
    bgAudio = new Audio();
    bgAudio.preload = "auto";
    bgAudio.volume = masterVolume;

    bgAudio.addEventListener("ended", () => {
      // Wenn Intro fertig -> nächste aus Pool, danach immer weiter
      playNextBgTrack();
    });
  }
  return bgAudio;
}

function playNextBgTrack() {
  // Wenn wir gerade wegen Timer pausieren: NICHT wechseln
  if (bgPausedForTimer) return;

  if (musicQueue.length === 0 || queueIndex >= musicQueue.length) {
    rebuildMusicQueue();
  }

  const next = musicQueue[queueIndex++];
  const a = ensureBgAudio();
  a.src = next;
  a.currentTime = 0;

  a.play().catch((e) => console.warn("[MUSIC] play blocked:", e));
}

async function startGameMusic() {
  if (musicStarted) return;
  musicStarted = true;

  rebuildMusicQueue();

  const a = ensureBgAudio();
  a.src = MUSIC_INTRO;
  a.currentTime = 0;
  applyVolumeToAllSounds();

  try {
    await a.play();
    console.log("[MUSIC] Intro gestartet:", a.src);
  } catch (e) {
    console.warn("[MUSIC] Intro blocked/failed:", e);
  }
}


function pauseGameMusicForTimer() {
  if (!bgAudio) return;
  if (bgAudio.paused) return;

  bgPausedForTimer = true;
  bgAudio.pause();
}

function resumeGameMusicAfterTimer() {
  if (!bgAudio) {
    bgPausedForTimer = false;
    return;
  }

  bgPausedForTimer = false;

  // Wenn Musik schon beendet war oder keine Quelle: nächste Track starten
  if (!bgAudio.src) {
    playNextBgTrack();
    return;
  }

  bgAudio.play().catch((e) => console.warn("[MUSIC] resume blocked:", e));
}

function ensureTimerAudio() {
  if (!timerAudio) {
    timerAudio = new Audio(TIMER_SOUND);
    timerAudio.preload = "auto";
    timerAudio.loop = true;          // Timer soll durchlaufen
    timerAudio.volume = Math.min(1, masterVolume * 0.9);
  }
  return timerAudio;
}

function startTimerSound() {
  const t = ensureTimerAudio();
  applyVolumeToAllSounds();
  t.currentTime = 0;
  t.play().catch((e) => console.warn("[TIMER] play blocked:", e));
}

function stopTimerSound() {
  if (!timerAudio) return;
  timerAudio.pause();
  timerAudio.currentTime = 0;
}

function stopAllMusicAndTimer() {
  bgPausedForTimer = false;

  if (timerAudio) {
    timerAudio.pause();
    timerAudio.currentTime = 0;
  }

  if (bgAudio) {
    bgAudio.pause();
    bgAudio.currentTime = 0;
    bgAudio.src = "";
  }

  musicStarted = false;
}


let introSpeakAudio = null;
let introSpeakToggle = 0;

function stopIntroSpeak() {
  if (!introSpeakAudio) return;
  introSpeakAudio.pause();
  introSpeakAudio.currentTime = 0;
  introSpeakAudio = null;
}

function playIntroSpeakForLine(lineIndex) {
  // Sicherheit: wenn Intro vorbei ist -> nix mehr abspielen
  if (state.introDone) return;

  // Abwechselnd pro Satz: 0,1,0,1...
  const idx = lineIndex % 2;
  const src = INTRO_SPEAK_SOUNDS[idx];
  if (!src) return;

  // laufenden Sprechsound stoppen und neu starten
  stopIntroSpeak();

  introSpeakAudio = new Audio(src);
  introSpeakAudio.volume = masterVolume;     // Lautstärkeregler greift
  introSpeakAudio.play().catch((e) => console.warn("[INTRO SPEAK] blocked:", e));
}



const END_SOUND_FILES = {
  Finanzen: { high: "./sounds/FinanzenZuViel.mp3", low: "./sounds/FinanzenZuWenig.mp3" },
  Bildung: { high: "./sounds/BildungZuViel.mp3", low: "./sounds/BildungZuWenig.mp3" },
  Sicherheit: { high: "./sounds/SicherheitZuViel.mp3", low: "./sounds/SicherheitZuWenig.mp3" },
  Zufriedenheit: { high: "./sounds/ZufriedenheitZuViel.mp3", low: "./sounds/ZufriedenheitZuWenig.mp3" }
};



function playEndSound(cat, reason) {
  stopCurrentSound();

  const side = reason === "zu hoch" ? "high" : "low";
  const file = END_SOUND_FILES?.[cat]?.[side];

  if (!file) {
    console.warn("[SOUND] missing mapping for:", cat, reason);
    return;
  }

  currentGameOverSound = new Audio(file);
  currentGameOverSound.volume = masterVolume;
  currentGameOverSound.play().catch((err) => console.error("[SOUND] play failed:", file, err));
}

/* =========================================================
   Intro: Mascot Animation
   ========================================================= */

let introAnimIntervalId = null;

function clearIntroAnim() {
  if (introAnimIntervalId) {
    clearInterval(introAnimIntervalId);
    introAnimIntervalId = null;
  }
}

function playMascotSpeak(imgEl) {
  if (!imgEl) return;

  clearIntroAnim();

  let step = 0;
  const total = Math.max(1, INTRO_IMAGES_PER_LINE);

  introAnimIntervalId = setInterval(() => {
    step++;

    imgEl.src = (step % 2 === 0) ? MASCOT_FRAMES.talk : MASCOT_FRAMES.idle;

    if (step === total - 1) imgEl.src = MASCOT_FRAMES.blink;

    if (step >= total) {
      clearIntroAnim();
      imgEl.src = MASCOT_FRAMES.idle;
    }
  }, INTRO_FRAME_INTERVAL_MS);
}

/* =========================================================
   Event timers (global)
   ========================================================= */

let eventIntervalId = null;
let eventTimeoutId = null;

function clearEventTimers() {
  if (eventIntervalId) {
    clearInterval(eventIntervalId);
    eventIntervalId = null;
  }
  if (eventTimeoutId) {
    clearTimeout(eventTimeoutId);
    eventTimeoutId = null;
  }
}

/* =========================================================
   Game flow helpers
   ========================================================= */

function clampScore(v) {
  return Math.max(SCORE_MIN, Math.min(SCORE_MAX, v));
}

function applyEffects(effects) {
  for (const [cat, val] of Object.entries(effects)) {
    if (state.scores[cat] === undefined) state.scores[cat] = START_SCORE;
    state.scores[cat] = clampScore(state.scores[cat] + val);
  }
}

function isGameOverValue(val) {
  return val <= SCORE_MIN || val >= SCORE_MAX;
}

function shouldTriggerRescue(cat, val) {
  return !state.rescueUsed && isGameOverValue(val);
}

function checkGameOverOrRescue() {
  for (const [cat, val] of Object.entries(state.scores)) {
    if (shouldTriggerRescue(cat, val)) {
      launchRescue(cat);
      return true;
    }
    if (isGameOverValue(val)) {
      const reason = val <= SCORE_MIN ? "zu niedrig" : "zu hoch";
      showGameOver(cat, reason);
      return true;
    }
  }
  return false;
}

/* =========================================================
   Event system
   ========================================================= */

function rollChance(p) {
  return Math.random() < p;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shouldTriggerEvent() {
  if (!EVENT_DECK.length) return false;
  if (state.eventActive) return false;
  if (state.eventSeenThisTurn) return false;
  return rollChance(EVENT_CHANCE_PER_TURN);
}

function renderEventCard(eventData) {
  state.eventActive = true;
  pauseGameMusicForTimer();
startTimerSound();

  state.eventSeenThisTurn = true;

  clearEventTimers();

  const board = $("#board");
  board.innerHTML = "";

  const card = create("article", "card event");

  const prompt = create("div", "prompt");
  prompt.textContent = eventData.prompt;

  const meta = create("div", "meta");
  meta.textContent = `⏳ ${EVENT_TIMER_SECONDS}s`;

  const spacer = create("div");

  const choices = create("div", "choices");

  const btnLeft = create("button", "btn btn-left");
  btnLeft.textContent = `← ${eventData.left.label}`;

  const btnRight = create("button", "btn btn-right");
  btnRight.textContent = `${eventData.right.label} →`;

  let secondsLeft = EVENT_TIMER_SECONDS;
  let finished = false;

  const finalize = (side) => {
    if (finished) return;
    finished = true;

    state.eventActive = false;
    clearEventTimers();

    const pick = side === "timeout" ? eventData.timeout : eventData[side];
    const effects = pick?.effects || {};

    showPointsAnimation(effects);
    applyEffects(effects);

    state.history.push({
      id: eventData.id,
      choice: side,
      consequence: pick?.consequence || "",
      effects
    });

    updateBars();
    stopTimerSound();
resumeGameMusicAfterTimer();


    if (!checkGameOverOrRescue()) setTimeout(renderBoard, 300);
  };

  btnLeft.addEventListener("click", () => finalize("left"));
  btnRight.addEventListener("click", () => finalize("right"));

  eventIntervalId = setInterval(() => {
    secondsLeft--;
    meta.textContent = `⏳ ${Math.max(0, secondsLeft)}s`;
  }, 1000);

  eventTimeoutId = setTimeout(() => finalize("timeout"), EVENT_TIMER_SECONDS * 1000);

  choices.append(btnLeft, btnRight);
  card.append(prompt, meta, spacer, choices);
  board.appendChild(card);
}

/* =========================================================
   Rescue
   ========================================================= */

function launchRescue(cat) {
  state.rescueUsed = true;

  const options = RESCUE_CARDS[cat];
  if (!options || !options.length) {
    const reason = state.scores[cat] <= SCORE_MIN ? "zu niedrig" : "zu hoch";
    showGameOver(cat, reason);
    return;
  }

  const rescueCard = options[Math.floor(Math.random() * options.length)];

  clearEventTimers();
  state.eventActive = false;

  const board = $("#board");
  board.innerHTML = "";

  const card = create("article", "card rescue");

  const prompt = create("div", "prompt");
  prompt.textContent = "⚠️ Du stehst kurz vor dem Verlust!\n" + rescueCard.prompt;

  const choices = create("div", "choices");

  const btnLeft = create("button", "btn btn-left");
  btnLeft.textContent = rescueCard.left.label;

  const btnRight = create("button", "btn btn-right");
  btnRight.textContent = rescueCard.right.label;

  btnLeft.addEventListener("click", () => {
    applyEffects(rescueCard.left.effects || {});
    updateBars();

    if (isGameOverValue(state.scores[cat])) {
      const reason = state.scores[cat] <= SCORE_MIN ? "zu niedrig" : "zu hoch";
      showGameOver(cat, reason);
      return;
    }

    renderBoard();
  });

  btnRight.addEventListener("click", () => {
    if (isGameOverValue(state.scores[cat])) {
      const reason = state.scores[cat] <= SCORE_MIN ? "zu niedrig" : "zu hoch";
      showGameOver(cat, reason);
      return;
    }

    renderBoard();
  });

  choices.append(btnLeft, btnRight);
  card.append(prompt, document.createElement("div"), choices);
  board.appendChild(card);
}


function buildDecisionGallery(fullscreen = false) {
  const normalDecisions = state.history.filter(
    (h) => h && typeof h.id === "number" && (h.choice === "left" || h.choice === "right")
  );

  if (normalDecisions.length === 0) {
    const wrap = document.createElement("div");
    wrap.innerHTML = `<p style="margin:0;">Keine Entscheidungen gespeichert.</p>`;
    return wrap;
  }

  // Nur für fullscreen: Carousel mit Navigation
  if (fullscreen) {
    const container = document.createElement("div");
    container.className = "carousel-container";

    // State für das Carousel
    const carouselState = {
      currentIndex: 0,
      totalPages: 0,
      onIndexChange: null // Callback wenn Index sich ändert
    };

    // Linker Button
    const btnPrev = document.createElement("button");
    btnPrev.className = "carousel-btn carousel-btn-prev";
    btnPrev.textContent = "←";
    btnPrev.setAttribute("aria-label", "Vorheriger Artikel");

    // Carousel-Wrapper
    const carousel = document.createElement("div");
    carousel.className = "carousel-wrapper";

    // Pages erstellen
    const pages = [];
    for (const h of normalDecisions) {
      const map = DECISION_IMAGES[h.id];
      const src = map?.[h.choice];
      if (!src) continue;

      const page = document.createElement("div");
      page.className = "carousel-page";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Entscheidung Karte ${h.id} (${h.choice})`;
      img.loading = "lazy";

      page.appendChild(img);
      carousel.appendChild(page);
      pages.push(page);
    }

    carouselState.totalPages = pages.length;

    // Navigation (Counter) - INSIDE carousel for positioning
    const navContainer = document.createElement("div");
    navContainer.className = "carousel-nav";

    const counter = document.createElement("div");
    counter.className = "carousel-counter";
    counter.textContent = `1 / ${carouselState.totalPages}`;

    navContainer.appendChild(counter);
    carousel.appendChild(navContainer);

    // Rechter Button
    const btnNext = document.createElement("button");
    btnNext.className = "carousel-btn carousel-btn-next";
    btnNext.textContent = "→";
    btnNext.setAttribute("aria-label", "Nächster Artikel");

    const updateCarousel = () => {
      // Alle Pages verstecken
      pages.forEach((p, i) => {
        p.style.display = i === carouselState.currentIndex ? "grid" : "none";
      });
      counter.textContent = `${carouselState.currentIndex + 1} / ${carouselState.totalPages}`;

      // Buttons aktivieren/deaktivieren
      btnPrev.disabled = carouselState.currentIndex === 0;
      btnNext.disabled = carouselState.currentIndex === carouselState.totalPages - 1;

      // Callback aufrufen
      if (carouselState.onIndexChange) {
        carouselState.onIndexChange(carouselState.currentIndex);
      }
    };

    btnPrev.addEventListener("click", () => {
      if (carouselState.currentIndex > 0) {
        carouselState.currentIndex--;
        updateCarousel();
      }
    });

    btnNext.addEventListener("click", () => {
      if (carouselState.currentIndex < carouselState.totalPages - 1) {
        carouselState.currentIndex++;
        updateCarousel();
      }
    });

    container.append(btnPrev, carousel, btnNext);
    updateCarousel();

    // Speichere den carouselState auf dem Container für Zugriff von außen
    container._carousel = carouselState;

    return container;
  }

  // Altes Verhalten für nicht-fullscreen
  const wrap = document.createElement("div");
  wrap.className = "decision-gallery";

  for (const h of normalDecisions) {
    const map = DECISION_IMAGES[h.id];
    const src = map?.[h.choice];
    if (!src) continue;

    const page = document.createElement("div");
    page.className = "decision-page";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Entscheidung Karte ${h.id} (${h.choice})`;
    img.loading = "lazy";

    page.appendChild(img);
    wrap.appendChild(page);
  }

  return wrap;
}





/* =========================================================
   Game Over
   ========================================================= */

function showGameOver(cat, reason) {
  stopAllMusicAndTimer();  // << NEU

  clearEventTimers();
  clearIntroAnim();
  state.eventActive = false;

  playEndSound(cat, reason);

  const board = $("#board");
  board.innerHTML = "";

  const wrap = create("div", "card");
  wrap.style.display = "grid";
  wrap.style.placeItems = "center";

  const end = create("div", "end");

  const msgSet = GAME_OVER_MESSAGES[cat];
  const msg = msgSet
    ? (reason === "zu niedrig" ? msgSet.low : msgSet.high)
    : `Deine Politik hat ${cat} zerstört.`;

  end.innerHTML = `
    <h2>Spiel vorbei!</h2>
    <p><strong>${cat}</strong> ist ${reason} geworden.</p>
    <p>${msg}</p>
    <p style="margin-top:12px;"><strong>Diese Schlagzeilen haben deine Entscheidungen ausgelöst:</strong></p>
  `;

  const gallery = buildDecisionGallery(true); // ✅ fullscreen-gallery mit Navigation
  end.appendChild(gallery);

  // Button Container
  const btnContainer = create("div", "carousel-button-container");
  btnContainer.style.marginTop = "14px";
  btnContainer.style.display = "none"; // Initial versteckt

  const restartBtn = create("button", "btn");
  restartBtn.textContent = "Neu starten";
  restartBtn.onclick = restart;

  btnContainer.appendChild(restartBtn);
  end.appendChild(btnContainer);

  // Button sichtbar machen wenn letzter Artikel
  if (gallery._carousel) {
    const updateButtonVisibility = () => {
      const { currentIndex, totalPages } = gallery._carousel;
      btnContainer.style.display = currentIndex === totalPages - 1 ? "block" : "none";
    };

    // Initial checken
    updateButtonVisibility();

    // Setze Callback um Button zu aktualisieren
    gallery._carousel.onIndexChange = updateButtonVisibility;
  }

  wrap.appendChild(end);
  board.appendChild(wrap);

  const bar = $("#bar");
  if (bar) bar.style.width = "100%";
}



/* =========================================================
   Intro
   ========================================================= */

function renderStartScreen() {
  clearEventTimers();
  clearIntroAnim();

  const board = $("#board");
  board.innerHTML = "";

const card = create("article", "card start-screen");
// (Temporary inline safety styles removed during cleanup)

  const prompt = create("div", "prompt");
prompt.textContent = "DAS DIKTATORSPIEL";


  const meta = create("div", "meta");
  meta.textContent = "Bereit, dein Land zu regieren?";

  const choices = create("div", "choices");
  choices.style.gridTemplateColumns = "1fr";

  const btn = create("button", "btn");
  btn.textContent = "Starten";

  btn.addEventListener("click", async () => {
  // Musik MUSS innerhalb dieses Klicks gestartet werden (Autoplay-Regel)
  await startGameMusic();

  state.startScreenDone = true;
  renderBoard();
});


  choices.appendChild(btn);
  card.append(prompt, meta, choices);
  board.appendChild(card);

  // Fortschritt zurücksetzen
  const bar = $("#bar");
  if (bar) bar.style.width = "0%";
}





function renderIntro() {
  clearEventTimers();
  clearIntroAnim();
  state.eventActive = false;

  const board = $("#board");
  board.innerHTML = "";

  const card = create("article", "card intro");

  // Mascot
  const mascot = document.createElement("img");
  mascot.className = "mascot";
  mascot.src = MASCOT_FRAMES.idle;
  mascot.alt = "Maskottchen";

  // Textbereich
  const prompt = create("div", "prompt intro-text");

  // Hint
  const hint = create("div", "intro-hint");

  // Buttons erst am Ende
  const choices = create("div", "choices");
  choices.style.display = "none";

  const btnLeft = create("button", "btn btn-left");
  btnLeft.textContent = "Verstanden";

  const btnRight = create("button", "btn btn-right");
  btnRight.textContent = "Alles klar";

  const closeIntro = () => {
    clearIntroAnim();
    stopIntroSpeak(); 
    state.introDone = true;
    renderBoard();
  };

  btnLeft.addEventListener("click", (e) => {
    e.stopPropagation();
    closeIntro();
  });

  btnRight.addEventListener("click", (e) => {
    e.stopPropagation();
    closeIntro();
  });

  choices.append(btnLeft, btnRight);

  function updateIntroView() {
    const i = state.introLineIndex;

    // Dialog-zeilen rendern (damit CSS .dialog-line greifen kann)
    prompt.innerHTML = INTRO_SENTENCES
      .slice(0, i + 1)
      .map((t) => `<div class="dialog-line">${t}</div>`)
      .join("");
      playIntroSpeakForLine(state.introLineIndex);


    playMascotSpeak(mascot);

    const isLast = i >= INTRO_SENTENCES.length - 1;
    if (isLast) {
      hint.textContent = "";
      choices.style.display = "grid";
    } else {
      hint.textContent = "Klicke auf die Karte, um weiterzulesen …";
      choices.style.display = "none";
    }

    const bar = $("#bar");
    if (bar) bar.style.width = "0%";
  }

  // Klick auf Karte -> nächster Satz
  card.addEventListener("click", () => {
    if (state.introLineIndex < INTRO_SENTENCES.length - 1) {
      state.introLineIndex++;
      updateIntroView();
    }
  });

  updateIntroView();

  card.append(mascot, prompt, hint, choices);
  board.appendChild(card);
}

/* =========================================================
   Main render
   ========================================================= */

function renderBoard() {
  const board = $("#board");
  board.innerHTML = "";

  // 🟢 1. Start-Screen
  if (!state.startScreenDone) {
    renderStartScreen();
    return;
  }

  // 🟡 2. Intro mit Maskottchen
  if (!state.introDone) {
    renderIntro();
    return;
  }

  // 🔴 Safety: kein Deck
  if (!state.playDeck || state.playDeck.length === 0) {
    board.innerHTML = `
      <div class="card">
        <div class="end"><h2>Kein Fragen-Deck geladen</h2></div>
      </div>
    `;
    return;
  }

 // ✅ Sieg
if (state.index >= state.playDeck.length) {
  stopAllMusicAndTimer(); // << NEU

  clearEventTimers();
  clearIntroAnim();
  state.eventActive = false;

  // Spiel gewonnen: Gewinnsound abspielen
  stopCurrentSound();
  currentGameOverSound = new Audio("./sounds/gewonnen.mpeg");
  currentGameOverSound.volume = masterVolume;
  currentGameOverSound.play().catch((e) => console.warn("[SOUND] gewonnen play blocked:", e));

  const wrap = create("div", "card");
  wrap.style.display = "grid";
  wrap.style.placeItems = "center";

  const end = create("div", "end");

  end.innerHTML = `
    <h2>Gewonnen!</h2>
    <p>Du hast alle ${state.playDeck.length} Fragen beantwortet.</p>
    <p style="margin-top:12px;"><strong>Diese Schlagzeilen haben deine Entscheidungen ausgelöst:</strong></p>
  `;

  const gallery = buildDecisionGallery(true); // ✅ fullscreen-gallery mit Navigation
  end.appendChild(gallery);

  // Button Container
  const btnContainer = create("div", "carousel-button-container");
  btnContainer.style.marginTop = "20px";
  btnContainer.style.display = "none"; // Initial versteckt

  const playAgainBtn = create("button", "btn");
  playAgainBtn.textContent = "Nochmal spielen";
  playAgainBtn.onclick = restart;

  btnContainer.appendChild(playAgainBtn);
  end.appendChild(btnContainer);

  // Button sichtbar machen wenn letzter Artikel
  if (gallery._carousel) {
    const updateButtonVisibility = () => {
      const { currentIndex, totalPages } = gallery._carousel;
      btnContainer.style.display = currentIndex === totalPages - 1 ? "block" : "none";
    };

    // Initial checken
    updateButtonVisibility();

    // Setze Callback um Button zu aktualisieren
    gallery._carousel.onIndexChange = updateButtonVisibility;
  }

  wrap.appendChild(end);
  board.appendChild(wrap);

  const bar = $("#bar");
  if (bar) bar.style.width = "100%";
  return;
}


  // ⚡ Event-Interrupt
  if (shouldTriggerEvent()) {
    const ev = pickRandom(EVENT_DECK);
    renderEventCard(ev);
    return;
  }

  // 🎴 Normale Karte
  const cardData = state.playDeck[state.index];

  const card = create("article", "card");

  // Bildslot (optional)
  const illu = buildIllustrationForCard(cardData);
  if (illu) card.classList.add("has-illu");

  const prompt = create("div", "prompt");
  prompt.textContent = cardData.prompt;

  const spacer = create("div");
  const choices = create("div", "choices");

  const btnLeft = create("button", "btn btn-left");
  btnLeft.textContent = `← ${cardData.left.label}`;

  const btnRight = create("button", "btn btn-right");
  btnRight.textContent = `${cardData.right.label} →`;

  btnLeft.addEventListener("click", () => decide("left", cardData));
  btnRight.addEventListener("click", () => decide("right", cardData));

  choices.append(btnLeft, btnRight);

  // Reihenfolge: Prompt -> Bild -> Spacer -> Buttons
  if (illu) {
    card.append(prompt, illu, spacer, choices);
  } else {
    card.append(prompt, spacer, choices);
  }

  board.appendChild(card);

  updateProgress();
  updateBars();
} // ✅ renderBoard endet hier


/* =========================================================
   Decision (normale Frage)
   ========================================================= */

function decide(side, data) {
  const pick = data[side];
  const effects = pick.effects || {};

  state.eventSeenThisTurn = false;

  showPointsAnimation(effects);
  applyEffects(effects);

  state.history.push({
    id: data.id,
    choice: side,
    consequence: pick.consequence,
    effects
  });

  state.index++;
  updateBars();

  if (!checkGameOverOrRescue()) setTimeout(renderBoard, 180);
}

/* =========================================================
   Restart
   ========================================================= */

function restart() {
  clearEventTimers();
  clearIntroAnim();
  stopCurrentSound();

  state.index = 0;
  state.history = [];
  state.scores = {
    Bildung: START_SCORE,
    Sicherheit: START_SCORE,
    Zufriedenheit: START_SCORE,
    Finanzen: START_SCORE
  };

  state.playDeck = sampleDeck(DECK, 10);
  state.rescueUsed = false;

  state.startScreenDone = false;
  state.introDone = false;
  state.introLineIndex = 0;

  state.eventActive = false;
  state.eventSeenThisTurn = false;

  renderBoard();
  updateBars();
}


/* =========================================================
   Boot
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  loadVolume();
  loadMusicMute();       // <- NEU
  initVolumeSlider();
  initMusicToggle();     // <- NEU

  validateData();
  renderBoard();
  updateBars();
});


