const isAccountSaved = localStorage.getItem("accountSaved");
let savedUsername = localStorage.getItem("username");
const usernameElement = document.getElementById("username");
const userAvatar = document.getElementById("user-avatar");

if (isAccountSaved) {
  if (savedUsername) {
    usernameElement.textContent = `${savedUsername}`;
  }
}

const savedAvatarUrl = localStorage.getItem("avatarUrl");
if (savedAvatarUrl) {
  userAvatar.src = savedAvatarUrl;
} else {
  window.location.href = "/en-us/account/logout/error";
}

document.getElementById("revealLevel").addEventListener("click", function () {
  var level = document.querySelector("#levelContent");
  if (level.style.display === "none" || level.style.display === "") {
    level.style.display = "block";
  } else {
    level.style.display = "none";
  }
});

// user profile start
var userLink = document.getElementById("user-href");
// github.com/${savedUsername}
userLink.href += `${savedUsername}`;
// user profile end