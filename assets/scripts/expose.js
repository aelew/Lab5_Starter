// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelectEl = document.getElementById('horn-select');
  const hornImageEl = document.querySelector('#expose > img');
  const hornAudioEl = document.querySelector('#expose > audio');

  const volumeIconEl = document.querySelector('#volume-controls > img');
  const volumeSliderEl = document.getElementById('volume');

  const playButtonEl = document.querySelector('#expose > button');

  const jsConfetti = new JSConfetti();

  hornSelectEl.addEventListener('change', (e) => {
    const horn = e.target.value;

    hornImageEl.src = `assets/images/${horn}.svg`;
    hornImageEl.alt = e.target.options[e.target.selectedIndex].text; // option name

    hornAudioEl.src = `assets/audio/${horn}.mp3`;
  });

  volumeSliderEl.addEventListener('input', (e) => {
    const volume = e.target.valueAsNumber;
    hornAudioEl.volume = volume / 100;

    let level;
    if (volume === 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volumeIconEl.src = `assets/icons/volume-level-${level}.svg`;
    volumeIconEl.alt = `Volume level ${level}`;
  });

  playButtonEl.addEventListener('click', () => {
    if (!hornAudioEl.src.endsWith('.mp3')) {
      alert('Please select a horn first!');
      return;
    }

    hornAudioEl.play();

    if (hornSelectEl.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
