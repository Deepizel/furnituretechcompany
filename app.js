const para = document.querySelector('.reviews');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

console.log(para.innerText);
const newPop = function showMessage() {
  let review = "Victor ipsum dolor sit amet consectetur adipisicing elit. Architecto <br> explicabo quos aliquid porro consequatur omnis labore at harum,<br> soluta vitae nulla nam est cum ea animi id veritatis delectus sapiente."
  document.querySelector(".reviews").innerHTML = review;
};

const newPop1 = function showMessage() {
  let review =
    "Definatly going to use them again. Architecto <br> explicabo quos aliquid porro consequatur omnis labore at harum,<br> soluta vitae nulla nam est cum ea animi id veritatis delectus sapiente.";
  document.querySelector(".reviews").innerHTML = review;
};

const newPop2 = function showMessage() {
  let review =
    "They were amazing when they came to fix my things. Architecto <br> explicabo quos aliquid porro consequatur omnis labore at harum,<br> soluta vitae nulla nam est cum ea animi id veritatis delectus sapiente.";
  document.querySelector(".reviews").innerHTML = review;
};

const newPop3 = function showMessage() {
  let review =
    "Great service, top proffesionals too. Architecto <br> explicabo quos aliquid porro consequatur omnis labore at harum,<br> soluta vitae nulla nam est cum ea animi id veritatis delectus sapiente.";
  document.querySelector(".reviews").innerHTML = review;
};

btn1.addEventListener("click", () => { 
  // btn1.style.background = "white";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
  newPop();   
});

btn2.addEventListener("click", () => {
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
  newPop2();
});

btn3.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn4.style.display = "none";
  newPop1();
});

btn4.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  newPop3();
});