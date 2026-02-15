const pianoKeys = document.querySelectorAll(".piano-keys .key");
const mapedKeys = [];

const playTune = (key) => {
  let audio = new Audio(`src/tunes/${key}.mp3`);
  audio.play();

  const clikedKey = document.querySelector(`[data-key="${key}" ]`);
  clikedKey.classList.add("active");
  (setTimeout(() => {
    clikedKey.classList.remove("active");
  }),
    150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});
