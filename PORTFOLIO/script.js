
// let navBar = document.querySelector(".navbar");
// let menuBtn = document.querySelector(".menu-btn");
// let cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = function(){
//   navBar.classList.add("active");
//   menuBtn.style.opacity = "0";
//   menuBtn.style.pointerEvents = "none";
//   body.style.overflow = "hidden";
//   scrollBtn.style.pointerEvents = "none";
// }
// cancelBtn.onclick = function(){
//   navBar.classList.remove("active");
//   menuBtn.style.opacity = "1";
//   menuBtn.style.pointerEvents = "auto";
//   body.style.overflow = "auto";
//   scrollBtn.style.pointerEvents = "auto";
// }

const dynamicText = document.querySelector(".text-three span");


const word = [" WEB DEVELOPER !!"," GRAPHIC DESGINER !!"," UI/UX DESGINER !!"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = word[wordIndex];
  const currCharacter = currentWord.substring(0, charIndex);
  dynamicText.textContent = currCharacter;

  if(!isDeleting && charIndex < currentWord.length){
    charIndex++;
    setTimeout(typeEffect,200);
  }
  else if(isDeleting && charIndex > 0){
    charIndex--;
    setTimeout(typeEffect,100);
  }
  else{
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex;
    setTimeout(typeEffect,1200);
  }

}

typeEffect();