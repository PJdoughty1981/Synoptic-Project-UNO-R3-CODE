// Website Wide Background image------------------------------------------------------------------
document.body.style.backgroundImage = "url('https://i.ibb.co/gTGk8vk/background-1920x1080.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

// Background resizing by window px width and height
window.addEventListener('resize', function(event){
     var width = window.Width;
     var height = window.Height;

     this.document.body.style.backgroundSize = width + 'px ' + height + 'px '
})
//------------------------------------------------------------------------------------------------

// Create Header Logo Element
const imgLogo = document.createElement("img");
imgLogo.src = "https://i.ibb.co/Vx3Jv6K/homepage-logo-no-back.png";
imgLogo.id = "imgLogo";
console.log("AquaSol Systems logo is loaded");
main.appendChild(imgLogo);

// Create footer Element
const footer = document.getElementById("footer");
footer.textContent = "Copyright ©2024 Group 29";
document.body.appendChild(footer);

//--------------------------------------------------------------------------------------------------


