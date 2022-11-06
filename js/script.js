
// Scroll the flovours tab.

// let currentScrollPosition = 0;
// let scrollAmount = 320;
// const sCont = document.querySelector(".flav-items");
// const hScroll = document.querySelector(".horizontal-scroll");
// const btnScrollLeft = document.querySelector("#btn-scroll-left");
// const btnScrollRight = document.querySelector("#btn-scroll-right");
//
// btnScrollLeft.style.opacity = "0";
//
// let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
//
// function scrollHorizontally(val){
//   currentScrollPosition+=(val * scrollAmount);
//
//   if (currentScrollPosition >= 0) {
//     currentScrollPosition = 0;
//     btnScrollLeft.style.opacity = "0";
//   }else{
//     btnScrollLeft.style.opacity = "1";
//   }
//   if (currentScrollPosition <= maxScroll) {
//     currentScrollPosition = maxScroll;
//     btnScrollRight.style.opacity = "0";
//   }else {
//     btnScrollRight.style.opacity = "1";
//   }
//
//
//   sCont.style.left = currentScrollPosition + "px";
//
// }

// Like count.

function likebtn (btn, icon, c){
  const likeBtn = document.querySelector(`${btn}`);
  const likeIcon = document.querySelector(`${icon}`);
  const count = document.querySelector(`${c}`);

  // button  clicked
  let clicked = false;

  likeBtn.addEventListener("click", () => {
    if(!clicked){
      clicked=true;
      likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`
      likeIcon.style.color="red";
      count.textContent++;

    }else{
      clicked = false;
      likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`
      likeIcon.style.color="black";
      count.textContent--;
    }
  });
}
likebtn("#bb-like1", "#bb-icon1", ".count1");
likebtn("#bb-like2", "#bb-icon2", ".count2");
likebtn("#bb-like3", "#bb-icon3", ".count3");
likebtn("#bb-like4", "#bb-icon4", ".count4");
likebtn("#bb-like5", "#bb-icon5", ".count5");
likebtn("#bb-like6", "#bb-icon6", ".count6");
likebtn("#bb-like7", "#bb-icon7", ".count7");
likebtn("#bb-like8", "#bb-icon8", ".count8");
likebtn("#bb-like9", "#bb-icon9", ".count9");
