import { data } from "./data.js";

// Global Variables
let selectedCard = 0;
let selectedOption = 0;
let selectedCamera = 0;

// Get HtML Elements
const logo = document.getElementById("logo");
const label = document.getElementById("label");
const cards = document.getElementById("cards");
const options = document.getElementById("options");
const panorama = document.getElementById("panorama");

//
function initialCards(data) {
  data.map((e, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", showCard);
    card.style.backgroundImage = `url("./assets/data/room${i + 1}/bg.jpg")`;
    card.setAttribute("cardId", i);
    const name = document.createElement("p");
    name.classList.add("name");
    const nameText = document.createTextNode(e.name);
    name.appendChild(nameText);
    const area = document.createElement("p");
    area.classList.add("area");
    const areaText = document.createTextNode(e.area + " sq.m");
    area.appendChild(areaText);
    card.appendChild(name);
    card.appendChild(area);
    cards.appendChild(card);
  });
  console.log("Cards are initilized");
}
//
function showCard(e) {
  cards.style.display = "none";
  logo.classList.replace("logo-home", "logo-view");
  label.classList.replace("label-home", "label-view");
  document
    .getElementsByClassName("logo-view")[0]
    .addEventListener("click", () => goHome());

  selectedCard = Number(e.target.getAttribute("cardId"));
  initialOptions(data[selectedCard].options);
  console.log(data[selectedCard].options);
}
//
function goHome() {
  cards.style.display = "grid";
  logo.classList.replace("logo-view", "logo-home");
  label.classList.replace("label-view", "label-home");
  while (options.firstChild) {
    options.removeChild(options.lastChild);
  }
  panorama.classList.replace("show", "hide");
}
//
function initialOptions(data) {
  while (options.firstChild) {
    options.removeChild(options.lastChild);
  }
  data.map((e, i) => {
    const option = document.createElement("img");
    option.classList.add("option");
    option.setAttribute("src", e.material);
    option.addEventListener("click", () => {
      let src = `./assets/data/room${selectedCard + 1}/option${
        i + 1
      }/camera1.jpeg`;
      panorama.classList.replace("show", "hide");

      viewPanorama(src);
      panorama.classList.replace("hide", "show");
    });
    options.appendChild(option);
  });
}
//
function viewPanorama(src) {
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: src,
    autoLoad: true,
    showZoomCtrl: false,
    autoRotate: -2,
    pitch: -12,
    yaw: 280,
    hfov: 145,
  });
}

//
function main(data) {
  initialCards(data);
}
//
main(data);
