const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

const mapedKeys = [];

let audio = new Audio("src/tunes/a.mp3");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.mp3`;
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

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

keysCheck.addEventListener("click", showHideKeys);
