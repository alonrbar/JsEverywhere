
async function greet() {
    const name = getName();
    const greeting = await generateGreeting(name);
    showGreeting(greeting);
}

function getName() {
    const input = document.getElementById("name-input");
    return input.value;
}

// GENERATE GREETING ON THE SERVER
async function generateGreeting(name) {
    const serverIp = 'http://188.166.100.208';
    const response = await fetch(serverIp + '?name=' + name);
    const json = await response.json();
    return json.greeting;
}

function showGreeting(greeting) {
    alert(greeting);
}

const button = document.getElementById('button-ok');
button.addEventListener('click', greet);