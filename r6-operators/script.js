// Main JavaScript file



const operators =
[
    // Defenders
    {
        operatorName: "Mute",
        operatorSpeed: 1, // Armor is calculated from speed
        operatorQuote: "\"People think my codename is because I don’t like to talk. Maybe I just don’t like you.\"",
        operatorDescription: "TEMPORARY Mute is best used as an anchor. He passively denies attackers drones. He also has a shotgun that's relatively good at site setup",
        operatorPortrait: "https://static.wikia.nocookie.net/rainbowsix/images/7/7e/Mute_-_Full_Body.png",
        operatorIcon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3exeHnxH1tmUmQTequWRKa/e1b6c6f057eb24722dd7860af0276316/Y0R6_BADGE_Mute_L.png"
    },
    {
        operatorName: "Smoke",
        operatorSpeed: 2,
        operatorQuote: "\"Sure, I care about the enviroment. Immediately around me, anyway.\"",
        operatorDescription: "Smokes description placeholder",
        operatorPortrait: "https://static.wikia.nocookie.net/rainbowsix/images/0/0d/Smoke_-_Full_Body.png",
        operatorIcon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6mOMxoc3t27R9Gr9wFtt6T/f5f90a6be6a6710bee686ce69df29906/Y0R6_BADGE_Smoke_L.png"
    },
    {
        operatorName: "Bandit",
        operatorSpeed: 3,
        operatorQuote: "\"Survival is all about timing. Nature doesn’t give second chances.\"",
        operatorDescription: "Bandits placeholder description",
        operatorPortrait: "https://static.wikia.nocookie.net/rainbowsix/images/0/0a/Large-bandit.463ee829.png",
        operatorIcon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Vasjq82J1TNjNE38J7LmV/e1725f8d9ea2b85565e40b54faac85b8/Y0R6_BADGE_Bandit_L.png"
    }
]


// Create a variable to store the current operator index
let currentOperator = 0; //? what's the difference between let and var? block-scope like wtf is that


// function to update the operator info
function updateOperatorInfo()
{
    // Updates operator name
    document.getElementById("operator-name").innerHTML = operators[currentOperator].operatorName;


    // Updates operator portrait
    document.getElementById("operator-portrait").src = operators[currentOperator].operatorPortrait;


    // Updates operator icon
    document.getElementById("operator-icon").src = operators[currentOperator].operatorIcon;


    // Updates operator speed AND armor
    let speedDot1 = document.getElementById("speed-dot1");
    let speedDot2 = document.getElementById("speed-dot2");
    let speedDot3 = document.getElementById("speed-dot3");
    let armorDot1 = document.getElementById("armor-dot1");
    let armorDot2 = document.getElementById("armor-dot2");
    let armorDot3 = document.getElementById("armor-dot3");

    //* Make the style attributes not hardcoded at some point
    if (operators[currentOperator].operatorSpeed == 1)
    {
        speedDot1.style["background-color"] = "beige";
        speedDot2.style["background-color"] = "transparent";
        speedDot3.style["background-color"] = "transparent";

        armorDot1.style["background-color"] = "beige";
        armorDot2.style["background-color"] = "beige";
        armorDot3.style["background-color"] = "beige";
    }
    else if (operators[currentOperator].operatorSpeed == 2)
    {
        speedDot1.style["background-color"] = "beige";
        speedDot2.style["background-color"] = "beige";
        speedDot3.style["background-color"] = "transparent";

        armorDot1.style["background-color"] = "beige";
        armorDot2.style["background-color"] = "beige";
        armorDot3.style["background-color"] = "transparent";
    }
    else
    {
        speedDot1.style["background-color"] = "beige";
        speedDot2.style["background-color"] = "beige";
        speedDot3.style["background-color"] = "beige";

        armorDot1.style["background-color"] = "beige";
        armorDot2.style["background-color"] = "transparent";
        armorDot3.style["background-color"] = "transparent";
    }


    // Updates operator quote
    document.getElementById("operator-quote").innerHTML = operators[currentOperator].operatorQuote


    // Updates operator description
    document.getElementById("operator-description").innerHTML = operators[currentOperator].operatorDescription
}


//* THIS IS TEMPORARY until you've given proper operator 'template' info within html itself
// init first operator
updateOperatorInfo();


// event listener for next button
document.getElementById("next").addEventListener("click", function()
{
    // Keeps array from going out of bounds
    if (currentOperator >= (operators.length - 1))
    {
        return;
    }
    else
    {
        // Increment the current operator index
        currentOperator++;

        // Update
        updateOperatorInfo();
    };
});


// event listener for previous button
document.getElementById("previous").addEventListener("click", function()
{
    // Keeps array from going out of bounds
    if (currentOperator <= 0)
    {
        return;
    }
    else
    {
        // Decrement the current operator index
        currentOperator--;
        
        // Update
        updateOperatorInfo();
    }
});

