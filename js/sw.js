var allowedDomains = [
  "https://nate-games.xyz",
  "https://www.nate-games.xyz",
  "http://localhost:8080",
  "https://nates-cdn.pages.dev",
];

// adblock detector start
async function detectAdBlock() {
  let adBlockEnabled = false;
  const googleAdUrl =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098145720803384";
  try {
    await fetch(new Request(googleAdUrl)).catch((_) => (adBlockEnabled = true));
  } catch (e) {
    adBlockEnabled = true;
  } finally {
    console.log(`AdBlock Enabled: ${adBlockEnabled}`);
    const adblockerMessage = document.getElementById("adblocker-message");
    adblockerMessage.style.display = "block";
    adBlockEnabled = false;
  }
}
detectAdBlock();
// adblocker detector end
var currentDomain = window.location.origin;
console.log("Page hostname is " + window.location.hostname); // https://www.w3schools.com/js/js_window_location.asp
console.log("Port number is " + window.location.port);

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://www.nate-games.xyz/en-us/sitelock";
}

function addScriptSrc(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

addScriptSrc(
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  function () {
    googleTranslateElementInit();
  }
);

addScript("console.log(msg);");
let msg = "Brought to you by http://nate-games.xyz";

function addScript(js) {
  var createdScript = document.createElement("script");
  document.body.appendChild(createdScript);
  createdScript.textContent = js;
}

// https://stackoverflow.com/questions/13121948/dynamically-add-script-tag-with-src-that-may-include-document-write

// Load settings
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.localStorage.getItem("stickyNavbar") == "true") {
    const navBar = document.querySelector(".header");
    navBar.setAttribute("id", "sticky-nav");
    const stickyNav = document.getElementById("sticky-nav");
    stickyNav.style.position = "sticky";
  } else {
    stickyNav.style.position = "relative";
  }
});

// secret alert start not really a secret lol
let sequence = [];

document.addEventListener("keydown", function (event) {
  sequence.push(event.key);

  if (sequence.join("") === "nate-bread") { 
    alert("Mustangs Rule! (the horse not car), also how did you find this? \n\n -breadghoti"); // quotes should work in the alert bc of the single quote
    sequence = [];
  }
});

// secret alert end