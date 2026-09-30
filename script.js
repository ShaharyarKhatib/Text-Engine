```javascript
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");


// ===============================
// ENCODE
// ===============================

function encodeText() {

    let text = inputText.value;
    let resultText = "";

    for (let i = 0; i < text.length; i++) {

        let c = text[i];

        // Lowercase letters
        if (c >= 'a' && c <= 'z') {

            resultText += String.fromCharCode(
                ((c.charCodeAt(0) - 97 + 6) % 26) + 97
            );

        }

        // Uppercase letters
        else if (c >= 'A' && c <= 'Z') {

            resultText += String.fromCharCode(
                ((c.charCodeAt(0) - 65 + 6) % 26) + 65
            );

        }

        // Numbers
        else if (c == '1') resultText += ".g.";
        else if (c == '2') resultText += ".h.";
        else if (c == '3') resultText += ".i.";
        else if (c == '4') resultText += ".j.";
        else if (c == '5') resultText += ".k.";
        else if (c == '6') resultText += ".l.";
        else if (c == '7') resultText += ".m.";
        else if (c == '8') resultText += ".n.";
        else if (c == '9') resultText += ".o.";
        else if (c == '0') resultText += ".p.";

        // Special characters
        else if (c == '@') resultText += "6";
        else if (c == '!') resultText += "5";
        else if (c == '#') resultText += "7";
        else if (c == '$') resultText += "8";
        else if (c == '&') resultText += "9";
        else if (c == '*') resultText += "10";

        // Space and dot
        else if (c == ' ') resultText += "2";
        else if (c == '.') resultText += "3";

        // Other characters remain unchanged
        else resultText += c;
    }

    result.value = resultText;

    updateCounters();

    const status = document.querySelector(".result-status");

    if (status) {
        status.textContent = "● Encoding complete";
    }
}


// ===============================
// DECODE
// ===============================

function decodeText() {

    let text = inputText.value;
    let resultText = "";
    let i = 0;

    while (i < text.length) {

        // Numbers
        if (text.substring(i, i + 3) === ".g.") {
            resultText += "1";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".h.") {
            resultText += "2";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".i.") {
            resultText += "3";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".j.") {
            resultText += "4";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".k.") {
            resultText += "5";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".l.") {
            resultText += "6";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".m.") {
            resultText += "7";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".n.") {
            resultText += "8";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".o.") {
            resultText += "9";
            i += 3;
        }

        else if (text.substring(i, i + 3) === ".p.") {
            resultText += "0";
            i += 3;
        }

        // *
        else if (text.substring(i, i + 2) === "10") {
            resultText += "*";
            i += 2;
        }

        // Special characters
        else if (text[i] === '6') {
            resultText += "@";
            i++;
        }

        else if (text[i] === '5') {
            resultText += "!";
            i++;
        }

        else if (text[i] === '7') {
            resultText += "#";
            i++;
        }

        else if (text[i] === '8') {
            resultText += "$";
            i++;
        }

        else if (text[i] === '9') {
            resultText += "&";
            i++;
        }

        // Space
        else if (text[i] === '2') {
            resultText += " ";
            i++;
        }

        // Dot
        else if (text[i] === '3') {
            resultText += ".";
            i++;
        }

        // Lowercase
        else if (text[i] >= 'a' && text[i] <= 'z') {

            resultText += String.fromCharCode(
                ((text.charCodeAt(i) - 97 - 6 + 26) % 26) + 97
            );

            i++;
        }

        // Uppercase
        else if (text[i] >= 'A' && text[i] <= 'Z') {

            resultText += String.fromCharCode(
                ((text.charCodeAt(i) - 65 - 6 + 26) % 26) + 65
            );

            i++;
        }

        // Other characters
        else {

            resultText += text[i];
            i++;
        }
    }

    result.value = resultText;

    updateCounters();

    const status = document.querySelector(".result-status");

    if (status) {
        status.textContent = "● Decoding complete";
    }
}


// ===============================
// COPY
// ===============================

function copyText() {

    if (!result.value) return;

    navigator.clipboard.writeText(result.value);

    const button = document.querySelector(".copy-btn");

    if (button) {

        button.innerHTML = "✓ COPIED";

        setTimeout(() => {

            button.innerHTML = "<span>⧉</span> COPY";

        }, 1500);
    }
}


// ===============================
// CLEAR
// ===============================

function clearInput() {

    inputText.value = "";
    result.value = "";

    updateCounters();

    const status = document.querySelector(".result-status");

    if (status) {
        status.textContent = "● Waiting for input";
    }
}


// ===============================
// CHARACTER COUNTER
// ===============================

function updateCounters() {

    const inputCounter =
        document.getElementById("inputCount");

    const outputCounter =
        document.getElementById("outputCount");

    if (inputCounter) {

        inputCounter.textContent =
            `${inputText.value.length} characters`;
    }

    if (outputCounter) {

        outputCounter.textContent =
            `${result.value.length} characters`;
    }
}


// ===============================
// LIVE INPUT COUNTER
// ===============================

inputText.addEventListener("input", updateCounters);


// Initial counter
updateCounters();
```
