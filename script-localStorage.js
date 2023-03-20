if (localStorage.getItem("fullname") === null) {
  document.getElementById("userId").innerHTML = "Anonymous";
} else {
  document.getElementById("userId").innerHTML =
    localStorage.getItem("fullname");
}

function update() {
  let fullname = document.getElementById("fullname").value;
  localStorage.setItem("fullname", fullname);
  document.getElementById("userId").innerHTML =
    localStorage.getItem("fullname");
}
