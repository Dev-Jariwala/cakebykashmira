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
likebtn("#bb-like10", "#bb-icon10", ".count10");
likebtn("#bb-like11", "#bb-icon11", ".count11");
likebtn("#bb-like12", "#bb-icon12", ".count12");
likebtn("#bb-like13", "#bb-icon13", ".count13");
likebtn("#bb-like14", "#bb-icon14", ".count14");
likebtn("#bb-like15", "#bb-icon15", ".count15");
likebtn("#bb-like16", "#bb-icon16", ".count16");
likebtn("#bb-like17", "#bb-icon17", ".count17");
likebtn("#bb-like18", "#bb-icon18", ".count18");
likebtn("#bb-like19", "#bb-icon19", ".count19");
likebtn("#bb-like20", "#bb-icon20", ".count20");
likebtn("#bb-like21", "#bb-icon21", ".count21");
likebtn("#bb-like22", "#bb-icon22", ".count22");
likebtn("#bb-like23", "#bb-icon23", ".count23");
likebtn("#bb-like24", "#bb-icon24", ".count24");
likebtn("#bb-like25", "#bb-icon25", ".count25");
likebtn("#bb-like26", "#bb-icon26", ".count26");
likebtn("#bb-like27", "#bb-icon27", ".count27");
likebtn("#bb-like28", "#bb-icon28", ".count28");
likebtn("#bb-like29", "#bb-icon29", ".count29");
