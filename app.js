// set heart icon to loveButton variable and sets heart icon color;
let loveButton = document.getElementById('likes-heart');
loveButton.style.color = "white";

// set counter to countLikes variable;
let countLikes = document.getElementById('count');

// set initial counter value to 0;
let num = 0;

// set initial paragraph content field and icon color;
countLikes.textContent = num + " likes";

function likesCounter(){

    /* Sets For singular 1 like only
    - if heart icon is white and clicked, change icon to red and increase count by 1; */
    if(num == 0 && loveButton.style.color == "white"){
        loveButton.style.color = "red";
        loveButton.style.transition = "color 0.3s";
        num++;
        countLikes.textContent = num + " like";
    } 

    // sets the same parameters for all other counts when heart icon is white, but pluralises the count;
    else if(num > 0 && loveButton.style.color == "white"){
        loveButton.style.color = "red";
        loveButton.style.transition = "color 0.3s";
        num++;
        countLikes.textContent = num + " likes";
    }

    // ALWAYS GREATER THAN 0 - if icon is red and clicked, change icon to white and decrease count by 1;
    else {
        loveButton.style.color = "white";
        loveButton.style.transition = "color 0.3s";
        num--;
        countLikes.textContent = num + " likes";
    }
}