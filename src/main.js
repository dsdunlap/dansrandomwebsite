import './style.css'
import videojs from 'video.js'

document.addEventListener('DOMContentLoaded', () => {
  // Initialize video.js
  const player = videojs('main-video', {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    // HLS is supported natively by video.js in modern browsers and polyfilled if needed
  });

  player.on('ready', () => {
    console.log('Video player is ready!');
  });

  player.on('play', () => {
    // We can add logic to intensify the glow effect when playing
    const glow = document.querySelector('.glow-effect');
    if(glow) glow.style.opacity = '0.4';
  });

  player.on('pause', () => {
    const glow = document.querySelector('.glow-effect');
    if(glow) glow.style.opacity = '0.1';
  });
});
