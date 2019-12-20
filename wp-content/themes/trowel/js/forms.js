  var $popUp = $('#popup');
  var $popUp2 = $('#popup-2');
  var $popOverlay = $('.pop-overlay');
  var $popWindow = $('#popup-window');
  var $popClose = $('.popup-window .btn-close');
 
  $popUp.on('click', function(){
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });

   $popUp2.on('click', function(){
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });
 
  $('.popup-close').on('click', function (event){
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });
 
  $(function(){
    $(document).on('click', function(event) {
      if ($(event.target).closest($popUp).length) return;
      if ($(event.target).closest($popWindow).length) return;
      $popOverlay.fadeOut();
      $popWindow.fadeOut();
      event.stopPropagation();
    });
  });


  // $(".subscribe-form").submit(function() {
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php",
  //     data: th.serialize()
  //   }).done(function() {
  //     // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
  //     $subscribeWindow.fadeOut();
  //     $popThankYouWindow.fadeIn();
  //     // используем куки на 30 дней, если человек заполнил форму
  //     // для куки обязательно должен быть подключен jquery.cookie.min.js
  //     $.cookie('hideTheModal', 'true', { expires: 30 });
  //     // очищаем форму
  //     setTimeout(function() {
  //       th.trigger("reset");
  //     }, 1000);
  //   });
  //   return false;
  // });