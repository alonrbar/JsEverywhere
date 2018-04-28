
async function greet() {
    const name = await getName();
    const greeting = generateGreeting(name);
    showGreeting(greeting);
}

// GET NAME FROM CONSOLE
async function getName() {
    return new Promise((resolve) => {
        
        console.log('What is your name???');        
        const stdin = process.openStdin();
        stdin.on('data', (data) => {
            const name = data.toString().trim();            
            resolve(name);
            stdin.end();
        });
        
    });
}

function generateGreeting(name) {   
    const template = "Hi {0}!";
    return template.replace('{0}', name);
}

// OUTPUT GREETING TO CONSOLE
function showGreeting(greeting) {
    console.log(greeting);
}

greet();