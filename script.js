var count = 0;
var best = 0;
var remaining = 8;
var used1 = false;
var used2 = false;
var used3 = false;
var used4 = false;
var used5 = false;
var used6 = false;
var used7 = false;
var used8 = false;
function openCookie() {
    var number = Math.floor(Math.random() * 8) + 1;
    var name = document.getElementById("name").value;
    if (name == "") {
        name = "Friend";
    }
    if (
        (number == 1 && used1) ||
        (number == 2 && used2) ||
        (number == 3 && used3) ||
        (number == 4 && used4) ||
        (number == 5 && used5) ||
        (number == 6 && used6) ||
        (number == 7 && used7) ||
        (number == 8 && used8)
    ) {
        openCookie();
        return;
    }
    if (number == 1) {
        document.getElementById("message").innerHTML =
            name + ", Today is going to be a wonderful day!";
        used1 = true;
    }
    if (number == 2) {
        document.getElementById("message").innerHTML =
            name + ", Keep smiling because good things are coming.";
        used2 = true;
    }
    if (number == 3) {
        document.getElementById("message").innerHTML =
            name + ", Believe in yourself. You can do amazing things!";
        used3 = true;
    }
    if (number == 4) {
        document.getElementById("message").innerHTML =
            name + ", Happiness grows when you share kindness.";
        used4 = true;
    }
    if (number == 5) {
        document.getElementById("message").innerHTML =
            name + ", Never stop learning and chasing your dreams.";
        used5 = true;
    }
    if (number == 6) {
        document.getElementById("message").innerHTML =
            name + ", If working hard doesn't work, working smart will.";
        used6 = true;
    }
    if (number == 7) {
        document.getElementById("message").innerHTML =
            name + ", Be helpful to everyone.";
        used7 = true;
    }
    if (number == 8) {
        document.getElementById("message").innerHTML =
            name + ", Every new day is another chance to shine.";
        used8 = true;
    }
    var lucky = Math.floor(Math.random() * 100) + 1;
    document.getElementById("luckynumber").innerHTML =
        "Your lucky number is: " + lucky;
    count = count + 1;
    remaining = remaining - 1;
    if (lucky > best) {
        best = lucky;
    }
    document.getElementById("count").innerHTML =
        "Cookies opened: " + count;
    document.getElementById("remaining").innerHTML =
        "Remaining fortunes: " + remaining;
    document.getElementById("best").innerHTML =
        "Best lucky number: " + best;
    if (
        used1 && used2 && used3 && used4 &&
        used5 && used6 && used7 && used8
    ) {
        used1 = false;
        used2 = false;
        used3 = false;
        used4 = false;
        used5 = false;
        used6 = false;
        used7 = false;
        used8 = false;
        remaining = 8;
        document.getElementById("remaining").innerHTML =
            "Remaining fortunes: 8";
    }
}
function resetCookie() {
    document.getElementById("message").innerHTML =
        "Your message will appear here.";
    document.getElementById("luckynumber").innerHTML =
        "Your lucky number will appear here.";
    count = 0;
    best = 0;
    remaining = 8;
    document.getElementById("count").innerHTML =
        "Cookies opened: 0";
    document.getElementById("remaining").innerHTML =
        "Remaining fortunes: 8";
    document.getElementById("best").innerHTML =
        "Best lucky number: 0";
    used1 = false;
    used2 = false;
    used3 = false;
    used4 = false;
    used5 = false;
    used6 = false;
    used7 = false;
    used8 = false;
}
function darkMode() {
    document.body.classList.toggle("dark");
}