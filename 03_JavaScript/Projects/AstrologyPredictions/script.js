const form = document.querySelector("form");
const result = document.querySelector("#result");

const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const dailyPredictions = [
    "Today is a perfect day to start something new. Trust your abilities.",
    "A new opportunity may bring positive changes to your life.",
    "Stay patient. Good things take time to develop.",
    "Your hard work may finally receive the recognition it deserves.",
    "Focus on your goals and avoid unnecessary distractions.",
    "Someone close to you may bring a pleasant surprise.",
    "Today is a good day to express your feelings honestly.",
    "A challenging situation may teach you an important lesson.",
    "Believe in your decisions and move forward confidently.",
    "Your creativity could help you discover a new opportunity.",
    "Take a break and give yourself time to recharge.",
    "A meaningful conversation may improve your relationships.",
    "Stay focused because your efforts are building your future.",
    "Today could bring an unexpected moment of happiness.",
    "Avoid making important decisions in a hurry.",
    "Your positive attitude can make a difficult day easier.",
    "A new friendship may bring fresh energy into your life.",
    "Pay attention to small details at work or in your studies.",
    "Today is suitable for learning something new.",
    "Your confidence will help you overcome an obstacle.",
    "Spend some quality time with your family.",
    "An old problem may finally find a solution.",
    "Be open to suggestions and different perspectives.",
    "Your patience will be valuable in an important situation.",
    "A small achievement deserves to be celebrated.",
    "Avoid unnecessary arguments and maintain your peace.",
    "Today may bring an interesting learning experience.",
    "Focus on improving yourself rather than comparing yourself with others.",
    "A creative idea could turn into something meaningful.",
    "Take care of your physical and emotional well-being.",
    "Your determination will help you make progress.",
    "Someone may appreciate your kindness and support.",
    "It is a good day to organize your plans for the future.",
    "Do not allow temporary setbacks to affect your confidence.",
    "An unexpected opportunity may encourage you to try something different.",
    "Be careful with your spending and financial decisions.",
    "Your communication skills may help resolve a misunderstanding.",
    "Give yourself permission to slow down and relax.",
    "A positive change may begin with a small decision.",
    "Trust the process and remain consistent with your efforts.",
    "Today is a good opportunity to reconnect with old friends.",
    "Your dedication may open doors to new possibilities.",
    "Listen carefully before making an important decision.",
    "A little kindness can make someone's day better.",
    "Stay optimistic even when things do not go as planned.",
    "Your focus and discipline will help you achieve your goals.",
    "Try something outside your comfort zone today.",
    "Make time for the people who genuinely support you.",
    "An interesting idea may inspire your next project.",
    "End your day with gratitude for the progress you have made."
];

const luckyDetails = [
    { number: 7, color: "Purple", time: "7:00 AM" },
    { number: 3, color: "Yellow", time: "9:30 AM" },
    { number: 9, color: "Red", time: "11:00 AM" },
    { number: 5, color: "Green", time: "8:15 AM" },
    { number: 2, color: "White", time: "6:45 AM" },
    { number: 8, color: "Blue", time: "10:30 AM" },
    { number: 4, color: "Orange", time: "12:00 PM" },
    { number: 6, color: "Pink", time: "3:00 PM" },
    { number: 1, color: "Gold", time: "7:30 AM" },
    { number: 11, color: "Silver", time: "5:00 PM" },
    { number: 13, color: "Maroon", time: "9:00 AM" },
    { number: 22, color: "Turquoise", time: "2:30 PM" },
    { number: 17, color: "Lavender", time: "8:00 AM" },
    { number: 12, color: "Cream", time: "11:30 AM" },
    { number: 19, color: "Coral", time: "4:00 PM" },
    { number: 21, color: "Sky Blue", time: "10:00 AM" },
    { number: 14, color: "Peach", time: "1:30 PM" },
    { number: 25, color: "Teal", time: "6:00 PM" },
    { number: 16, color: "Indigo", time: "7:15 AM" },
    { number: 10, color: "Brown", time: "12:30 PM" },
    { number: 27, color: "Magenta", time: "3:45 PM" },
    { number: 18, color: "Olive", time: "9:45 AM" },
    { number: 23, color: "Violet", time: "5:30 PM" },
    { number: 15, color: "Cyan", time: "8:45 AM" },
    { number: 29, color: "Beige", time: "2:00 PM" },
    { number: 31, color: "Navy Blue", time: "11:15 AM" },
    { number: 6, color: "Mint Green", time: "4:30 PM" },
    { number: 24, color: "Rose", time: "7:45 AM" },
    { number: 32, color: "Charcoal", time: "1:00 PM" },
    { number: 20, color: "Lime", time: "10:45 AM" },
    { number: 33, color: "Champagne", time: "6:15 PM" },
    { number: 26, color: "Burgundy", time: "9:15 AM" },
    { number: 35, color: "Aqua", time: "12:45 PM" },
    { number: 28, color: "Emerald", time: "3:15 PM" },
    { number: 30, color: "Peacock Blue", time: "5:45 PM" }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let signIndex = Math.floor(Math.random() * zodiacSigns.length);
    let pIndex = Math.floor(Math.random() * dailyPredictions.length);
    let luckyIndex = Math.floor(Math.random() * luckyDetails.length);

    const fragment = new DocumentFragment();

    const nameDiv = document.createElement("div");
    nameDiv.id = "nameDiv";

    const nameh3 = document.createElement("h3");
    const name = document.querySelector("#name").value;

    nameh3.textContent = `Your Name: ${name}`;
    nameDiv.append(nameh3);

    const zodiacDiv = document.createElement("div");
    zodiacDiv.id = "zodiacDiv";

    const zodiach3 = document.createElement("h3");
    zodiach3.textContent = `Zodiac Sign: ${zodiacSigns[signIndex]}`;

    zodiacDiv.append(zodiach3);

    const dailyDiv = document.createElement("div");
    dailyDiv.id = "dailyDiv";

    const dailyh3 = document.createElement("h3");
    dailyh3.textContent = `Daily Prediction:`;

    const dailyP = document.createElement("p");
    dailyP.textContent = dailyPredictions[pIndex];

    dailyDiv.append(dailyh3, dailyP);

    const luckyDiv = document.createElement("div");
    luckyDiv.id = "luckyDiv";

    const luckyh3 = document.createElement("h3");
    luckyh3.textContent = `Lucky Prediction:`;

    const lNumber = document.createElement("p");
    lNumber.textContent = `Number: ${luckyDetails[luckyIndex].number}`;

    const lColor = document.createElement("p");
    lColor.textContent = `Color: ${luckyDetails[luckyIndex].color}`;

    const lTime = document.createElement("p");
    lTime.textContent = `Time: ${luckyDetails[luckyIndex].time}`;

    luckyDiv.append(luckyh3, lNumber, lColor, lTime);

    fragment.append(nameDiv, zodiacDiv, dailyDiv, luckyDiv);

    result.replaceChildren(fragment);

    result.style.visibility = "visible";

    form.reset();
});