
// Creating the form element
var form = document.createElement("form");
form.id = 'joinusForm'


//Creating Header for form
let formHeader = document.createElement("h3");
formHeader.id = "formHeader";
formHeader.textContent = "Sign-up to be a Technician";
document.body.appendChild(formHeader);

//Creating paragraph for form
let formText = document.createElement("p");
formText.id = "formText";
formText.textContent = "All fields marked with * are required";
document.body.appendChild(formText);

// Creating inputs & labels for First Name, Last Name & Email
var FirstNameLabel = document.createElement("label");
FirstNameLabel.textContent = "First Name *:";
FirstNameLabel.id = "label";

var FirstName = document.createElement("input");
FirstName.type = "text";
FirstName.id = "firstName";
FirstName.placeholder = "John";
FirstName.required = true;
form.appendChild(FirstNameLabel)
form.appendChild(FirstName);

var LastNameLabel = document.createElement("label");
LastNameLabel.textContent = "Last Name *:";
LastNameLabel.id = "label";

var LastName = document.createElement("input");
LastName.type = "text";
LastName.id = "lastName";
LastName.placeholder = "Doe";
LastName.required = true;
form.appendChild(LastNameLabel);
form.appendChild(LastName);

var EmailLabel = document.createElement("label");
EmailLabel.textContent = "Email *:";
EmailLabel.id = "label";

var Email = document.createElement("input");
Email.type = "text";
Email.id = "email";
Email.placeholder = "john.doe@example.com";
Email.required = true;
form.appendChild(EmailLabel);
form.appendChild(Email);

// Creating textarea & labels for Message

var MessageLabel = document.createElement("label");
MessageLabel.textContent = "Any Comments? :";
MessageLabel.id = "label";

var Message = document.createElement("textarea");
Message.type = "text";
Message.id = "message";
Message.placeholder = "Your Comment";
Message.rows = "10";
Message.cols = "30";
form.appendChild(MessageLabel);
form.appendChild(Message);

// Creating button for Submit Button
var submitButton = document.createElement("button");
submitButton.type = "submit"; //submit so the form can be submitted
submitButton.id = "submit"
submitButton.textContent = "SUBMIT";
form.appendChild(submitButton);
document.body.appendChild(form);


// Form Submit POST and Response 
document.addEventListener("DOMContentLoaded", function(){
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event){
    event.preventDefault();
    var firstname = document.querySelector("#firstName").value;
    var lastname = document.querySelector("#lastName").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;
    console.log("Name: " + firstname +" "+ lastname + "\nEmail: " + email + "\nMessage: " + message);
    console.log("form fill is working PASS");
    fetch('http://localhost:3000/JoinUs',{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message   
            })
        })
    .then(onResponse)
    .then(onTextReady)
    form.reset();
    console.log("fetch is working PASS");
    });
});
function onResponse(response){
    console.log("onResponse is working PASS");
    return response.text();
};

function onTextReady(text){
    var postF = document.getElementById("form-response")
    postF.innerHTML = text;
    main.appendChild(postF);
}
