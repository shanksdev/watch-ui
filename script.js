let initalPos = 0;
let origin = {
  x:0,
  y:0
}
let defaultFactor = 15;
let defaultMinuteSecondsFactor = 6;
let angularDistance = 0;
let currentClock = document.querySelector(`#hour-clock`);
let hourVal, minutesVal, secondsVal;

let initializeClock = () => {
  console.log('all ready');
  let clock = document.querySelector('#hour-clock');
  let minutesClock = document.querySelector('#minutes-clock');
  let secondsClock = document.querySelector('#seconds-clock');

  hourVal = document.querySelector('#hour-val');
  minutesVal = document.querySelector('#minutes-val');
  secondsVal = document.querySelector('#seconds-val');

  let hours = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
  ];
  let minutes = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59'
  ];
  let seconds = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59'
  ];
  let hoursAngle = 0;
  let minutesAngle = 0;
  let secondsAngle = 0;
  let time = new Date();
  hourVal.value = time.getHours();
  minutesVal.value = time.getMinutes();
  secondsVal.value = time.getSeconds();
  for (let i = 0; i < hours.length; i++) {
    let span = document.createElement('span');
    let transformStyle = 'translateX(-50%) translateY(-50%)';
    span.innerHTML = `<span class="val">${hours[i]}</span>`;
    span.classList.add('hours');
    span.style.transform = transformStyle + ` rotateZ(${hoursAngle}deg)`;
    hoursAngle += defaultFactor;
    clock.appendChild(span);
  }

  for (let i = 0; i < minutes.length; i++) {
    let span = document.createElement('span');
    let transformStyle = 'translateX(-50%) translateY(-50%)';
    span.innerHTML = `<span class="val">${minutes[i]}</span>`;
    span.classList.add('minutes');
    span.style.transform = transformStyle + ` rotateZ(${minutesAngle}deg)`;
    minutesAngle += defaultMinuteSecondsFactor;
    minutesClock.appendChild(span);
  }
  
  for (let i = 0; i < seconds.length; i++) {
    let span = document.createElement('span');
    let transformStyle = 'translateX(-50%) translateY(-50%)';
    span.innerHTML = `<span class="val">${minutes[i]}</span>`;
    span.classList.add('minutes');
    span.style.transform = transformStyle + ` rotateZ(${secondsAngle}deg)`;
    secondsAngle += defaultMinuteSecondsFactor;
    secondsClock.appendChild(span);
  }

  setTimeout(()=>{
    let xAxis = document.querySelector('#x-axis');
    let yAxis = document.querySelector('#y-axis');
    origin.x = xAxis.clientWidth/2;
    origin.y = yAxis.clientHeight/2;
    console.log('origin = ', origin);

    //set current time
    clock.style.transform = `rotateZ(${(-1 * hourVal.value * defaultFactor)}deg)`;
    minutesClock.style.transform = `rotateZ(${(-1 * minutesVal.value * defaultMinuteSecondsFactor)}deg)`;
    secondsClock.style.transform = `rotateZ(${(-1 * secondsVal.value * defaultMinuteSecondsFactor)}deg)`;

  },10);

  let hoursInterval = setInterval(()=>{
    // let tmpTime = new Date();
    // time = new Date();
    hourVal.value = time.getHours();
    clock.style.transform = `rotateZ(${(-1 * hourVal.value * defaultFactor)}deg)`;
  },1000);

  let minutesInterval = setInterval(()=>{
    // let tmpTime = new Date();
    // time = new Date();
    minutesVal.value = time.getMinutes();
    // console.log('minutes = ', time.getMinutes());
    minutesClock.style.transform = `rotateZ(${(-1 * minutesVal.value * defaultMinuteSecondsFactor)}deg)`;
  },1000);

  let secondsInterval = setInterval(()=>{
    // let tmpTime = new Date();
    time = new Date();
    secondsVal.value = time.getSeconds();
    secondsClock.style.transform = `rotateZ(${(-1 * secondsVal.value * defaultMinuteSecondsFactor)}deg)`;
  },1000);

};

let ready = cb => {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(cb, 1);
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
};

ready(initializeClock);
