
function greet() {
    const name = getName();
    const greeting = generateGreeting(name);
    showGreeting(greeting);
}

function getName() {
    const input = document.getElementById("name-input");
    return input.value;
}

function generateGreeting(name) {   
    const template = "Hi {0}!";
    return template.replace('{0}', name);
}

function showGreeting(greeting) {
    alert(greeting);
}

const button = document.getElementById('button-ok');
button.addEventListener('click', greet);