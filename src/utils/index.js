export const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images.push({ url: r(item), id: index }); });
  return images;
}
export const importAllAudio = (r) => {
  let audio = [];
  r.keys().map((item, index) => {
    let string = item.split("/")[1].split(".")[0]
    audio.push({ url: r(item), id: string
    });
  });
  return audio;
}
export const compareNumeric = (a, b) => {
  if(a.score >= 10 && b.score >= 10){
    if (a.score < b.score) return -1;
    if (a.score > b.score) return 1;
  }

}
export const playAudio = (src) => {
  document.querySelector(`#${src}`).play();
}
export const pauseAudio = (src) => {
  document.querySelector(`#${src}`).pause();
}
export const volumeUp = (src) => {
  let audioFile = document.querySelector(`#${src}`);
  if(audioFile.volume !== 1){
    let volume = ((audioFile.volume*100)+10)/100
    audioFile.volume=volume;
  }
}
export const volumeDown = (src) => {
  let audioFile = document.querySelector(`#${src}`);
  if(audioFile.volume !== 0){
    let volume = ((audioFile.volume*100)-10)/100
    audioFile.volume=volume;
  }
}
export default function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let num = Math.floor(Math.random() * (i + 1));
    let d = arr[num];
    arr[num] = arr[i];
    arr[i] = d;
  }
  return arr;
}

export const pause = async (time) => {
  return new Promise((resolve)=>{
      setTimeout(resolve, time);
  });
}

class TimerClass {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timeInterval = null;
  }
  timerFunction() {
    if(this.seconds <=59){
      this.seconds++;
    }
    if(this.seconds===60){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes === 60){
      this.hours++;
      this.minutes =0;
    }
  }
  start(){
    this.timeInterval = setInterval(this.timerFunction.bind(this),1000);
  }
  stop() {
    clearInterval(this.timeInterval);
  }
  get showTime() {
    if(!this.hours){
      return `${this.minutes}:${this.seconds}`
    }else{
      return `${this.hours}:${this.minutes} :${this.seconds}`
    }
  }
  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}

export const timer = new TimerClass();
