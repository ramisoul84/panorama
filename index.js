function load(img) {
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: `./assets/${img}.jpeg`,
    //preview: `./assets/${img}.jpeg`,
    //title: `./assets/${img}.jpeg`,
    //author: "resVR",
    autoLoad: true,
    autoRotate: -2,
    pitch: -12,
    yaw: 60,
    hfov: 145,
    /*
    hotSpots: [
      {
        pitch: 14.1,
        yaw: 1.5,
        type: "info",
        text: "Baltimore Museum of Art",
        URL: "https://artbma.org/",
      },
      {
        pitch: -9.4,
        yaw: 222.6,
        type: "info",
        text: "Art Museum Drive",
      },
      {
        pitch: -0.9,
        yaw: 144.4,
        type: "info",
        text: "North Charles Street",
      },
    ],
    */
  });
}
const panorama = document.getElementById("panorama");
const home = document.getElementById("home");
const options = document.getElementById("options");
function reset() {
  while (panorama.firstChild) {
    panorama.firstChild.remove();
  }
  panorama.classList.remove("pnlm-container");
}

document.getElementById("red").addEventListener("click", function () {
  reset();
  load("red");
});
document.getElementById("blue").addEventListener("click", function () {
  reset();
  load("blue");
});
document.getElementById("green").addEventListener("click", function () {
  reset();
  load("green");
});
document.getElementById("logo").addEventListener("click", function () {
  reset();
  home.classList.replace("hide", "show");
  panorama.classList.replace("show", "hide");
  options.classList.add("hide");
});
document.getElementById("c1_text").addEventListener("click", function () {
  home.classList.replace("show", "hide");
  panorama.classList.replace("hide", "show");
  options.classList.remove("hide");
  load("red");
});

function initial() {
  home.classList.add("show");
  panorama.classList.add("hide");
  options.classList.add("hide");
}

//initial();

/*
const options = document.getElementsByClassName("options");
const para = document.createElement("P");
const node = document.createTextNode("This is a paragraph.");
options.appendChild(para);
console.log(options);
*/
