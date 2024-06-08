function toggleNav(){                  //--- new function for toggleNav

    console.log("Hamburger clicked");  //--- log the click of hamburger
    let links = document.querySelector('.mainNav');  
    links.classList.toggle('showNav');
}
let hamburger = document.querySelector("#hamburger");  //--- store the value in a let variable
hamburger.addEventListener("click", toggleNav);  //--- Listen for clicks of hamberger