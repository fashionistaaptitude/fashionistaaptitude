// =========================================================
// fashionista aptitude — virtual closet
// =========================================================

const DEPOP_SHOP_URL = "https://www.depop.com/fashionistaaptitude/";

// ---------------------------------------------------------
// PRODUCT DATA
// Replace `depopUrl` with each item's real individual Depop
// listing link when you have it — falls back to the shop page.
// ---------------------------------------------------------
const PRODUCTS = [
  {
    name: "Pink Plaid Micro Skirt",
    price: "$28",
    size: "S / UK 8",
    condition: "Excellent — barely worn",
    category: "skirts",
    emoji: "🎀",
    isNew: true,
    description: "Low-rise pink plaid mini with silver buckle detail. Total early-2000s mall-goth energy — pairs perfectly with a baby tee or cropped cardigan.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Butterfly Print Baby Tee",
    price: "$18",
    size: "XS / S",
    condition: "Good — light vintage wash",
    category: "tops",
    emoji: "🦋",
    isNew: false,
    description: "Soft ribbed baby tee with a faded butterfly graphic. Slightly cropped fit, stretchy fabric, one of my favorite closet staples.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Powder Blue Track Jacket",
    price: "$34",
    size: "M",
    condition: "Excellent",
    category: "jackets",
    emoji: "🧥",
    isNew: true,
    description: "Zip-up track jacket in powder blue with white racing stripes. Oversized fit — great layered over a tank or worn zipped up as a top.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Rhinestone Heart Bag",
    price: "$22",
    size: "One size",
    condition: "Very good",
    category: "accessories",
    emoji: "👛",
    isNew: false,
    description: "Tiny heart-shaped shoulder bag covered in rhinestones. Fits a phone, lip gloss, and not much else — which is the point.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Lilac Low-Rise Jeans",
    price: "$36",
    size: "26 / S",
    condition: "Good — some fading",
    category: "bottoms",
    emoji: "👖",
    isNew: false,
    description: "Classic Y2K low-rise flare jeans in a soft lilac wash. Slight distressing at the hem gives them a lived-in, thrifted feel.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Cyber Y2K Sunglasses",
    price: "$14",
    size: "One size",
    condition: "Excellent",
    category: "accessories",
    emoji: "🕶️",
    isNew: true,
    description: "Tiny rectangular tinted sunglasses in iridescent pink. Deadstock find — never worn, just been sitting in my closet looking cute.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Cherry Halter Dress",
    price: "$40",
    size: "S/M",
    condition: "Excellent",
    category: "dresses",
    emoji: "🍒",
    isNew: false,
    description: "Fitted halter mini dress with an all-over cherry print. Side tie detail, fully lined, one of the most-loved pieces I've ever resold.",
    depopUrl: DEPOP_SHOP_URL
  },
  {
    name: "Butterfly Clip Set (x6)",
    price: "$9",
    size: "One size",
    condition: "New",
    category: "accessories",
    emoji: "✨",
    isNew: true,
    description: "Set of six mini butterfly hair clips in assorted pastel colors. The finishing touch every outfit from this closet deserves.",
    depopUrl: DEPOP_SHOP_URL
  }
];

// ---------------------------------------------------------
// JOURNAL DATA
// ---------------------------------------------------------
const ARTICLES = [
  {
    tag: "styling",
    title: "How I Style Vintage Skirts",
    excerpt: "Three ways I wear my favorite thrifted skirts — from mall-core to going out.",
    body: [
      "Vintage skirts are the backbone of my whole closet — they're one-of-a-kind, they photograph beautifully, and honestly they just fit differently than anything fast fashion makes today.",
      "My go-to formula is a fitted baby tee tucked in, a skirt that hits right at the hip, and chunky shoes to balance the silhouette. If the skirt has a print, I keep the top solid — if it's solid, I'll layer a printed cardigan over it.",
      "For nighttime I'll swap the baby tee for a halter top and add a tiny shoulder bag. Same skirt, completely different outfit. That's the whole magic trick of building a closet around a few great vintage pieces instead of a hundred trendy ones."
    ]
  },
  {
    tag: "restock",
    title: "New Finds In My Closet",
    excerpt: "A peek at what just got steamed, photographed, and added to the rack.",
    body: [
      "This week's haul came from an estate sale that had boxes and boxes of untouched early-2000s pieces — it was like finding a time capsule.",
      "I picked up a handful of track jackets, a stack of butterfly-print baby tees, and the cherry halter dress that's now one of my favorite things I've ever listed. Everything gets hand-washed, steamed, and photographed in natural light before it goes up.",
      "New pieces get posted to the closet here first before they go live on Depop, so keep an eye on this page (or sign up for the newsletter) if you want first pick."
    ]
  },
  {
    tag: "inspo",
    title: "Y2K Outfit Inspiration",
    excerpt: "The exact references I pull from when I'm building a fit board.",
    body: [
      "My moodboard folder is a chaotic mix of early 2000s catalog scans, old computer game screenshots, and paparazzi photos from 2003 — and somehow it all makes sense together.",
      "Low-rise everything, tiny cardigans, rhinestone accessories, and a slightly-too-much amount of pink. I look for pieces that feel a little exaggerated — the whole aesthetic is supposed to feel fun and a little over the top.",
      "If you're building your own Y2K wardrobe, start with one statement piece (a printed skirt, a track jacket, a heart-shaped bag) and build neutral basics around it so it doesn't feel like a costume."
    ]
  },
  {
    tag: "behind the seams",
    title: "How I Choose Pieces For My Shop",
    excerpt: "What makes the cut — and what doesn't — when I'm sourcing.",
    body: [
      "Not everything I find makes it into the closet. I'm picky about condition first — no stains, no broken zippers, nothing that needs more than a steam and a button.",
      "After that I ask myself if it's a piece I'd actually wear, or one of my friends would beg me for. If the answer is yes, it goes in the cart. I try to keep a mix of statement pieces and easy basics so there's something for a full outfit, not just one showstopper item.",
      "Every listing gets measured, photographed on a real body when possible, and described honestly — condition notes included. My goal is for you to know exactly what you're getting before it ships."
    ]
  }
];

