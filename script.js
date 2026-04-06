let display = document.getElementById("display");

// APPEND VALUES (WITH SYMBOL HANDLING)
function append(value) {
    if (value === "*") {
        display.value += "×";
    } else if (value === "/") {
        display.value += "÷";
    } else {
        display.value += value;
    }
}

// CLEAR
function clearDisplay() {
    display.value = "";
}

// DELETE LAST
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// CALCULATE
function calculate() {
    try {
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// ADVANCED FUNCTIONS
function sqrt() {
    display.value = Math.sqrt(display.value);
}

function square() {
    display.value = Math.pow(display.value, 2);
}

function power() {
    display.value += "**";
}

function toggleSign() {
    display.value = display.value * -1;
}

// THEME
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// KEYBOARD SUPPORT
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        append(key);
    } 
    else if (key === "+" || key === "-") {
        append(key);
    } 
    else if (key === "*" || key === "x" || key === "X") {
        append("*");
    } 
    else if (key === "/") {
        append("/");
    } 
    else if (key === ".") {
        append(".");
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        deleteLast();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});