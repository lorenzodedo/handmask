$('[lang="en"]').show();
$('[lang="es"]').hide();
$('[lang="it"]').hide();
$('[lang="ja"]').hide();
$('[lang="ko"]').hide();

function toggleLanguage(language) {
  if (language === "Korean") {
    document.getElementById("choice").innerHTML = "Korean";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').show();
  } else if (language === "Español") {
    document.getElementById("choice").innerHTML = "Español";
    $('[lang="es"]').show();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').hide();
  } else if (language === "Japanese") {
    document.getElementById("choice").innerHTML = "Japanese";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').show();
    $('[lang="ko"]').hide();
  } else if (language === "Italiano") {
    document.getElementById("choice").innerHTML = "Italiano";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').show();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').hide();

  } else {
    document.getElementById("choice").innerHTML = "English";
    $('[lang="es"]').hide();
    $('[lang="en"]').show();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').show();
  }
}

if ($(window).width() > 992) {
  var element = $("#paddiv");
  element.addClass("carousel-item2");
}