// ---------------------------------------------------------
// STATE
// ---------------------------------------------------------
let activeFilter = "all";
let searchTerm = "";
const favorites = new Set(JSON.parse(localStorage.getItem("fa_favorites") || "[]"));

// ---------------------------------------------------------
// PANEL NAVIGATION
// ---------------------------------------------------------
const backdrop = document.getElementById("stage-backdrop");
const panels = document.querySelectorAll("[data-panel-content]");
const navBtns = document.querySelectorAll(".nav-btn");

function openPanel(name) {
  panels.forEach(p => p.classList.remove("open"));
  const target = document.getElementById(`panel-${name}`);
  if (target) target.classList.add("open");
  backdrop.classList.add("show");
  navBtns.forEach(b => b.classList.toggle("active", b.dataset.panel === name));
}

function closeAllPanels() {
  panels.forEach(p => p.classList.remove("open"));
  backdrop.classList.remove("show");
  navBtns.forEach(b => b.classList.remove("active"));
}

document.querySelectorAll("[data-panel]").forEach(el => {
  el.addEventListener("click", () => openPanel(el.dataset.panel));
});

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", closeAllPanels);
});

backdrop.addEventListener("click", closeAllPanels);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllPanels();
    closeModal();
  }
});

// show the welcome panel on first load so the room is never blank
openPanel("home");

// ---------------------------------------------------------
// CLOSET RENDERING
// ---------------------------------------------------------
const closetGrid = document.getElementById("closet-grid");
const closetFilters = document.getElementById("closet-filters");
const closetSearch = document.getElementById("closet-search");

const categories = ["all", ...new Set(PRODUCTS.map(p => p.category))];

