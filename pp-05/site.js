$.noConflict();

(function($) {
  
  $('#html5audio').remove();
  $('#html-ring').remove();
  $('body').append("<button>Ring the Doorbell</button>");

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
  
  $('button').on('click', function() {
    ringDoorbell();
  });
  
})(jQuery);
