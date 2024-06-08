//make logo invisible
imgLogo.style.visibility = "hidden";

// Get element by ID
const main = document.getElementById("main");

// Goals icons



// main background image Large Screen
const imgGB = document.createElement("img");
imgGB.src = "";
imgGB.id = "imgGB";
console.log("Goals background is loaded");
main.appendChild(imgGB);

// Goal  Energy image Large screen
const imgHB = document.createElement("img");
imgHB.src = "https://i.ibb.co/DQ4gVTT/peter-large-goal.png";
imgHB.id = "imgHB";
console.log("Goal Energy is loaded");
main.appendChild(imgHB);
// Goal Water & Sanitation background image Large Screen
const imgEB = document.createElement("img");
imgEB.src = "https://i.ibb.co/GvBhJMG/peter-large-goal2.png";
imgEB.id = "imgEB";
console.log("Goal Water and sanitation is loaded");
main.appendChild(imgEB);
// Goal Health and wellness background image Large Screen
const imgCB = document.createElement("img");
imgCB.src = "https://i.ibb.co/2sgHLQk/peter-large-goal3.png";
imgCB.id = "imgCB";
console.log("Goal Health and wellness is loaded");
main.appendChild(imgCB);




// Setup 3 click event listener table for all goals page images
imgH.addEventListener("click", function(){
    console.log("Health & wellness is visible");
    imgHB.style.visibility = "visible";
    imgGB.style.visibility = "hidden";
    imgCB.style.visibility = "hidden";
    imgEB.style.visibility = "hidden";
    imgHWLink.style.visibility = "visible";
    imgQELink.style.visibility = "hidden";
    imgCCLink.style.visibility = "hidden";
    imgHWLink1.style.visibility = "visible";
    imgQELink1.style.visibility = "hidden";
})
imgC.addEventListener("click", function(){
    console.log("Climate is visible");
    imgHB.style.visibility = "hidden";
    imgGB.style.visibility = "hidden";
    imgCB.style.visibility = "visible";
    imgEB.style.visibility = "hidden";
    imgHWLink.style.visibility = "hidden";
    imgQELink.style.visibility = "hidden";
    imgCCLink.style.visibility = "visible";
    imgHWLink1.style.visibility = "hidden";
    imgQELink1.style.visibility = "hidden";
})
imgE.addEventListener("click", function(){
    console.log("Education is visible");
    imgHB.style.visibility = "hidden";
    imgGB.style.visibility = "hidden";
    imgCB.style.visibility = "hidden";
    imgEB.style.visibility = "visible";
    imgHWLink.style.visibility = "hidden";
    imgQELink.style.visibility = "visible";
    imgCCLink.style.visibility = "hidden";
    imgHWLink1.style.visibility = "hidden";
    imgQELink1.style.visibility = "visible";
})
