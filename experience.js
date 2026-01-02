/* ========== CURSOR AURA ========== */
const aura = document.createElement("div");
aura.className = "cursor-aura";
document.body.appendChild(aura);

document.addEventListener("mousemove", e => {
  aura.style.left = e.clientX + "px";
  aura.style.top = e.clientY + "px";
});

/* ========== IDLE DETECTION ========== */
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    showWhisper();
  }, 7000); // 7 sec idle
}

["mousemove", "keydown", "click"].forEach(evt =>
  document.addEventListener(evt, resetIdle)
);

function showWhisper() {
  const whisper = document.createElement("div");
  whisper.className = "whisper";
  whisper.innerText = "hey… don’t stop now 🙂";
  document.body.appendChild(whisper);

  setTimeout(() => whisper.remove(), 3000);
}

resetIdle();

/* ========== HEARTBEAT BACKGROUND ========== */
let beat = true;
setInterval(() => {
  document.body.style.filter = beat
    ? "brightness(1.05)"
    : "brightness(0.98)";
  beat = !beat;
}, 1200);

/* ========== CINEMATIC TRANSITION ========== */
function cinematicExit(nextPage) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = nextPage;
  }, 1200);
}

/* ========== SECRET EASTER EGG ========== */
let clicks = 0;
document.addEventListener("click", () => {
  clicks++;
  if (clicks === 10) {
    const egg = document.createElement("div");
    egg.className = "easter";
    egg.innerText = "okay you’re officially special 💖";
    document.body.appendChild(egg);
    setTimeout(() => egg.remove(), 4000);
  }
});
