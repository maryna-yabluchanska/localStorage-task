if (sessionStorage.getItem("fullname") === null) {
  console.log("name", sessionStorage.fullname);

  document.getElementById("upd").innerHTML = "Anonymous";
} else {
  document.getElementById("upd").innerHTML =
    sessionStorage.getItem("fullname");
}

function update() {
  console.log("name", sessionStorage.fullname);
  let fullname = document.getElementById("fullname").value;
  sessionStorage.setItem("fullname", fullname);
  document.getElementById("userId").innerHTML =
    sessionStorage.getItem("fullname");
}