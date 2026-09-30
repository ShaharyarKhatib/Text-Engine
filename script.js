document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("inputText");
    const result = document.getElementById("result");

    // =========================
    // ENCODE
    // =========================
    window.encodeText = function () {

        let text = input.value;
        let encoded = "";

        if (!text.trim()) {
            result.value = "";
            updateCounters();
            return;
        }

        for (let i = 0; i < text.length; i++) {

            let c = text[i];

            if (c >= 'a' && c <= 'z') {

                encoded += String.fromCharCode(
                    ((c.charCodeAt(0) - 97 + 6) % 26) + 97
                );

            } else if (c >= 'A' && c <= 'Z') {

                encoded += String.fromCharCode(
                    ((c.charCodeAt(0) - 65 + 6) % 26) + 65
                );

            } else if (c === '1') encoded += ".g.";
            else if (c === '2') encoded += ".h.";
            else if (c === '3') encoded += ".i.";
            else if (c === '4') encoded += ".j.";
            else if (c === '5') encoded += ".k.";
            else if (c === '6') encoded += ".l.";
            else if (c === '7') encoded += ".m.";
            else if (c === '8') encoded += ".n.";
            else if (c === '9') encoded += ".o.";
            else if (c === '0') encoded += ".p.";

            else if (c === '@') encoded += "6";
            else if (c === '!') encoded += "5";
            else if (c === '#') encoded += "7";
            else if (c === '$') encoded += "8";
            else if (c === '&') encoded += "9";
            else if (c === '*') encoded += "10";

            else if (c === ' ') encoded += "2";
            else if (c === '.') encoded += "3";

            else encoded += c;
        }

        result.value = encoded;

        updateCounters();

        const status = document.querySelector(".result-status");

        if (status) {
            status.textContent = "● Encoding complete";
        }
    };


    // =========================
    // DECODE
    // =========================
    window.decodeText = function () {

        let text = input.value;
        let decoded = "";
        let i = 0;

        if (!text.trim()) {
            result.value = "";
            updateCounters();
            return;
        }

        while (i < text.length) {

            if (text.substring(i, i + 3) === ".g.") {
                decoded += "1";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".h.") {
                decoded += "2";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".i.") {
                decoded += "3";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".j.") {
                decoded += "4";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".k.") {
                decoded += "5";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".l.") {
                decoded += "6";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".m.") {
                decoded += "7";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".n.") {
                decoded += "8";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".o.") {
                decoded += "9";
                i += 3;
            }

            else if (text.substring(i, i + 3) === ".p.") {
                decoded += "0";
                i += 3;
            }

            else if (text.substring(i, i + 2) === "10") {
                decoded += "*";
                i += 2;
            }

            else if (text[i] === '6') {
                decoded += "@";
                i++;
            }

            else if (text[i] === '5') {
                decoded += "!";
                i++;
            }

            else if (text[i] === '7') {
                decoded += "#";
                i++;
            }

            else if (text[i] === '8') {
                decoded += "$";
                i++;
            }

            else if (text[i] === '9') {
                decoded += "&";
                i++;
            }

            else if (text[i] === '2') {
                decoded += " ";
                i++;
            }

            else if (text[i] === '3') {
                decoded += ".";
                i++;
            }

            else if (text[i] >= 'a' && text[i] <= 'z') {

                decoded += String.fromCharCode(
                    ((text.charCodeAt(i) - 97 - 6 + 26) % 26) + 97
                );

                i++;
            }

            else if (text[i] >= 'A' && text[i] <= 'Z') {

                decoded += String.fromCharCode(
                    ((text.charCodeAt(i) - 65 - 6 + 26) % 26) + 65
                );

                i++;
            }

            else {

                decoded += text[i];
                i++;
            }
        }

        result.value = decoded;

        updateCounters();

        const status = document.querySelector(".result-status");

        if (status) {
            status.textContent = "● Decoding complete";
        }
    };


    // =========================
    // COPY
    // =========================
    window.copyText = function () {

        if (!result.value) return;

        navigator.clipboard.writeText(result.value)
            .then(function () {

                const button =
                    document.querySelector(".copy-btn");

                if (button) {

                    button.innerHTML = "✓ COPIED";

                    setTimeout(function () {
                        button.innerHTML =
                            "<span>⧉</span> COPY";
                    }, 1500);
                }

            })
            .catch(function () {

                // Fallback for some browsers
                result.select();
                document.execCommand("copy");
            });
    };


    // =========================
    // CLEAR
    // =========================
    window.clearInput = function () {

        input.value = "";
        result.value = "";

        updateCounters();

        const status =
            document.querySelector(".result-status");

        if (status) {
            status.textContent =
                "● Waiting for input";
        }
    };


    // =========================
    // COUNTERS
    // =========================
    function updateCounters() {

        const inputCount =
            document.getElementById("inputCount");

        const outputCount =
            document.getElementById("outputCount");

        if (inputCount) {
            inputCount.textContent =
                input.value.length + " characters";
        }

        if (outputCount) {
            outputCount.textContent =
                result.value.length + " characters";
        }
    }


    // Live counter
    input.addEventListener("input", updateCounters);

    // Initial counter
    updateCounters();

});
