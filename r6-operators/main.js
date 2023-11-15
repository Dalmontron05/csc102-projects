const flashcards = 
[
    { question: 'What is teh capitial of the United States?', answer: 'Washington, D.C.' },
    { question: 'What is 2+2?', answer: '4'},
];

// Create a variable to store teh current flashcard index
let currentCard = 0;


// Create a function to update the flashcards
function updateCard()
{
    // get the curretn card object
    const card = document.getElementById('flashcard');
    
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
document.getElementById('flashcard').addEventListener('click,' function())
{
    
}