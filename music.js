const song = document.getElementById("ourSong");
const musicToggle = document.getElementById("musicToggle");
const playSong = document.getElementById("playSong");
const vinyl = document.querySelector(".vinyl");

function updateMusicUI() {
  const playing = !song.paused;
  musicToggle.classList.toggle("playing", playing);
  vinyl?.classList.toggle("playing", playing);
  musicToggle.setAttribute("aria-label", playing ? "Pausar música" : "Reproducir música");
  if (playSong) playSong.querySelector("span").textContent = playing ? "Pausar canción" : "Reproducir canción";
}
async function toggleSong() {
  if (song.paused) {
    try { await song.play(); }
    catch { alert("Añade el archivo nuestra-cancion.mp3 en assets/music para escuchar la canción."); }
  } else song.pause();
  updateMusicUI();
}
musicToggle.addEventListener("click", toggleSong);
playSong?.addEventListener("click", toggleSong);
song.addEventListener("play", updateMusicUI);
song.addEventListener("pause", updateMusicUI);
song.addEventListener("ended", updateMusicUI);
