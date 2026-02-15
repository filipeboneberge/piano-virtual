const pianoKeys = document.querySelectorAll(".piano-keys .key");

const playTune = (key) => {
  let audio = new Audio(`src/tunes/${key}.mp3`);
  audio.play();
};

pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});
