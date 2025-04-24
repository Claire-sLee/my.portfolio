// Select audio and form
let sound = document.getElementById("sound");

const form = document.getElementById('sform');
// Select all input
const inputFields = document.querySelectorAll('.ctinfo');

// Add event listeners for focus and blur to each field
inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        highlightField(input);
        sound.play();
    });
    
    input.addEventListener('blur', () => {
        removeHighlight(input);
    });
});

// Function to add highlight class to both input and label
function highlightField(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
        label.classList.add('highlight');
    }
    input.classList.add('highlight');
}

// Function to remove highlight class from both input and label
function removeHighlight(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
        label.classList.remove('highlight');
    }
    input.classList.remove('highlight');
}

// When user clicks the submit button validate the form
let sform = document.getElementById("sform");
sform.addEventListener("click", function(e){
    e.preventDefault();
    // looop through all the inputs and validate one by one
    // name AND email id NOT EMPTY
    if(inputFields[0].value !=="" && inputFields[1].value !== "" && inputFields[2].value !== ""){
        // Show a pop up message confirming

        // define the confirmation pop up
        let confirmationBox = document.getElementById("confirmation");
        // define the confirmation text element
        let confirmationText = document.getElementById("confirmationText");
        // define the confirmation text message
        let confirmationMessage = `Hello ${inputFields[0].value}, I received your message and will get back to you within 24 hours!`
        confirmationText.innerHTML = confirmationMessage;
        confirmationBox.style.display = "flex";
    }else{
        // do not show a pop up message confirming
        alert('CAN NOT SUBMIT!!!!');
    }
})


// Scroll event to trigger animation when element is in view
window.addEventListener('scroll', () => {
    const scrollAnimationBox = document.querySelector('.scroll-animation');
    const boxPosition = scrollAnimationBox.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (boxPosition < screenHeight - 100) { // When the box is close to being fully in view
        scrollAnimationBox.classList.add('active');
    }
});
