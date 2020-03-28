$('[lang="en"]').show();
$('[lang="es"]').hide();
$('[lang="it"]').hide();
$('[lang="ja"]').hide();
$('[lang="ko"]').hide();
$('[lang="ko"]').hide();
$('[lang="none"]').hide();
$('[lang="small"]').hide();

if ($(window).width() < 768) {
  $('[lang="big"]').hide();
  $('[lang="small"]').show();
}


function toggleLanguage(language) {
  if (language === "Korean") {
    document.getElementById("choice1").innerHTML = "Korean";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').show();
  } else if (language === "Español") {
    document.getElementById("choice1").innerHTML = "Español";
    $('[lang="es"]').show();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').hide();
  } else if (language === "Japanese") {
    document.getElementById("choice1").innerHTML = "Japanese";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').hide();
    $('[lang="ja"]').show();
    $('[lang="ko"]').hide();
  } else if (language === "Italiano") {
    document.getElementById("choice1").innerHTML = "Italiano";
    $('[lang="es"]').hide();
    $('[lang="en"]').hide();
    $('[lang="it"]').show();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').hide();
  } else {
    document.getElementById("choice1").innerHTML = "English";
    $('[lang="es"]').hide();
    $('[lang="en"]').show();
    $('[lang="it"]').hide();
    $('[lang="ja"]').hide();
    $('[lang="ko"]').hide();
  }
}
