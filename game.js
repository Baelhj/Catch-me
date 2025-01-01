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
    fetch("./math.json")
      .then((response) => response.json())
      .then((data) => {
        const randomX = Math.floor(Math.random() * data.math.length);
        console.log("the random X: ", randomX);

        const fproblem = data.math[randomX];
        
        let test = prompt(`solve this problem ${fproblem.problem}`);
        
        const rightAnswer = fproblem.solution.toString();

        while (test !== rightAnswer) {

          test = prompt(`try agin! \nsolve this problem ${fproblem.problem}`);

        }

        console.log(test)

        if (isNaN(test)) {
          console.log("is not a number! please enter a number");
          //loop
        } else {
          console.log(`it's a number ${test}`);
          if (test == fproblem.solution) {
            console.log("currect!!");
          } else {
            console.log("try again");
            //loop
          }
        }

        console.log(fproblem);
      })
      .catch((error) => console.error("Error fetching JSON:", error));

    console.log("solve this math problem!!");
  }

  return clickedDiv;
}
