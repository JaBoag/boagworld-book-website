function myFunction(myid) {
    var x = document.getElementById(myid);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }