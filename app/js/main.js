// $(window).load(function) () {
// 	$('.loader').fadeOut();
// 	$('.loader').delay(350).fadeOut('slow');
// });

$(document).ready(function() {

	  $("#menu").on("click","a", function (event) {
      event.preventDefault();

      var id  = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



});