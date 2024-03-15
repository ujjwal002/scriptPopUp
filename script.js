var styles = `
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
      }
      #RestartFrame_container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
      }
      #RestartFrame_form_container {
        border: 1px solid #dee1e6;
        padding: 44px;
        border-radius: 12px;
        display: none; /* Initially hidden */
      }
      #RestartFrame_heading {
        font-weight: 800;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
      }
      #RestartFrame_intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      #RestartFrame_create {
        margin: 0;
        margin-top: 16px;
        margin-bottom: 10px;
      }
      #RestartFrame_advisor_content {
        margin: 0px;
        color: #9095a0;
        margin-bottom: 24px;
      }
      #RestartFrame_re {
        color: #ff6700;
      }
      .RestartFrame_input_container {
        display: flex;
        align-items: center;
        border: 1px solid #dee1e6;
        padding: 12px;
        border-radius: 4px;
        margin: 0;
      }
      .RestartFrame_input {
        border: none;
        outline: none;
      }
      #RestartFrame_input::placeholder {
        color: #bcc1ca;
        font-size: 12px;
        font-weight: 200;
      }
      span{
              color: #bcc1ca;

      }
      .RestartFrame_input_error_container {
        height: 20px;
        margin: 4px;
      }
      .RestartFrame_input_error {
        margin: 0;
        color: red;
        font-size: 12px;
      }
      #RestartFrame_submit_button {
        width: 100%;
        border: none;
        background-color: #ed7d2d;
        padding: 16px;
        border-radius: 4px;
        color: white;
        font-size: 14px;
      }
      #RestartFrame_submit_button:hover {
        cursor: pointer;
      }
      #openPopup {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        background-color: white;
        color: black;
        border: 1px solid #dee1e6;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        z-index: 999;
      }
      #openPopup svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
      #closePopup {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 5px;
        background-color: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        z-index: 999;
      }
    `;

// HTML markup for the form
var markup = `
      <div id="RestartFrame_container">
        <div id="RestartFrame_form_container">
          <button id="closePopup">Close</button>
          <h1 id="RestartFrame_heading"><span id="RestartFrame_re">[re]</span>Start</h1>
          <div id="RestartFrame_intro">
            <h3 id="RestartFrame_create">Create your Free accounts</h3>
            <p id="RestartFrame_advisor_content">Our Career Advisors Are Waiting To Help You</p>
          </div>
          <form id="RestartFrame_form">
            <div>
              <div class="RestartFrame_input_container">
                <span>&#128100;</span> 

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  class="RestartFrame_input"

                />
              </div>
              <div id="firstNameError_container" class="RestartFrame_input_error_container"></div>
            </div>
            <div>
              <div class="RestartFrame_input_container">
                <span>&#128100;</span> 

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  class="RestartFrame_input"

                />
              </div>
              <div id="lastNameError_container" class="RestartFrame_input_error_container"></div>
            </div>
            <div>
              <div class="RestartFrame_input_container">
                <span>&#128100;</span> 

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  class="RestartFrame_input"

                />
              </div>
              <div id="emailError_container" class="RestartFrame_input_error_container"></div>
            </div>
            <button type="submit" id="RestartFrame_submit_button">Get Started</button>
          </form>
        </div>
      </div>
      <button id="openPopup">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="none" d="M0 0H24V24H0z"/>
          <path d="M15 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h5V4c0-.552.448-1 1-1h6zm1 5H8v11h8V8zM4 8v11h2V8H4zm10-3h-4v1h4V5zm4 3v11h2V8h-2z"/>
        </svg>
        We help people to get a job
      </button>
    `;

// JavaScript logic
function validateForm(inputId, value) {
  var errors = {};

  if (inputId === "firstName" && !value) {
    errors.firstName = "First Name is required";
  }

  if (inputId === "lastName" && !value) {
    errors.lastName = "Last Name is required";
  }

  if (inputId === "email") {
    if (!value) {
      errors.email = "Email is required";
    } else if (!isValidEmail(value)) {
      errors.email = "Invalid email format";
    }
  }

  return errors;
}

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  var errors = validateForm("email", document.getElementById("email").value);

  if (Object.keys(errors).length === 0) {
    var firstNameValue = document.getElementById("firstName").value;
    var lastNameValue = document.getElementById("lastName").value;
    var emailValue = document.getElementById("email").value;

    console.log("Form submitted with values:");
    console.log("First Name:", firstNameValue);
    console.log("Last Name:", lastNameValue);
    console.log("Email:", emailValue);
    console.log(document.baseURI);
  } else {
    displayErrors(errors);
  }
}

function displayErrors(errors) {
  var errorContainers = document.querySelectorAll(
    ".RestartFrame_input_error_container"
  );
  errorContainers.forEach(function (container) {
    container.innerHTML = "";
  });

  Object.keys(errors).forEach(function (field) {
    var errorContainer = document.querySelector(
      "#" + field + "Error_container"
    );
    if (errorContainer) {
      var errorMessage = document.createElement("p");
      errorMessage.textContent = errors[field];
      errorMessage.className = "RestartFrame_input_error";
      errorContainer.appendChild(errorMessage);
    }
  });
}

var style = document.createElement("style");
style.textContent = styles;
document.head.appendChild(style);

document.body.innerHTML = markup;

document
  .getElementById("RestartFrame_form")
  .addEventListener("submit", handleSubmit);

document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("RestartFrame_form_container").style.display =
    "block";
  document.getElementById("openPopup").style.display = "none";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("RestartFrame_form_container").style.display = "none";
  document.getElementById("openPopup").style.display = "block";
});

var inputs = document.querySelectorAll(".RestartFrame_input");
inputs.forEach(function (input) {
  input.addEventListener("blur", function (event) {
    var fieldName = event.target.id;
    var errors = validateForm(fieldName, event.target.value);
    displayErrors(errors);
  });
});

inputs.forEach(function (input) {
  input.addEventListener("input", function (event) {
    var fieldName = event.target.id;
    var errorContainer = document.querySelector(
      "#" + fieldName + "Error_container"
    );
    if (errorContainer) {
      errorContainer.innerHTML = "";
    }
  });
});
