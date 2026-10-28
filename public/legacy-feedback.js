$(document).ready(function () {
  var $form = $("form");

  $form.on("submit", function (e) {
    e.preventDefault();

    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var message = $.trim($("#message").val());
    var ok = true;

    $(".error").remove();
    $form.find("input, textarea").removeClass("error").attr("aria-invalid", "false");

    if (name === "") {
      $("#name")
        .addClass("error")
        .attr("aria-invalid", "true")
        .after('<span class="error" role="alert">Please enter your name.</span>');
      ok = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#email")
        .addClass("error")
        .attr("aria-invalid", "true")
        .after('<span class="error" role="alert">Please enter a valid email address.</span>');
      ok = false;
    }

    if (message === "") {
      $("#message")
        .addClass("error")
        .attr("aria-invalid", "true")
        .after('<span class="error" role="alert">Please enter a message.</span>');
      ok = false;
    }

    if (ok) {
      $("#status")
        .text("Thanks, " + name + "! Your feedback was received.")
        .hide()
        .fadeIn(400);
      $form[0].reset();
    }
  });
});