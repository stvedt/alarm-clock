(function(){
// console.log('hi');

var alarmClock = (function Clock(){

  // all things DOM
  var $time = document.querySelectorAll('.time'),
      $setAlarm = document.querySelectorAll('.set-alarm'),
      $hours = document.getElementById('hours'),
      $minutes = document.getElementById('minutes'),
      $alarmHour = document.getElementById('alarmHour'),
      $alarmMinute = document.getElementById('alarmMinute'),
      $set = document.getElementById('set'),
      $clear = document.getElementById('clear'),
      $dismiss = document.getElementById('dismiss'),
      $snooze = document.getElementById('snooze'),
      $body = document.querySelectorAll('body');

  //all things app
  // var alarms = [{hour:13, minute:51}];//hard code for testing // [{...},{...}]
  var alarms = [];

  function newClock(){
    //update clock time every second
    setInterval(setClockTime, 1000);
  }


  function setClockTime(){
    // console.log('setClockTime');
    var time = new Date();

      currentHours = time.getHours(),
      currentMinutes = time.getMinutes();
      currentSeconds = time.getSeconds();
      if (currentMinutes <10) {
        currentMinutes= '0'+ currentMinutes;
      }
      if (currentHours <10) {
        currentHours= '0'+ currentHours;
      }

    // console.log( currentHours, currentMinutes, currentSeconds);

    if (currentSeconds%5 === 0 && alarms[0]!== undefined){ //check every five seconds for testing
      // console.log('check alarm at minute pass');
      checkAlarm(currentHours, currentMinutes);
    }

    $hours.innerText = currentHours;
    $minutes.innerText = currentMinutes;
    $time[0].classList.add('ready');
  }

  function checkAlarm(hours, minutes){
    // console.log('checkAlarm');
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    if( hours === alarms[0].hour && minutes === alarms[0].minute ){
      // console.log('alarm goes off!')
      triggerAlarm();
    }
  }

  function setAlarm(hours, mins){

    hours = parseInt(hours);
    mins = parseInt(mins);
    // console.log(hours, mins);
    alarms[0]= {hour: hours, minute:mins};
    $setAlarm[0].classList.remove('clear');
    $setAlarm[0].classList.add('set');
  }

  function triggerAlarm(){
    //add class to make background color red with css transition
    document.body.classList.add("alarm");
  }

  function snooze(){
    // console.log('snooze');
    document.body.classList.remove("alarm");
    //increment minutes position by 1
    if(alarms[0].minute + 1 >= 60){ //check if we are at end of hour
      if(alarms[0].hour + 1 >= 24 ){ //check if we are at end of day
        alarms[0].hour=0;
      } else { //not at end of day
        alarms[0].hour+=1;
      }
    } else { // not at end of hour
      alarms[0].minute+=1
    }

  }

  function clearAlarm(){
    // console.log('clearAlarm')
    alarms.pop(0); //remove first alarm from alarms array

    $alarmHour.value = 0;
    $alarmMinute.value= 0;

    document.body.classList.remove("alarm");
    $setAlarm[0].classList.remove('set');
    $setAlarm[0].classList.add('clear');
  }

  function bindEvents(){
    $set.addEventListener('click', function(){
      setAlarm($alarmHour.value, $alarmMinute.value);
    });
    $clear.addEventListener('click', function(){
      clearAlarm();
    });
    $dismiss.addEventListener('click', function(){
      clearAlarm();
    });
    $snooze.addEventListener('click', function(){
      snooze();
    });

  }

  bindEvents();

  return {
    newClock: newClock,
    setAlarm: setAlarm,
    clearAlarm: clearAlarm,
    snooze: snooze
  }


})();

alarmClock.newClock();

})();
