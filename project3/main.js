

var username;

$('.submit-button').click(function (e) {
  username = $('.name-input').val();
  $('.name-form').addClass('is-hidden');
  $('.shape-input').removeClass('is-hidden');
});


$('.option-0').click(function () { sendMessage(0) })
$('.option-1').click(function () { sendMessage(1).show() })
$('.option-2').click(function () { sendMessage(2) })
$('.option-3').click(function () { sendMessage(3) })
$('.option-4').click(function () { sendMessage(4) })
$('.option-5').click(function () { sendMessage(5) })
$('.option-6').click(function () { sendMessage(6) })
$('.option-7').click(function () { sendMessage(7) })
$('.option-8').click(function () { sendMessage(8) })
$('.option-9').click(function () { sendMessage(9) })
$('.option-10').click(function () { sendMessage(10) })
$('.option-11').click(function () { sendMessage(11) })
$('.option-12').click(function () { sendMessage(12) })

function sendMessage(val) {
  Chat.sendMessage({
    sender: username,
    type: 'shape',
    value: val
  });
}

var shapeMap = {
  0: 'circle',
  1: 'mallCircle', 
  2: 'square', 
  3: 'rectangle', 
  4: 'oval',
  5: 'triangle',
  6: 'smallTriangle',
  7: 'trapazoid',
  8: 'smalltrapazoid',
  9: 'smallOval',
  10: 'smallSquare',
  11: 'smallCircle',
  12: 'smallRectangle'
};
// var colorMap = {
//   5: 'border-color'
//   6: 'border-color'
//   7: 'border-color'
//   8: 'border-color'
// }

Chat.onMessage(function (messageData) {


  var message = $('<div></div>');
  $(message).addClass('message');
  $(message).html(messageData.sender);
  
  $(message).addClass('option-' + messageData.value);
  var randHue= Math.random() * 360;
  var randColor="hsl("+ randHue +",50%,50%)";

  $(message).css("background-color", randColor );
 

  var elem = document.getElementById('message-container');
      elem.scrollTop = elem.scrollHeight;

  // $(message).css('colorMap' + messageData.value, randColor);

  if (messageData.sender == username) {
    $(message).addClass('from-current-user');
  }
  $('.message-container').append(message);
});
