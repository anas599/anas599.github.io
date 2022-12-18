function myFunction() {
  var x = document.getElementById("myLinks");
  var closeIcon = document.querySelector(".close-icon");
  var barsIcon = document.querySelector(".icon");
  if (x.classList.contains("open")) {
    x.classList.remove("open");
    x.style.display = "none";
    closeIcon.style.display = "none";
    barsIcon.style.display = "block";
  } else {
    x.classList.add("open");
    x.style.display = "flex";
    closeIcon.style.display = "block";
    barsIcon.style.display = "none";
  }
}
