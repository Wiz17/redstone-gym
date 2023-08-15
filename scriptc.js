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
    if(scrollPosition>=600){
      this.document.querySelectorAll(".load").forEach(function(f){f.classList.remove("header-text-op-0")});
      this.document.querySelectorAll(".load").forEach(function(f){f.classList.add("header-text-op-1")});

    }
  });