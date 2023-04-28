import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function () {
  throttle(function (data) {
    localStorage.setItem(VIDEO_CURRENT_TIME, data.seconds);
  }, 1000);
};
player.on('timeupdate', onPlay);
const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
