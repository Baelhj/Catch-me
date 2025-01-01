const allDivs = document.querySelectorAll('[id^="cell"]');
console.log(allDivs);

const randomIndex = Math.floor(Math.random() * allDivs.length);
console.log(randomIndex);

const randomDiv = allDivs[randomIndex];
console.log(randomDiv);

// randomDiv.style.backgroundColor = "yellow";


allDivs.forEach((e) => {
  e.addEventListener("click", divCheck);
});

function divCheck(event) {
  let clickedDiv = event.target.id;
  console.log(clickedDiv);
  const clickedIndex = Array.from(allDivs).indexOf(event.target);
  console.log("Clicked index:", clickedIndex);

  if (clickedIndex == randomIndex) {
    console.log("You Catch me >_<");
    allDivs[randomIndex].style.backgroundColor = "black";
    location.reload();

  } else if (clickedIndex !== randomIndex) {
    console.log("solve this math problem!!");
  }

  console.log(specialDiv);
  return clickedDiv;
}
