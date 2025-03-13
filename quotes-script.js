const quotes = [
    "Believe in yourself!",
    "Your only limit is your mind.",
    "Dream big, work hard!",
    "Success is a journey, not a destination.",
    "Keep going, you're closer than you think."
];

function generateQuote() {
    const quoteElement = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", generateQuote);
