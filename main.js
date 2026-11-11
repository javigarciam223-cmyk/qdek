const scenes = [...document.querySelectorAll(".scene")];
const counter = document.getElementById("sceneCounter");
const prev = document.getElementById("prevScene");
const next = document.getElementById("nextScene");
let current = 0;

function showScene(index) {
  current = Math.max(0, Math.min(index, scenes.length - 1));
  scenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === current);
    scene.setAttribute("aria-hidden", i === current ? "false" : "true");
  });
  counter.textContent = `${String(current + 1).padStart(2,"0")} / ${String(scenes.length).padStart(2,"0")}`;
  prev.disabled = current === 0;
  next.disabled = current === scenes.length - 1;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function goNext() { showScene(current + 1); }
function goPrev() { showScene(current - 1); }

document.querySelectorAll("[data-next]").forEach(button => button.addEventListener("click", goNext));
prev.addEventListener("click", goPrev);
next.addEventListener("click", goNext);
document.getElementById("restart").addEventListener("click", () => showScene(0));

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") goNext();
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") goPrev();
});

// Navegación táctil sencilla: deslizar horizontalmente cambia de escena.
let touchStartX = 0;
document.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].screenX; }, {passive:true});
document.addEventListener("touchend", event => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) > 90) delta < 0 ? goNext() : goPrev();
}, {passive:true});

showScene(0);
