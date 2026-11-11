// Pequeñas interacciones visuales.
document.querySelectorAll(".reason-card").forEach(card => {
  card.addEventListener("click", () => {
    const wasOpen = card.classList.contains("open");
    document.querySelectorAll(".reason-card").forEach(item => item.classList.remove("open"));
    if (!wasOpen) card.classList.add("open");
  });
});

// Corazones discretos al pulsar en la pantalla (sin interferir con botones).
document.addEventListener("click", event => {
  if (event.target.closest("button, a")) return;
  const heart = document.createElement("span");
  heart.textContent = "♡";
  heart.className = "floating-heart";
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1300);
});
