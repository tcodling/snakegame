let height = 10;
let width = 15;
let snake = {
    x: 0,
    y: 0
};
let endgame = false;

for (let i = 0; i < height; i++) {
    const row = `<div class='row ${i}'></div>`
    $("#board").append(row)
}

for (let i = 0; i < width; i++) {
    const cell = `<div class='cell ${i}'></div>`
    $(".row").append(cell)
}

function progress() {
    console.log("tick")
}

while (endgame == false) {
    console.log("let the games begin")
    setInterval(progress, 1000)
}