function buildFilters() {
  closetFilters.innerHTML = categories.map(cat =>
    `<button class="filter-chip${cat === activeFilter ? " active" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");
  closetFilters.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.cat;
      buildFilters();
      renderCloset();
    });
  });
}

function renderCloset() {
  const term = searchTerm.trim().toLowerCase();
  closetGrid.innerHTML = PRODUCTS.map((p, i) => {
    const matchesCat = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = !term ||
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term);
    const visible = matchesCat && matchesSearch;
    const isFav = favorites.has(i);
    return `
      <article class="product-tile${visible ? "" : " hidden"}" data-index="${i}">
        <button class="tile-fav${isFav ? " active" : ""}" data-fav="${i}" aria-label="Favorite">♥</button>
        <div class="tile-img">
          ${p.isNew ? '<span class="sticker-new">new!</span>' : ""}
          <span>${p.emoji}</span>
        </div>
        <div class="tile-info">
          <h3>${p.name}</h3>
          <div class="tile-price">${p.price}</div>
          <div class="tile-meta">size ${p.size} · ${p.condition}</div>
          <span class="tile-btn">view on depop ➜</span>
        </div>
      </article>
    `;
  }).join("");

  closetGrid.querySelectorAll(".product-tile").forEach(tile => {
    tile.addEventListener("click", (e) => {
      if (e.target.closest(".tile-fav")) return;
      openModal(PRODUCTS[+tile.dataset.index]);
    });
  });

  closetGrid.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = +btn.dataset.fav;
      if (favorites.has(idx)) {
        favorites.delete(idx);
      } else {
        favorites.add(idx);
        showToast("added to favorites ♥");
        btn.classList.add("active");
        btn.style.animation = "none";
        requestAnimationFrame(() => btn.style.animation = "toolPulse .4s ease");
      }
      localStorage.setItem("fa_favorites", JSON.stringify([...favorites]));
      btn.classList.toggle("active", favorites.has(idx));
    });
  });
}

closetSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderCloset();
});

buildFilters();
renderCloset();

// ---------------------------------------------------------
// PRODUCT MODAL
// ---------------------------------------------------------
const modalOverlay = document.getElementById("modal-overlay");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalMeta = document.getElementById("modal-meta");
const modalDesc = document.getElementById("modal-desc");
const modalCta = document.getElementById("modal-cta");

function openModal(product) {
  modalImg.textContent = product.emoji;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalMeta.textContent = `size ${product.size} · ${product.condition}`;
  modalDesc.textContent = product.description;
  modalCta.href = product.depopUrl;
  modalOverlay.classList.add("show");
}

function closeModal() {
  modalOverlay.classList.remove("show");
}

document.getElementById("modal-close").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ---------------------------------------------------------
// JOURNAL RENDERING
// ---------------------------------------------------------
const journalGrid = document.getElementById("journal-grid");
const articleBody = document.getElementById("article-body");

function renderJournal() {
  journalGrid.innerHTML = ARTICLES.map((a, i) => `
    <article class="journal-card" data-index="${i}">
      <span class="j-tag">${a.tag}</span>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
    </article>
  `).join("");

  journalGrid.querySelectorAll(".journal-card").forEach(card => {
    card.addEventListener("click", () => openArticle(ARTICLES[+card.dataset.index]));
  });
}

function openArticle(article) {
  articleBody.innerHTML = `
    <span class="j-tag">${article.tag}</span>
    <h2 class="article-title">${article.title}</h2>
    <div class="article-body">${article.body.map(p => `<p>${p}</p>`).join("")}</div>
  `;
  openPanel("article");
}

document.getElementById("article-back").addEventListener("click", () => openPanel("journal"));

renderJournal();

// ---------------------------------------------------------
// CONTACT / NEWSLETTER (front-end only demo — no backend)
// ---------------------------------------------------------
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const note = document.getElementById("newsletter-note");
  note.textContent = "yay! you're on the list ✧ (demo only — connect this form to your email tool)";
  document.getElementById("newsletter-email").value = "";
  showToast("thanks for signing up! ✧");
});

// ---------------------------------------------------------
// TOAST
// ---------------------------------------------------------
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---------------------------------------------------------
// BOTTOM TOOLBAR INTERACTIONS
// ---------------------------------------------------------
document.getElementById("tool-search").addEventListener("click", () => {
  openPanel("closet");
  setTimeout(() => closetSearch.focus(), 300);
});

document.getElementById("tool-add").addEventListener("click", (e) => {
  e.currentTarget.classList.add("pulse");
  setTimeout(() => e.currentTarget.classList.remove("pulse"), 500);
  showToast(favorites.size ? `you have ${favorites.size} favorite${favorites.size > 1 ? "s" : ""} ♥` : "tap the ♥ on any item to save it!");
  openPanel("closet");
});

document.getElementById("tool-book").addEventListener("click", () => openPanel("journal"));

document.getElementById("tool-play").addEventListener("click", (e) => {
  playChime();
  e.currentTarget.classList.add("pulse");
  setTimeout(() => e.currentTarget.classList.remove("pulse"), 500);
});

const oopsQuotes = [
  "oops! ...did you mean to click that? ✧",
  "you found a secret button ♡",
  "low-rise jeans are so back",
  "this closet runs on glitter & good vibes",
  "psst — new drops every week!",
  "y2k forever, no notes"
];
document.getElementById("tool-oops").addEventListener("click", (e) => {
  showToast(oopsQuotes[Math.floor(Math.random() * oopsQuotes.length)]);
  e.currentTarget.classList.add("pulse");
  setTimeout(() => e.currentTarget.classList.remove("pulse"), 500);
});

document.getElementById("tool-plant").addEventListener("click", (e) => {
  const vase = document.getElementById("vase");
  vase.classList.remove("watered");
  void vase.offsetWidth;
  vase.classList.add("watered");
  showToast("🌸 the flowers say thank you");
  e.currentTarget.classList.add("pulse");
  setTimeout(() => e.currentTarget.classList.remove("pulse"), 500);
});

const themes = ["", "theme-lavender", "theme-mint"];
let themeIndex = 0;
document.getElementById("tool-settings").addEventListener("click", (e) => {
  themes.forEach(t => t && document.body.classList.remove(t));
  themeIndex = (themeIndex + 1) % themes.length;
  if (themes[themeIndex]) document.body.classList.add(themes[themeIndex]);
  const names = ["pink", "lavender", "mint"];
  showToast(`mood changed to ${names[themeIndex]} ✧`);
  e.currentTarget.classList.add("pulse");
  setTimeout(() => e.currentTarget.classList.remove("pulse"), 500);
});

// tiny cheerful chime using WebAudio (no external audio files needed)
function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.3);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.32);
    });
  } catch (err) { /* audio not available — silently skip */ }
}

// ---------------------------------------------------------
// CLICK SPARKLE TRAIL
// ---------------------------------------------------------
const sparkleLayer = document.getElementById("sparkle-layer");
const sparkleChars = ["✦", "✧", "✿", "❀"];
document.addEventListener("click", (e) => {
  if (e.target.closest("input, textarea")) return;
  const el = document.createElement("span");
  el.className = "click-sparkle";
  el.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
  el.style.left = `${e.clientX - 8}px`;
  el.style.top = `${e.clientY - 8}px`;
  sparkleLayer.appendChild(el);
  setTimeout(() => el.remove(), 700);
});
