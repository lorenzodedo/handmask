$('[lang="en"]').show();
$('[lang="es"]').hide();
$('[lang="ko"]').hide();
$('[lang="none"]').hide();
$('[lang="small"]').hide();

function toggleLanguage(language) {
  if (language === "Korean") {
    document.getElementById("choice").innerHTML = "Korean";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="ko"]').show();
  } else if (language === "Spanish") {
    document.getElementById("choice").innerHTML = "Spanish";
    $('[lang="es"]').show();
    $('[lang="en"]').hide();
    $('[lang="ko"]').hide();
  } else {
    document.getElementById("choice").innerHTML = "English";
    $('[lang="es"]').hide();
    $('[lang="en"]').show();
    $('[lang="ko"]').hide();
  }
}

if ($(window).width() > 992) {
  var element = $("#paddiv");
  element.addClass("carousel-item2");
}

if ($(window).width() < 992) {
  $(".centered").addClass("mediumWidth");
}

if ($(window).width() < 768) {
  $(".centered-title").addClass("centered-title2");
  $(".centered-title").removeClass("centered-title");
  $(".centered-sub").addClass("centered-sub2");
  $(".centered-sub").removeClass("centered-sub");
  $(".centered-bot-title").addClass("centered-bot-title2");
  $(".centered-bot-title").removeClass("centered-bot-title");
  $(".centered-bot-sub").addClass("centered-bot-sub2");
  $(".centered-bot-sub").removeClass("centered-bot-sub");
}
