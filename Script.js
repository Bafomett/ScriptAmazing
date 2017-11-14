var timerId = setTimeout(function tick() { //Таймер для постоянного срабатывания функции 
  chkLastColor();
  timerId = setTimeout(tick, 34800);
}, 34800);

function chkForTwoBlues() {
  if (($('#wheel-timer').css('color') == 'rgb(69, 181, 218)') == true) {
    counter2();
  } else {counter2.currentCount = 0}
}

function chkLastColor() {
  chkForTwoBlues();
  if ((counter2.currentCount >= 2) || (counter.currentCount >0)) {
    var a = $('#balance').text();
    var repA = a.replace(",", "");
    var newBal = repA * 1;
    var b = localStorage.getItem('bal');
    var repB = b.replace(",", "");
    var oldBal = repB * 1;
    if (oldBal <= newBal) {
      counter.currentCount = 0;
      counter2.currentCount = 0;
    } else {
      counter();
    }
    howMuchBet();
  }
}

function howMuchBet() {
  counter();
  var a = $('#balance').text();
  var repA = a.replace(",", "");
  var newBal = repA * 1;
  var b = localStorage.getItem('bal');
  var repB = b.replace(",", "");
  var oldBal = repB * 1;
  var difBal = oldBal - newBal;
  var difBets = counter.currentCount;
  var difBet = difBets - 1;
  if (difBet = 0) {
    $('#bet-input').val(20);
    $('#bet-btn-3x').click();
    $('#bet-input').val(30);
    $('#bet-btn-2x').click();
  } else if (difBet = 1) {
    $('#bet-input').val(60);
    $('#bet-btn-3x').click();
    $('#bet-input').val(120);
    $('#bet-btn-2x').click();
  } else if (difBet = 2) {
    $('#bet-input').val(480);
    $('#bet-btn-3x').click();
    $('#bet-input').val(720);
    $('#bet-btn-2x').click();
  } else if (difBet = 3) {
    $('#bet-input').val(2880);
    $('#bet-btn-3x').click();
    $('#bet-input').val(4320);
    $('#bet-btn-2x').click();
  } else if (difBet = 4) {
    $('#bet-input').val(17280);
    $('#bet-btn-3x').click();
    $('#bet-input').val(25920);
    $('#bet-btn-2x').click();
  } else if (difBet = 5) {
    $('#bet-input').val(103680);
    $('#bet-btn-3x').click();
    $('#bet-input').val(155520);
    $('#bet-btn-2x').click();
  } else if (difBet = 6) {
    $('#bet-input').val(311062);
    $('#bet-btn-3x').click();
    $('#bet-input').val(466593);
    $('#bet-btn-2x').click();
  } else if (difBet = 7) {
    $('#bet-input').val(2177395);
    $('#bet-btn-3x').click();
    $('#bet-input').val(3266095);
    $('#bet-btn-2x').click();
  }

  return bal;
}

function makeCounter() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 0;
  return counter;
}
var counter = makeCounter();

function makeCounter2() {
  function counter2() {
    return counter2.currentCount++;
  };
  counter.currentCount = 0;
  return counter2;
}
var counter2 = makeCounter2();
