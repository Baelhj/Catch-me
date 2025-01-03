const allDivs = document.querySelectorAll('[id^="cell"]');
console.log(allDivs);

const randomIndex = Math.floor(Math.random() * allDivs.length);
console.log(randomIndex);

let choosenDiv = [];

choosenDiv.push(randomIndex);

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
    
    document.getElementById("desc").innerText = "OH! YOU FIND ME 😆";
    const again = document.getElementById("again");
    again.innerText = ">> Let's Play again 🙈";

    again.addEventListener("click", reload);

    function reload() {
      location.reload();
    }

  } else if (clickedIndex !== randomIndex) {
    // we show a problem to the user to solve
    fetch("./math.json")
      .then((response) => response.json())
      .then((data) => {
        // we randomize choosing the problem
        const randomX = Math.floor(Math.random() * data.math.length);

        const fproblem = data.math[randomX];

        let test = prompt(`solve this problem ${fproblem.problem}`);

        // we strigify the solution for later checking.
        const rightAnswer = fproblem.solution.toString();

        // forcing the user to type the right answer
        while (test !== rightAnswer) {
          test = prompt(`try agin! \nsolve this problem ${fproblem.problem}`);
        }

        console.log(test);

        for (let i = 0; i < 10; i++) {
          let randomIndexSecond = Math.floor(Math.random() * allDivs.length);
          console.log(randomIndexSecond);

          // checking if the randomIndexSecond does exist in the choosenDiv array []
          while (choosenDiv.includes(randomIndexSecond)) {
            console.log("this 1st after while loop: " ,randomIndexSecond);
            randomIndexSecond = Math.floor(Math.random() * allDivs.length);
            console.log("this 2nd after while loop: " ,randomIndexSecond)

          }
          choosenDiv.push(randomIndexSecond);
        }

        console.log(fproblem);
        console.log(choosenDiv);

        for (let i = 0; i < choosenDiv.length; i++) {
          if (choosenDiv[i] !== randomIndex) {
            allDivs[choosenDiv[i]].style.backgroundColor = "transparent";
          }
        }
      })
      .catch((error) => console.error("Error fetching JSON:", error));

    console.log("solve this math problem!!");
  }

  return clickedDiv;
}
