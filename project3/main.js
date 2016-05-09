
var username;

$('.submit-button').click(function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.shape-input').removeClass('is-hidden');
});


$('.option-0').click(function () {
  sendMessage(0);
});

$('.option-1').click(function () {
  sendMessage(1);
});

$('.option-2').click(function () {
  sendMessage(2);
});

$('.option-3').click(function () {
  sendMessage(3);
});

$('.option-4').click(function () {
  sendMessage(4);
});

$('.option-5').click(function () {
  sendMessage(5);
});

$('.option-6').click(function () {
  sendMessage(6);
});

$('.option-7').click(function () {
  sendMessage(7);
});

$('.option-8').click(function () {
  sendMessage(8);
});


function sendMessage(value) {
  Chat.sendMessage({
    sender: username,
    type: 'shape',
    value: value
  });
}

var shapeValues = {
  0: 'circle',
  1: 'smallCirc',
  2: 'square',
  3: 'smallSqua',
  4: 'rect',
  5: 'option-5',
  6: 'option-6',
  7: 'option-7',
  8: 'option-8',
  9: 'option-9',
  10: 'option-10',
  11: 'option-11',
  12: 'option-12'
};

Chat.onMessage(function (data) {

  var message = $('<div></div>');
  $(message).addClass('message');


  $(message).addClass(shapeValues[data.value]);
   $(message).addClass('option-'+ data.value);
  var randHue= Math.random() * 300;
  var randColor="hsl("+ randHue +",60%,60%)";

  $(message).css("background-color", randColor);

 
  var messageLabel = $('<div></div>');
  // $(messageLabel).html(data.sender);


  $(message).append(messageLabel);

  $('.message-container').append(message);

  var elem = document.getElementById('message-container');
      elem.scrollTop = elem.scrollHeight;
});

