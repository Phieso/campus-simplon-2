/*jshint esversion : 6 */

const webaudio = (function webaudio() {
  "use strict";

  const dom = {
    volume: null,
    pitch: null,
    waveform: null,
  };

  const Context = window.AudioContext || window.webkitAudioContext;
  const audioContext = new Context();
  const osc1 = audioContext.createOscillator();
  osc1.type = 'sine'; // onde sinusoïdale — autres valeurs possibles : 'square', 'sawtooth', 'triangle' et 'custom'
  osc1.frequency.value = 2500; // valeur en hertz

  const gainNode = audioContext.createGain();

  function init() {
    console.log("DOM chargé => Ready to rock !!!");

    dom.volume = document.getElementById("osc_volume");
    dom.pitch = document.getElementById("osc_pitch");
    dom.waveform = document.getElementById("waveform_type");

    dom.volume.oninput = e => {
      const src = e.target || e.srcElement;
      gainNode.gain.value = Number(src.value);
    };
    dom.pitch.oninput = e => {
      const src = e.target || e.srcElement;
      osc1.frequency.value = Number(src.value);
    };
    dom.waveform.onchange = e => {
      const src = e.target || e.srcElement;
      osc1.type = src.value;
    };



    console.log(osc1);
    osc1.connect(gainNode);
    gainNode.connect(audioContext.destination);
    osc1.start();
  }

  window.addEventListener("DOMContentLoaded", init);

  return {};

}());
