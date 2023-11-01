// Only works on a 404 page
const urlMappings = {
  "/developer": "https://cdn.nate-games.xyz/dev"
};

function changeIframeSource() {
  const iframe = document.getElementById("game-id");
  const currentURL = window.location.pathname;
  const referrer = document.referrer;

  if (referrer.startsWith("https://www.nate-games.xyz/game/")) {
    if (urlMappings[currentURL]) {
      iframe.src = urlMappings[currentURL];
      iframe.style.display = "block";
      document.title = "Classes";
      changeFavicon("/game/class.png");
    } else {
      iframe.src = "";
      iframe.style.display = "none";
      resetFavicon();
    }
  }
}

function changeFavicon(newFaviconPath) {
  var link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = newFaviconPath;
}

function resetFavicon() {
  var link = document.querySelector('link[rel="icon"]');
  if (link) {
    link.parentNode.removeChild(link);
  }
}

window.addEventListener("load", changeIframeSource);