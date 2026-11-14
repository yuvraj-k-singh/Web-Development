const btn = document.querySelector("button");
const result = document.querySelector("h2");

const quotes = [
    "Believe in yourself and all that you are.",
    "Dream big, work hard, and stay focused.",
    "Success begins with self-discipline.",
    "Never stop learning because life never stops teaching.",
    "Every day is a new opportunity to grow.",
    "Small steps every day lead to big results.",
    "Your only limit is your mind.",
    "Great things take time, so be patient.",
    "Don't wait for opportunity, create it.",
    "Failure is the first step towards success.",
    "Stay positive, work hard, and make it happen.",
    "The future depends on what you do today.",
    "Be stronger than your excuses.",
    "Difficult roads often lead to beautiful destinations.",
    "Consistency is the key to success.",
    "Believe you can, and you're halfway there.",
    "Your dreams are worth fighting for.",
    "Make yourself proud.",
    "A little progress each day adds up to big results.",
    "Don't fear failure; fear being in the same place next year.",
    "Work hard in silence and let success make the noise.",
    "Turn your obstacles into opportunities.",
    "Stay hungry, stay foolish, and keep growing.",
    "The best way to predict the future is to create it.",
    "Never give up on something you truly want."
];

btn.addEventListener("click", ()=>{
    let index = Math.floor(Math.random() * quotes.length);
    result.textContent = quotes[index];
})