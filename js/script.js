// Toggle Functions

let NIGHTSTATE = false; 
let toggle = false;

// HTML elements

const nightmode_elements = document.getElementById("nightmain").querySelectorAll(".nightmode");
const nightmode_elements_white = document.getElementById("nightmain").querySelectorAll(".nightmode-w");
const nightmode_elements_switch = document.getElementById("nightmain").querySelectorAll(".nightmode-s");
const nightmode_elements_div = document.getElementById("nightmain").querySelectorAll(".nightmode-div");
const nightmode_elements_div2 = document.getElementById("nightmain").querySelectorAll(".nightmode-div2");
const nightmode_links = document.getElementById("nightmain").querySelectorAll("a");

// Main On Click Function

function nightmode(){
    
    // Setting the nightmode state (used in toggling function)
    
    function setState(state){
        NIGHTSTATE = state;
        // console.log("State: ", NIGHTSTATE);
    }

    if(NIGHTSTATE == false){

        // Night Mode On

        setState(true)
        for (var i = 0; i < nightmode_elements.length; i++){
            nightmode_elements[i].style.color = "var(--brandcolor2)";
        }
        for(var i = 0; i < nightmode_elements_white.length; i++){
            nightmode_elements_white[i].style.color = "white";
        }
        for(var i = 0; i < nightmode_elements_switch.length; i++){
            nightmode_elements_switch[i].style.color = "white";
        }
        for(var i = 0; i < nightmode_elements_div.length; i++){
            nightmode_elements_div[i].style.backgroundColor = "var(--darksecondary)";
            nightmode_elements_div[i].style.boxShadow = "none";
        }
        for(var i = 0; i < nightmode_elements_div2.length; i++){
            nightmode_elements_div2[i].style.backgroundColor = "var(--darktertiary)";
            nightmode_elements_div2[i].style.border = "none";
        }

        for (var i = 0; i < nightmode_links.length; i++) {
            nightmode_links[i].style.color = "var(--brandcolor2)"
        }
        document.getElementById("nightmain").style.backgroundColor = "var(--darkmain)";
        
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode'

        //Resetting the function (stopping the function here)

        let teamResults = document.querySelector('#team-results table tbody');
        for (var i = 1; i < teamResults.childElementCount; i++) {
            if (i % 2 == 0) {
                teamResults.childNodes[i].style.backgroundColor = "var(--darktertiary)";
            }
        }

        let athleteResults = document.querySelector('#athlete-results table tbody');
        for (var i = 1; i < athleteResults.childElementCount; i++) {
            if (i % 2 == 0) {
                athleteResults.childNodes[i].style.backgroundColor = "var(--darktertiary)";
            }
        }


        toggle = true;
    }

    if(toggle == false){ 
        if(NIGHTSTATE == true){

            // Light Mode on

            setState(false)
            for (var i = 0; i < nightmode_elements.length; i++){
                nightmode_elements[i].style.color = "black";
            }
            for (var i = 0; i < nightmode_elements_white.length; i++){
                nightmode_elements_white[i].style.color = "black";
            }
            for(var i = 0; i < nightmode_elements_switch.length; i++){
                nightmode_elements_switch[i].style.color = "var(--brandcolor)";
            }
            for(var i = 0; i < nightmode_elements_div.length; i++){
                nightmode_elements_div[i].style.backgroundColor = "white";
                nightmode_elements_div[i].style.boxShadow = "grey 4px 3px 10px";
            }
            for(var i = 0; i < nightmode_elements_div2.length; i++){
                nightmode_elements_div2[i].style.backgroundColor = "var(--lightgrey)";
            }

            for (var i = 0; i < nightmode_links.length; i++) {
                nightmode_links[i].style.color = "var(--brandcolor)"
            }

            document.getElementById("nightmain").style.backgroundColor = "white";

            document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-moon"></i> Night Mode'

            let teamResults = document.querySelector('#team-results table tbody');
            for (var i = 1; i < teamResults.childElementCount; i++) {
                if (i % 2 == 0) {
                    teamResults.childNodes[i].style.backgroundColor = "var(--lightgrey)";
                }
            }

            let athleteResults = document.querySelector('#athlete-results table tbody');
            for (var i = 1; i < athleteResults.childElementCount; i++) {
                if (i % 2 == 0) {
                    athleteResults.childNodes[i].style.backgroundColor = "var(--lightgrey)";
                }
            }

        }
   }

   //Resetting Function

   toggle = false;
}