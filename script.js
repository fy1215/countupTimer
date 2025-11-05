let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let timerText = document.getElementById('timer')
let seconds = 0;
let timer;

let secToHML = (seconds) => {
  // 3600秒 = 1時間
  let hour = Math.floor(seconds / 3600);
  // 60秒 = 1分
  let min = Math.floor(seconds % 3600 / 60);
  // 余った秒数
  let sec = seconds % 60;
  let hh;
  if (hour < 100) {
    hh = (`00${hour}`).slice(-2);
  } else {
    hh = hour;
  }
  const mm = (`00${min}`).slice(-2);
  const ss = (`00${sec}`).slice(-2);
  let time = '';
  if (hour !== 0) {
    time = `${hh}:${mm}:${ss}`;
  } else {
    time = `${hh}:${mm}:${ss}`;
  }
  return time;
}

start.addEventListener('click', () => {
  seconds = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    timerText.textContent = secToHML(seconds);
  }, 1000);
})

stop.addEventListener('click', ()=>{
clearInterval(timer); 
})

reset.addEventListener('click',()=>{
  clearInterval(timer);
  timerText.textContent = secToHML(0);
})