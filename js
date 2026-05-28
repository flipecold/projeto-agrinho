// BOTÃO EXPLORAR

function scrollToSection() {

  document.getElementById('sobre').scrollIntoView({
    behavior: 'smooth'
  });

}

// QUIZ

function checkAnswer(answer) {

  const result = document.getElementById('result');

  if(answer === 'a') {

    result.innerHTML =
      '✅ Correto! A irrigação inteligente economiza água.';

    result.style.color = 'green';

  } else {

    result.innerHTML =
      '❌ Resposta incorreta. Tente novamente!';

    result.style.color = 'red';
  }

}

// CONTADOR ANIMADO

let water = 0;
let trees = 0;
let energy = 0;

const waterCounter = document.getElementById('water');
const treesCounter = document.getElementById('trees');
const energyCounter = document.getElementById('energy');

const interval = setInterval(() => {

  if(water < 5000) {
    water += 50;
    waterCounter.innerHTML = water;
  }

  if(trees < 1200) {
    trees += 10;
    treesCounter.innerHTML = trees;
  }

  if(energy < 800) {
    energy += 5;
    energyCounter.innerHTML = energy;
  }

  if(water >= 5000 && trees >= 1200 && energy >= 800) {
    clearInterval(interval);
  }

}, 30);
