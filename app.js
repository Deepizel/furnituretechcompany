const innerText = document.querySelector('.reviews');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

btn1.addEventListener("click", () => {
  btn1.style.background = "black";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
    btn5.style.display = "none";
    innerText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto <br> explicabo quos aliquid porro consequatur omnis labore at harum,<br> soluta vitae nulla nam est cum ea animi id veritatis delectus sapiente.'

});

btn2.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.background = "black";
  btn3.style.display = "none";
  btn4.style.display = "none";
  btn5.style.display = "none";
});

btn3.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.background = "black";
  btn4.style.display = "none";
  btn5.style.display = "none";
});

btn4.addEventListener("click", () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.background = "black";
  btn5.style.display = "none";
});