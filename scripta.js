var k=true;
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav");
  var navContent = document.querySelectorAll(".nav-content-list-1");
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  var changeColorPosition = 50; // Scroll position at which to change the color
  console.log(navContent);
  if (scrollPosition > changeColorPosition) {
    navbar.style.backgroundColor = "black"; // Change to the desired color
    // navContent.forEach(function (e){
    //   e.style.color = "white";
    // })
  } else {
    navbar.style.backgroundColor = "transparent"; // Change to the initial color
    //   navContent.forEach(function (e){
    //     e.style.color = "black";
    //   })
  }
  
  if (scrollPosition >= 620 && k) {
    k=false;
    counterEffect(targetNumber, interval);

    counterEffect2(targetNumber2, interval2);
    counterEffect3(targetNumber3, interval3);
  }
});
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

///////trainers count////////////////////////////
function counterEffect(targetNumber, interval) {
  let currentNumber = 0;
  const counterInterval = setInterval(() => {
    document.getElementById("trainers-ct").textContent = currentNumber;
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber = 20; // Replace with your desired target number
const interval = 75; // 2000 milliseconds = 2 seconds

///////area  count////////////////////////////

function counterEffect2(targetNumber, interval) {
  let currentNumber = 7500;
  const counterInterval = setInterval(() => {
    document.getElementById("area-ct").textContent = currentNumber + "+";
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber2 = 8000; // Replace with your desired target number
const interval2 = 1; // 2000 milliseconds = 2 seconds

///////clients  count////////////////////////////

function counterEffect3(targetNumber, interval) {
  let currentNumber = 700;
  const counterInterval = setInterval(() => {
    document.getElementById("clients-ct").textContent = currentNumber + "+";
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber3 = 1000; // Replace with your desired target number
const interval3 = 5; // 2000 milliseconds = 2 seconds
