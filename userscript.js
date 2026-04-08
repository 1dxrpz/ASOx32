// ==UserScript==
// @name     ИТД Windows XP
// @version  1.2
// @grant    none
// @match		 https://xn--d1ah4a.com/*
// ==/UserScript==

const style = document.createElement('style');
style.innerHTML = `
body {
  background: url('https://raw.githubusercontent.com/1dxrpz/ASOx32/refs/heads/main/bliss.jpg') !important;
  background-size: cover !important;          /* Scales to cover container */
  background-position: center !important;      /* Centers the image within the container */
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  --text-secondary: black !important;
  --text-primary: black !important;
}

.BLErSWUX {
	border-radius: 0 !important;
}

article .lE9vN8i6,
.MtmuinE5 span,
.MtmuinE5 .vPid2PoY {
	color: white !important;
  font-weight: 600;
}

article .cGo-pqMK,
._8yAtdePh .MtmuinE5,
.jnSbHonP .MtmuinE5 {
	position: absolute;
  left: 10px;
  top: 5px;
  color: white !important;
  width: 100%;
}

.JNwvD1Vo,
.rjatUzSP,
.mJqJVajZ,
.QT6-NgzT,
section,
.mPvkVXNc,
article,
.CsIbGceP,
._4DLI4vxA,
.jnSbHonP,
.PUa4FZiJ,
._8yAtdePh,
.crrL7XgI {
  position: relative;
  background: #c0c0c0 !important;
  padding: 28px 12px 12px 12px; /* extra top space for title */
  font-family: Consolas, sans-serif !important;
  color: black !important;

  /* outer bevel */
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #404040;
  border-right: 2px solid #404040;
  border-radius: 0 !important;
  /* inner bevel */
  box-shadow:
    inset -2px -2px 0 #808080,
    inset 2px 2px 0 #dfdfdf;
}

.cZnuRugG {
	padding: 0;
  background: #c0c0c0 !important;
}

section span,
article span,
.CsIbGceP span,
._4DLI4vxA,
div[contenteditable="true"] {
  font-family: Consolas, Arial, sans-serif !important;
  color: black !important;
}

article.FdYjPIR3 {
  padding: 10px !important;
  padding-top: 40px !important;
  padding-bottom: 20px !important;
  padding-right: 20px !important;
}

button {
	user-select: none !important;
}

/* title bar using ::before */
section::before,
.mPvkVXNc::before,
article::before,
.CsIbGceP::before,
._8yAtdePh::before,
.jnSbHonP::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  height: 24px;
  background: linear-gradient(to right, #000080, #1084d0);
  color: white;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  padding-left: 6px;
}

article path,
.CsIbGceP path,
._4DLI4vxA path{
  stroke: black !important;
}
.lqZNoMkv a {
	display: block;
	width: 100% !important;
}

.VLVaXrye,
.MMIk7qf0,
.yIp1zbgr::after,
.lqZNoMkv a,
button,
article footer button,
nav a,
.DecvAv-7 > span,
.r2TckDeC,
._4DLI4vxA button,
.GstMeOlK,
.L6foA0ob,
._0haeBjBl button,
.hSN99swS {
  border-radius: 0 !important;
  background: #c0c0c0 !important;
  padding: 4px 12px !important;
  font-family: "MS Sans Serif", Arial, sans-serif !important;
  font-size: 13px !important;
  color: black !important;
  cursor: pointer !important;

  /* classic raised bevel */
  border-top: 2px solid #ffffff !important;
  border-left: 2px solid #ffffff !important;
  border-bottom: 2px solid #404040 !important;
  border-right: 2px solid #404040 !important;

  box-shadow:
    inset -2px -2px 0 #808080,
    inset 2px 2px 0 #dfdfdf;
}

.L6foA0ob {
	padding: 5px 0 !important;
  position: relative;
  bottom: -10px;
}

nav a {
  margin-bottom: 10px;
}

/* pressed effect */
.VLVaXrye:active,
.lqZNoMkv a:active,
button:active,
.hSN99swS:active,
article footer button:active,
nav a:active,
._4DLI4vxA button:active,
._0haeBjBl button:active,
.GstMeOlK:active,
.L6foA0ob:active {
  border-top: 2px solid #404040;
  border-left: 2px solid #404040;
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;

  box-shadow:
    inset 2px 2px 0 #808080,
    inset -2px -2px 0 #dfdfdf;
}

.lqZNoMkv a:focus,
button:focus,
article footer button:focus,
nav a:focus,
._4DLI4vxA button:focus,
.GstMeOlK:focus,
._0haeBjBl button:focus {
  outline: 1px dotted black;
  outline-offset: -4px;
}

.CNP0fBGd {
	display: flex;
}


.UK-OMndz {
	height: 50px !important;
  top: 50%;
}

.C4SARhpg {
	padding: 0 !important;
  border: none !important;
}
.hWCpL6Hf {
	padding: 9px 10px !important;
}
/* focus state (slightly darker text edge feel) */
.C4SARhpg:focus,
._2sS6K7hx:focus {
  outline: none;
  background: #ffffff;
}

/* disabled look */
.C4SARhpg:disabled {
  background: #c0c0c0;
  color: #808080;
}

.C4SARhpg {
	border-radius: 0;
  oveflow: visible !important;
//   flex: 0 !important;
}

._2mmgs8Ne {
	display: block;
}
.M1orzhg7 {
  flex: 0 !important;
  width: calc(100% - 40px);
}

.Zm7GdliE.vqhGsmVx {
	margin: 0 !important;
  padding: 0 !important;
  transform: none;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 40px !important;
  height: 100% !important;
}

.UoWopgfe,
textarea,
input.VUVtn1zM,
._2sS6K7hx,
.GKtAeZvh {
	border-radius: 0 !important;
	background: #eee !important;
  border: 2px solid !important;
  border-color: #404040 #FFFFFF #FFFFFF #404040 !important; /* sunken effect */
  padding: 3px 4px !important;
  font-family: Consolas, sans-serif !important;
  font-size: 16px !important;
  color: #000 !important;
  outline: none !important;
  box-sizing: border-box !important;
}

._2sS6K7hx {
	height: 40px;
  padding: 7px !important;
}

input.VUVtn1zM {
	padding: 10px !important;
  padding-left: 50px !important;
}

input:focus {
  border-color: #000000 #FFFFFF #FFFFFF #000000 !important;
  background: #fff !important;
}

.-irX9LBI:not(:last-child) {
  border-bottom: 1px solid #fff;
}

.TCFYTRkG:not(:first-child) {
  padding-left: 30px;
}

.TCFYTRkG:not(:last-child) .VgMMM-FP {
  padding-bottom: 30px;
}

.gRf2HMVj,
.sgbXxBQt {
	border-radius: 0 !important;
  width: 200px;
  background: #C0C0C0;
  border: 2px solid;
  border-radius: 0;
  border-color: #FFFFFF #404040 #404040 #FFFFFF; /* 3D effect */
  padding: 2px;
  font-family: Consolas, sans-serif;
  font-size: 13px;
  color: black;
  box-shadow: none;
}

.sgbXxBQt button {
	transition: 0;
	border: 0 !important;
  box-shadow: none !important;
  padding: 4px 20px 4px 24px !important;
  position: relative;
  cursor: pointer !important;
  white-space: nowrap !important;
}

.sgbXxBQt button:hover,
.csorFBDI:hover {
	transition: 0 !important;
  background: #000080 !important; /* classic navy blue */
  color: #FFFFFF !important;
}
.sgbXxBQt button:hover svg,
.csorFBDI:hover span {
	stroke: #fff;
  color: #fff;
}
.sgbXxBQt svg {
	stroke: #000;
  color: #000;
}

.yfGqJGgk {
	gap: 0;
}

.jnSbHonP {
	padding-bottom: 50px;
}

.nDnu9hhf {
	padding: 0 !important;
}

h1 {
	font-family: Consolas, sans-serif;
  
}

a.jjAXXJME,
.d4whLTgb,
a.NTrrYRK4 {
	text-decoration: none;
  color: magenta !important;
}

a.jjAXXJME:hover {
	text-decoration: underline;
}

.P1lAENLs {
	justify-content: end !important;
  gap: 20px !important;
}

.BZs335wO, .MRPN0AlG {
	border-bottom: none !important;
}
._4M-jb-Yf button {
	padding: 0 !important;
  padding: 0 !important;
  width: 30px;
  height: 23px;
}
._4M-jb-Yf span {
	color: #fff !important;
}
._4M-jb-Yf {
	padding: 0 !important;
  position: absolute !important;
  top: 1px !important;
  width: calc(100% - 30px);
  left: 15px;
}

.bDtnMOtP {
	background: none !important;
  gap: 10px;
}

.mPvkVXNc {
	padding: 30px 0px 0px 0px;
}

.docWdaJH {
	position: relative;
  top: -21px;
  color: #fff;
}

.docWdaJH h2 {
	color: #fff;
}

.QT6-NgzT .d4whLTgb:hover {
	text-decoration: underline;
}

.yIp1zbgr::after {
	padding: 0 !important;
  top: 0 !important;
}

.rvWQR6Xa {
	background: none !important;
}

.BbGOi3lO nav {
	row-gap: 8px;
  display: flex;
  flex-direction: column;
}

.gRf2HMVj {
	background: none !important;
}

.gRf2HMVj button {
	border: 0 !important;
  box-shadow: none;
  
}

.gRf2HMVj button:hover {
	background: #000080 !important;
  color: #fff !important;
}

.mC4WabM6 {
	padding: 5px !important;
  position: relative;
  top: 44px;
  z-index: 1;
  height: 23px;
  right: 15px;
}

.bDtnMOtP {
	backdrop-filter: none !important;
}

input {
	border-radius: none !important;
}

html {
	--bg-primary: #c0c0c0 !important;
}

button.yAXdi86A,
button.elFWsy5U,
button._6XVFDO74,
button.y-9i4poD,
.JNwvD1Vo button{
	padding: 5px !important;
}

._3x0lVqeJ {
	padding-top: 30px;
}

`;
document.head.appendChild(style);

