const random = document.getElementById("random");
const color_window = document.querySelector(".window");
const rgb_code = document.getElementById("rgb_code");
const hex_code = document.getElementById("hex_code");


const red_input = document.getElementById("red_input");
const green_input = document.getElementById("green_input");
const blue_input = document.getElementById("blue_input");
const red_value = document.getElementById("red_value");
const green_value = document.getElementById("green_value");
const blue_value = document.getElementById("blue_value");


const allcolor = document.querySelectorAll(".color_input")

window.onload = () => {
    const {RED, GREEN, BLUE} = genarate_RGB_code();

    color_window.style.background = `rgb(${RED}, ${GREEN}, ${BLUE})`
}

// for random button
random.addEventListener("click", () => {
    const {RED, GREEN, BLUE} = genarate_random_code();
    // for HEX code random
    let hexRed = hexCode(RED)
    let hexGreen = hexCode(GREEN)
    let hexBlue = hexCode(BLUE)

    let hexColor = `#${hexRed}${hexGreen}${hexBlue}`

    hex_code.innerHTML = hexColor;


    // for RGB code random
    rgb_code.innerHTML = `rgb(${RED}, ${GREEN}, ${BLUE})`;
    red_value.innerHTML = RED;
    green_value.innerHTML = GREEN;
    blue_value.innerHTML = BLUE;

    red_input.value = RED;
    green_input.value = GREEN;
    blue_input.value = BLUE;

    // show the color to window
    color_window.style.background = `rgb(${RED}, ${GREEN}, ${BLUE})`
})




// for all RGB input range
allcolor.forEach(color => {
    color.addEventListener("input", () => {
        changeColor();
        displayColor()
    })
})


// genarate random color in RGB
function genarate_random_code(){
    let RED = Math.floor(Math.random() * 255)
    let GREEN = Math.floor(Math.random() * 255)
    let BLUE = Math.floor(Math.random() * 255)

    return{RED, GREEN, BLUE};
}

// genarate hex code from RGB code
function hexCode(code){
    let getHex = parseInt(code).toString(16);

    if(getHex.length == 1){
        getHex = `0${getHex}`;
    }else{
        getHex;
    }

    return getHex;
}


// change color on range input
function changeColor() {
    let red_value = document.getElementById("red_value");
    let green_value = document.getElementById("green_value");
    let blue_value = document.getElementById("blue_value");

    red_value.innerHTML = red_input.value;
    green_value.innerHTML = green_input.value;
    blue_value.innerHTML = blue_input.value;
}


// display color on change input
function displayColor() {
    let RED = red_input.value;
    let GREEN = green_input.value;
    let BLUE = blue_input.value;

    let rgb_color = `rgb(${RED}, ${GREEN}, ${BLUE})`

    color_window.style.background = rgb_color;
    rgb_code.innerHTML = rgb_color;
}
