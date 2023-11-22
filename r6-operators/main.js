// Main JavaScript file



const operators =
[
    // Defenders
    {
        operatorName: "Mute",
        operatorSpeed: 1,
        operatorQuote: "\"People think my codename is because I don’t like to talk. Maybe I just don’t like you.\"",
        operatorDescription: "placeholder descriptoion for mute",
        operatorPortrait: "https://static.wikia.nocookie.net/rainbowsix/images/7/7e/Mute_-_Full_Body.png",
        operatorIcon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3exeHnxH1tmUmQTequWRKa/e1b6c6f057eb24722dd7860af0276316/Y0R6_BADGE_Mute_L.png"
    },
    {
        operatorName: "Smoke",
        operatorSpeed: 2,
        operatorQuote: "Smokes Quote placeholder",
        operatorDescription: "Smokes description placeholder",
        operatorPortrait: "smokes portrait placeholder",
        operatorIcon: "smokes icon placeholder"
    },
    {
        // put a 3 speed here
    }
]




const flashcards = 
[
    {
        question: 'What is the capitial of the United States?',
        answer: 'Washington, D.C.'
    },
    {
        question: 'What is 2+2?',
        answer: '4'
    },
    { question: 'who is the best op in siege?', answer: 'tachanka'}
];


// Create a variable to store the current flashcard index
let currentCard = 0;


// Create a function to update the flashcards
function updateFlashCard()
{
    // get the current card object
    const card = document.getElementById('flashcard');
    

    // Check if the card is flipped in case flipped means the answer is showing. There are only two sides to a flash card. The question side and the answer side.
    if(card.classList.contains('flipped'))
    {
        card.textContent = flashcards[currentCard].answer;
    }
    else
    {
        card.textContent = flashcards[currentCard].question;
    }
}


// init first card
updateFlashCard();


// This is the event listener for the flash card
document.getElementById('flashcard').addEventListener('click', function()
{
    // Toggle the flipped class so the card flips
    this.classList.toggle('flipped');

    // Update the card content by calling the updateFlashCard function
    updateFlashCard();
});


// Event listener for next button
document.getElementById('next').addEventListener('click', function()
{
    // Increment the current card index
    currentCard = (currentCard + 1) % flashcards.length;

    // Get the flash card element
    const card = document.getElementById('flashcard');

    // Remove...
    card.classList.remove('flipped');
    
    updateFlashCard();
});

