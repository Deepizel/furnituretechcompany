//

// let i = 0; // Start Point

let time = 3000; // Time Between Switch

// Image List
// img = <img src="Review1.png" alt="" />;
// imag = <img src="Review2.png" alt="" />;
// ima = <img src="Review3.png" alt="" />;
// mag = <img src="Review4.png" alt="" />;
let images = [Review1.png, Review2.png, Review3.png, Review4.png]; // Images Array

// Change Image
function changeImg() {
  
 for (let i = 0; i < images.length; i++) {
  document.reviewimg.src= images[i];
}
  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }
  setTimeout("changeImg()", 3000);
}
window.onload = changeImg;