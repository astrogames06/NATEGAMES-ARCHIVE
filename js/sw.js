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

// Load sticky navigation setting
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

// load sticky search-bar setting
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.localStorage.getItem("stickySearchbar") == "true") {
    const searchBar = document.querySelector(".textInputWrapper");
    searchBar.setAttribute("id", "sticky-searchbar");
    const stickysearchBar = document.getElementById("sticky-searchbar");
    stickysearchBar.style.position = "sticky";
    stickysearchBar.style.zIndex = "9999";
    stickysearchBar.style.top = "0";
    let searchButtonCreated = false;

    window.addEventListener("scroll", function () {
      if (window.scrollY >= window.innerHeight * 0.3) {
        if (!searchButtonCreated) {
          const navigation = document.querySelector(".menu");
          const dropdown = document.createElement("div");
          const dropdownContent = document.createElement("div");
          const searchbutton = document.createElement("button");
          const searchicon = document.createElement("i");
          dropdown.setAttribute("class", "dropdown");
          dropdownContent.setAttribute("class", "dropdown-content");
          searchicon.setAttribute("class", "fa-solid fa-magnifying-glass");
          const input = document.createElement("input");
          input.placeholder = "Search games..";
          input.setAttribute("class", "nice-input");
          input.setAttribute("id", "search-bar");
          input.setAttribute("oninput", "search()");
          navigation.prepend(dropdown);
          dropdown.prepend(searchbutton);
          dropdown.appendChild(dropdownContent);
          dropdownContent.prepend(input);
          searchbutton.setAttribute("class", "menu-item search-button dropbtn");
          searchbutton.textContent = "Search";
          searchbutton.prepend(searchicon);
          searchButtonCreated = true;
          setTimeout(() => {
            searchbutton.style.opacity = "1";
            searchbutton.style.transform = "scale(1)";
          }, 0);
        }
        stickysearchBar.style.transform = "scale(0)";
        stickysearchBar.style.transition = ".2s";
        stickysearchBar.style.opacity = "0";
      } else {
        stickysearchBar.style.opacity = "1";
        stickysearchBar.style.transform = "scale(1)";
        if (searchButtonCreated) {
          const navigation = document.querySelector(".menu");
          const searchbutton = navigation.querySelector(".menu-item");
          const dropdown = navigation.querySelector(".dropdown");
          if (dropdown) {
            searchbutton.style.opacity = "0";
            searchbutton.style.transform = "scale(0)";
            setTimeout(() => {
              navigation.removeChild(dropdown);
            }, 200);
          }
          searchButtonCreated = false;
        }
      }
    });
  }
});

// secret alert start not really a secret lol
let sequence = [];

document.addEventListener("keydown", function (event) {
  sequence.push(event.key);

  if (sequence.join("") === "fgg") {
    alert(
      "what"
    );
    sequence = [];
  }
});