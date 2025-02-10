let diceImg = document.getElementById("diceImg");
let num1 = 1;

function dice() {
  let diceRoll = Math.ceil(Math.random() * 6);

  diceImg.src = `IMG/${diceRoll}.png`;

  num1 = diceRoll;

  return diceRoll;
}

function nextDice() {
  if (num1 < 6) {
    ++num1;
    diceImg.src = `IMG/${num1}.png`;
  } else {
    num1 = 1;
    diceImg.src = `IMG/${num1}.png`;
  }
}

function previousDice() {
  if (num1 > 1) {
    --num1;
    diceImg.src = `IMG/${num1}.png`;
  } else {
    num1 = 6;
    diceImg.src = `IMG/${num1}.png`;
  }
}

dice();
