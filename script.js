const getFactBtn = document.getElementById('getFactBtn');
const addFactBtn = document.getElementById('addFactBtn');
const themeToggle = document.getElementById('themeToggle');
const factText = document.getElementById('factText');
const newFactInput = document.getElementById('newFactInput');

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleBtn(savedTheme);

themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleBtn(newTheme);
};

function updateToggleBtn(theme) {
    themeToggle.innerText = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Facts Logic for Netlify (Static Hosting)
let initialFacts = [
    "The first computer programmer was a woman named Ada Lovelace.",
    "The first computer mouse was made of wood.",
    "HP, Google, Microsoft, and Apple all started in garages.",
    "The 1st gigabyte hard drive cost $40,000.",
    "The Firefox logo isn't a fox, it's a red panda!",
    "Samsung as a company is older than Apple.",
    "There are over 700 programming languages in use today.",
    "The first robot was created in the 5th century BC.",
    "Domain names weren't free until 1995.",
    "Google's first storage was made from LEGO bricks."
];

// Load user-added facts from localStorage
function getLearnedFacts() {
    const stored = localStorage.getItem('user-facts');
    return stored ? JSON.parse(stored) : [];
}

getFactBtn.onclick = () => {
    const allFacts = [...initialFacts, ...getLearnedFacts()];
    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
    factText.innerText = randomFact;
};

addFactBtn.onclick = () => {
    const fact = newFactInput.value.trim();
    if (!fact) return alert("Please enter a fact!");

    const learned = getLearnedFacts();
    learned.push(fact);
    localStorage.setItem('user-facts', JSON.stringify(learned));

    alert("Fact learned successfully! Since this is a static site (Netlify), this fact is saved locally in your browser.");
    newFactInput.value = '';
};

// Logic update 0
// Logic update 1
// Logic update 8