(function () {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    #root {
      opacity: 0;
      transition: opacity 2s ease;
    }

    #win95-login {
      position: fixed;
      inset: 0;
      background: #008080;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 1s ease;
      z-index: 9999;
    }

    #win95-login.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .win95-window {
      width: 300px;
      background: #C0C0C0;
      border: 2px solid;
      border-color: #FFFFFF #404040 #404040 #FFFFFF;
      font-family: Tahoma, sans-serif;
      font-size: 13px;
    }

    .title-bar {
      background: #000080;
      color: white;
      padding: 4px 6px;
      font-weight: bold;
    }

    .content {
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    input {
      border: 2px solid;
      border-color: #404040 #FFFFFF #FFFFFF #404040;
      padding: 4px;
      font-family: inherit;
    }

    button {
      align-self: flex-end;
      padding: 4px 10px;
      background: #C0C0C0;
      border: 2px solid;
      border-color: #FFFFFF #404040 #404040 #FFFFFF;
      cursor: pointer;
    }

    button:active {
      border-color: #404040 #FFFFFF #FFFFFF #404040;
    }
    
    .bDtnMOtP {
    	padding: 0 !important;
      background: none !important;
      gap: 10px;
    }
    .prof_cont {
    	height: 50px;
      font-size: 24pt !important;
    }
    .prof_cont .profile_link {
    	display: inline;
    }
    .prof_cont .profile_link {
    	color: magenta;
      text-decoration: none !important;
    }
    
    .prof_cont .profile_link:hover {
    	text-decoration: underline !important;
    }
  `;
  document.head.appendChild(style);

  // Wait for DOM
  window.addEventListener('load', () => {
    const root = document.querySelector('#root');

    // Create login UI
    const login = document.createElement('div');
    login.id = 'win95-login';
    login.innerHTML = `
      <div class="win95-window">
        <div class="title-bar">Welcome to ASO x32 v1.2</div>
        <div class="content">
        	<div class="prof_cont">
          Made by <a href="https://итд.com/@derpz" class="profile_link">Dxrpz</a>
          </div>
          <button id="win95-login-btn">Login</button>
        </div>
      </div>
    `;
    document.body.appendChild(login);

    const btn = document.getElementById('win95-login-btn');
    
    btn.addEventListener('click', () => {
      const audio = new Audio('https://github.com/1dxrpz/ASOx32/raw/refs/heads/main/win95.ogg');
      audio.volume = 0.6;

      audio.play().catch(() => {
        const resume = () => {
          audio.play();
          window.removeEventListener('click', resume);
        };
        window.addEventListener('click', resume);
      });

      // Fade out login
      login.classList.add('hidden');

      // Show root
      setTimeout(() => {
        if (root) root.style.opacity = '1';
      }, 500);

      // Remove login after animation
      setTimeout(() => {
        login.remove();
      }, 1000);
    });
  });
})();

const clickSound = new Audio('https://github.com/1dxrpz/ASOx32/raw/refs/heads/main/click.mp3');
  clickSound.volume = 0.5;

  function playClickSound() {
    // clone so rapid clicks don't cut off sound
    const s = clickSound.cloneNode();
    s.play().catch(() => {});
  }

  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a');
    if (target) {
      playClickSound();
    }
  });
