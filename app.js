// const button = document.querySelector("button");
// const popup = document.querySelector(".nxtcard");
// const close = document.querySelector(".closx");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const btn4 = document.querySelector(".btn4");
// const more = document.querySelector(".more");

// btn1.addEventListener("click", () => {
//   btn2.style.display = "none";
//   btn3.style.display = "none";
//   btn4.style.display = "none";
//   popupTxt.innerText = "Great team.. Loved their work, will definatly use them again";
//   more.style.display = "none";

// });

// btn2.addEventListener("click", () => {
//   btn1.style.display = "none";
//   btn3.style.display = "none";
//   btn4.style.display = "none";
//   popupTxt.innerText = "Funcity is amazing and we woudnt have loved our decour either way ";
//   more.style.display = "none";
// });

// btn3.addEventListener("click", () => {
//   btn1.style.display = "none";
//   btn2.style.display = "none";
//   btn4.style.display = "none";
//   popupTxt.innerText = "I was simply stunned to watch my room transform, they did a splendid job";
//   more.style.display = "none";
// });

// btn4.addEventListener("click", () => {
//   btn1.style.display = "none";
//   btn2.style.display = "none";
//   btn3.style.display = "none";
//   popupTxt.innerText = "These guys are really dope and i already referred them to several people";
//   more.style.display = "none";
// });

const images = document.querySelectorAll("#reviewz");

let i = 0;
setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    i = 0;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
  }

  i++;
}, 2000);

const popupTxt = document.querySelectorAll(".reviews");

let s = 0;
setInterval(function () {
  if (s == 0) {
    popupTxt[i].style.display = "block";
  } else if (s == popupTxt.length) {
    popupTxt[s - 1].style.display = "none";
    popupTxt[0].style.display = "block";
    s = 0;
  } else {
    popupTxt[s - 1].style.display = "none";
    popupTxt[s].style.display = "block";
  }

  s++;
}, 2000);
