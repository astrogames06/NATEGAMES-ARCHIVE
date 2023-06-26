<!DOCTYPE html>
<html>

<head>
  <title>Map of Nostalgia | nate-games</title>
  <link rel="icon" type="image/png" href="./game/splash.svg" />
  <link rel="stylesheet" href="/0/assets/css/games.css" />
  <style>
    .center-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }

    #embed-container {
      position: relative;
      width: 1200px;
      height: 675px;
    }

    #embed-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    #fullscreen-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 9999;
      border: none;
      background-color: #000;
      padding: 10px;
      cursor: pointer;
      border-radius: 15px;
    }

    #fullscreen-icon {
      fill: #fff;
      stroke: none;
      width: 15px;
      height: 15px;
    }

    .fullscreen-text {
      text-align: center;
      margin-top: 10px;
    }
  </style>
</head>

<body>
  <header class="header">
    <div class="logo">
      <button class="menu-item" onclick="window.location.href='/'">𝗡𝗮𝘁𝗲-𝗴𝗮𝗺𝗲𝘀</button>
    </div>
    <nav class="menu">
      <button class="menu-item" onclick="window.location.href='/0/p/'; alert('hello nate-games user:\n\ \n\The soundboard is located under the apps page.');">
        Proxy
      </button>
      <button class="menu-item" onclick="window.location.href='/0/a/'">
        Apps
      </button>
      <button class="menu-item" onclick="window.location.href='/0/g/'">Games</button>
      <button class="menu-item" onclick="window.location.href='/0/ruffle/'">Flash Opener</button>
      <button class="menu-item" onclick="alert('hello nate-games user:\n\ \n\The soundboard is located under the apps page.');">Soundboard</button>
    </nav>
  </header>
  <button class="back" onclick="window.location.href='/0/g/'">
    <-- Back to Games
  </button>
  <div class="center-container">
    <div id="embed-container">
      <iframe src="./game/index.html" frameborder="0" allowfullscreen></iframe>
      <button id="fullscreen-button" onclick="toggleFullscreen()">
        <svg id="fullscreen-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.00002 3.99998H4.00004L4 9M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="fullscreen-text">
      Fullscreen Glitched? Play <a href="./game/" target="_self" style="color: blue;">Here</a>
    </div>
  </div>
  <script>
    function toggleFullscreen() {
      const iframe = document.querySelector('iframe');
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  </script>
</body>

</html>
