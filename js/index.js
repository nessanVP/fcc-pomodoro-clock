$(document).ready(function(){
  var buzzer = $('#buzzer')[0];
  $('#reset').hide();
  var count = parseInt($('#num').html());
  var breakTime = parseInt($('#breakTime').html());
  
  $('#start').click(function(event){
    event.preventDefault();
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *= 60;
    
    function timer() {
      $('#start, #takeTime, #addTime, #minusBreak, #addBreak, #breakTime, #title1, #title2').hide();
      $('#timeType').html('Session Time: ');
      count -= 1;
      if(count===0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $('#num').hide();
      }
      
      if(count % 60 >= 10) {
        $('#num').html(Math.floor(count / 60) + ":" + count % 60);
      } else{
        $('#num').html(Math.floor(count / 60) + ":0" + count % 60);
      }
      
      function breakTimer() {
        $('#timeType').html('Break Time: ');
        $('#breakTime').show();
        breakTime -= 1;
        
        if(breakTime===0) {
          clearInterval(startBreak);
          $('#reset').show();
          $('#timeType #breakTime').hide();
          buzzer.play();
        }
        
        if(breakTime % 60 >= 10) {
          $('#breakTime').html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
        } else{
          $('#breakTime').html(Math.floor(breakTime / 60) + ":0" + breakTime % 60);
        }
      }

    }
  });
  
  $('#reset').click(function(event) {
    event.preventDefault;
    count = 5;
    breakTime = 5;
    $('#num').html(count);
    $('#breakTime').html(breakTime);
    $('#start, #takeTime, #addTime, #minusBreak, #addBreak, #breakTime, #num, #title1, #title2').show();
    $('#reset').show();
  });
  
  $('#takeTime').click(function(event) {
    event.preventDefault();
    if(count > 5) {
      count -= 5;
      $('#num').html(count);
    }
  });
  $('#addTime').click(function(event) {
    event.preventDefault();
    count += 5;
    $('#num').html(count);
  });
  $('#minusBreak').click(function(event) {
    event.preventDefault();
    if(breakTime > 5) {
      breakTime -= 5;
      $('#breakTime').html(breakTime);
    }
  });
  $('#addBreak').click(function(event) {
    event.preventDefault();
    breakTime += 5;
    $('#breakTime').html(breakTime);
  });
})