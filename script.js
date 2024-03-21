const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let startTimer;
hrs = min = sec = ms = 0;

btnStart.addEventListener("click", () => {
  btnStart.classList.add("start-active");
  btnStop.classList.remove("stop-active");

  startTimer = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateTime();
  }, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(startTimer);
  btnStart.classList.remove("start-active");
  btnStop.classList.add("stop-active");
});

btnReset.addEventListener("click", () => {
  hrs = min = sec = ms = 0;
  clearInterval(startTimer);
  updateTime();
  btnStart.classList.remove("start-active");
  btnStop.classList.remove("stop-active");
});

function updateTime() {
  //Formated Display
  hours = hrs < 10 ? "0" + hrs : hrs;
  minutes = min < 10 ? "0" + min : min;
  seconds = sec < 10 ? "0" + sec : sec;
  millisec = ms < 10 ? "0" + ms : ms;

  //display
  document.querySelector(".hrs").innerText = hours;
  document.querySelector(".min").innerText = minutes;
  document.querySelector(".sec").innerText = seconds;
  document.querySelector(".ms").innerText = millisec;
}
