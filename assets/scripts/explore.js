// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  if (typeof speechSynthesis === 'undefined') {
    alert('Speech synthesis is not supported in this browser!');
    return;
  }

  const voiceSelectEl = document.getElementById('voice-select');
  const textToSpeakEl = document.getElementById('text-to-speak');

  const faceImageEl = document.querySelector('#explore > img');
  const talkButtonEl = document.querySelector('#explore > button');

  const voices = new Map();

  speechSynthesis.addEventListener('voiceschanged', (e) => {
    e.target.getVoices().forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;

      voiceSelectEl.appendChild(option);
      voices.set(voice.name, voice);
    });
  });

  talkButtonEl.addEventListener('click', (e) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeakEl.value);
    utterance.voice = voices.get(voiceSelectEl.value);

    utterance.addEventListener('start', () => {
      faceImageEl.src = 'assets/images/smiling-open.png';
      faceImageEl.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImageEl.src = 'assets/images/smiling.png';
      faceImageEl.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}
