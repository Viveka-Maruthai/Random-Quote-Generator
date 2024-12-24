// Quotes array with categories
const categories = {
    motivational: [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
    ],
    funny: [
        { text: "I'm writing a book. I've got the page numbers done.", author: "Steven Wright" },
        { text: "I used to think I was indecisive, but now I'm not so sure.", author: "Unknown" }
    ],
    life: [
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." }
    ]
};

const backgrounds = [
    "url('https://source.unsplash.com/random/1600x900/?nature')",
    "url('https://source.unsplash.com/random/1600x900/?city')",
    "url('https://source.unsplash.com/random/1600x900/?technology')"
];

const authorsBio = {
    "Steve Jobs": "Steve Jobs was the co-founder of Apple and a visionary in technology.",
    "John Lennon": "John Lennon was a musician and member of The Beatles.",
    "Winston Churchill": "Winston Churchill was the British Prime Minister during WWII."
    // Add more authors with their bios
};

function generateQuote() {
    const randomCategory = document.querySelector("select").value;
    const quoteArray = categories[randomCategory];
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const quote = quoteArray[randomIndex];

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const bioElement = document.getElementById("bio");

    // Change background image
    const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = backgrounds[randomBackgroundIndex];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Fade-out effect
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        // Set new quote and author
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;

        // Display author's bio
        bioElement.textContent = authorsBio[quote.author] || "No bio available.";

        // Update social media links
        document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
        document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote="${quote.text}" - ${quote.author}`;

        // Fade-in effect
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

function saveFavorite() {
    const favoriteQuote = {
        text: document.getElementById("quote").textContent,
        author: document.getElementById("author").textContent
    };
    localStorage.setItem("favoriteQuote", JSON.stringify(favoriteQuote));
    alert("Quote saved as favorite!");
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function changeCategory(category) {
    const quoteArray = categories[category];
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const quote = quoteArray[randomIndex];

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const bioElement = document.getElementById("bio");

    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;

    bioElement.textContent = authorsBio[quote.author] || "No bio available.";
}

// Initialize with a quote
window.onload = generateQuote;
