function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomoperate() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i < 26; i++) {
  let x = getRandomInt(1, 10);
  let y = getRandomInt(1, x);
  let z = getRandomInt(1, y);
  let eq = "";
  let op1 = getRandomoperate();
  let op2 = getRandomoperate();
  switch (op1) {
    case 1:
      op1 = " + ";
      break;
    case 2:
      op1 = " - ";
      break;
    case 3:
      op1 = " * ";
      break;
    case 4:
      op1 = " / ";
      break;
    default:

  }
  switch (op2) {
    case 1:
      op2 = " + ";
      break;
    case 2:
      op2 = " - ";
      break;
    case 3:
      op2 = " * ";
      break;
    case 4:
      op2 = " / ";
      break;
    default:

  }

  eq = x + op1 + '( ' + y + op2 + z + ' )';
  let eq1 = Math.floor(eval(eq));
  let Q = "Q" + i;
  let ans1 = "ans" + i + "1";
  let ans2 = "ans" + i + "2";
  let ans3 = "ans" + i + "3";
  document.getElementById(Q).innerHTML = " • <strong>Q" + i + ".</strong>" + "  " + eq + " =";
  document.getElementById(ans1).innerText = eq1 - 1;
  document.getElementById(ans2).innerText = eq1;
  document.getElementById(ans3).innerText = eq1 + 2;
}

let c = 0;
const btn = document.querySelector('#btn');
btn.onclick = function() {
  const rbs1 = document.querySelectorAll('input[name="radio1"]');
  const rbs2 = document.querySelectorAll('input[name="radio2"]');
  const rbs3 = document.querySelectorAll('input[name="radio3"]');
  const rbs4 = document.querySelectorAll('input[name="radio4"]');
  const rbs5 = document.querySelectorAll('input[name="radio5"]');
  const rbs6 = document.querySelectorAll('input[name="radio6"]');
  const rbs7 = document.querySelectorAll('input[name="radio7"]');
  const rbs8 = document.querySelectorAll('input[name="radio8"]');
  const rbs9 = document.querySelectorAll('input[name="radio9"]');
  const rbs10 = document.querySelectorAll('input[name="radio10"]');
  const rbs11 = document.querySelectorAll('input[name="radio1"]');
  const rbs12 = document.querySelectorAll('input[name="radio12"]');
  const rbs13 = document.querySelectorAll('input[name="radio13"]');
  const rbs14 = document.querySelectorAll('input[name="radio14"]');
  const rbs15 = document.querySelectorAll('input[name="radio15"]');
  const rbs16 = document.querySelectorAll('input[name="radio16"]');
  const rbs17 = document.querySelectorAll('input[name="radio17"]');
  const rbs18 = document.querySelectorAll('input[name="radio18"]');
  const rbs19 = document.querySelectorAll('input[name="radio19"]');
  const rbs20 = document.querySelectorAll('input[name="radio20"]');
  const rbs21 = document.querySelectorAll('input[name="radio21"]');
  const rbs22 = document.querySelectorAll('input[name="radio22"]');
  const rbs23 = document.querySelectorAll('input[name="radio23"]');
  const rbs24 = document.querySelectorAll('input[name="radio24"]');
  const rbs25 = document.querySelectorAll('input[name="radio25"]');
  for (const rb of rbs1) {
    if (rb.checked) {
      if (document.querySelector('#r12').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs2) {
    if (rb.checked) {
      if (document.querySelector('#r22').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs3) {
    if (rb.checked) {
      if (document.querySelector('#r32').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs4) {
    if (rb.checked) {
      if (document.querySelector('#r42').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs5) {
    if (rb.checked) {
      if (document.querySelector('#r52').value == rb.value)
        c += 2;
      break;
    }
  }


  for (const rb of rbs6) {
    if (rb.checked) {
      if (document.querySelector('#r62').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs7) {
    if (rb.checked) {
      if (document.querySelector('#r72').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs8) {
    if (rb.checked) {
      if (document.querySelector('#r82').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs9) {
    if (rb.checked) {
      if (document.querySelector('#r92').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs10) {
    if (rb.checked) {
      if (document.querySelector('#r102').value == rb.value)
        c += 2;
      break;
    }
  }

  for (const rb of rbs11) {
    if (rb.checked) {
      if (document.querySelector('#r112').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs12) {
    if (rb.checked) {
      if (document.querySelector('#r122').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs13) {
    if (rb.checked) {
      if (document.querySelector('#r132').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs14) {
    if (rb.checked) {
      if (document.querySelector('#r142').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs15) {
    if (rb.checked) {
      if (document.querySelector('#r152').value == rb.value)
        c += 2;
      break;
    }
  }


  for (const rb of rbs16) {
    if (rb.checked) {
      if (document.querySelector('#r162').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs17) {
    if (rb.checked) {
      if (document.querySelector('#r172').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs18) {
    if (rb.checked) {
      if (document.querySelector('#r182').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs19) {
    if (rb.checked) {
      if (document.querySelector('#r192').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs20) {
    if (rb.checked) {
      if (document.querySelector('#r202').value == rb.value)
        c += 2;
      break;
    }
  }

  for (const rb of rbs21) {
    if (rb.checked) {
      if (document.querySelector('#r212').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs22) {
    if (rb.checked) {
      if (document.querySelector('#r222').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs23) {
    if (rb.checked) {
      if (document.querySelector('#r232').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs24) {
    if (rb.checked) {
      if (document.querySelector('#r242').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs25) {
    if (rb.checked) {
      if (document.querySelector('#r252').value == rb.value)
        c += 2;
      break;
    }
  }
  if (c >= 45) {



    document.body.style.backgroundColor = "#3DB2FF";
    document.body.innerHTML = '<audio controls autoplay hidden>' +
      '<source src="./sound/Fireworks-Sound-Effect.mp3" type="audio/mpeg">' +
      '</audio>' +
      '  <div class="pyro">' +
      '<div class="before"></div>' +
      '<div class="after"></div>' +
      '</div>' +
      '<center>' +
      '<h1 id="con">Congratulations 🎉</h1>' +
      '<h1 id="mark">your Mark is: ' + c + '</h1>' +
      '<a href="index.html"><input id="btns" class="submit btn btn-outline-light btn-lg" type="submit" value="Back Home"></a>' +
      '</center>';
  } else if (c >= 25) {
    document.body.innerHTML = '<center>' +
      '<h1 id="con">Good Job 😊</h1>' +
      '<h1 id="mark">your Mark is: ' + c + '</h1>' +
      '<a href="index.html"><input id="btns" class="submit btn btn-outline-light btn-lg" type="submit" value="Back Home"></a>' +
      '</center>';
  } else if (c < 25) {
    document.body.innerHTML = '<audio controls autoplay hidden>' +
      '<source src="./sound/Fail-Sound-Effect.mp3" type="audio/mpeg">' +
      '</audio>' +
      '<center>' +
      '<h1 id="con">You Lose ☹️</h1>' +
      '<h1 id="mark">your Mark is: ' + c + '</h1>' +
      '<a href="index.html"><input id="btns" class="submit btn btn-outline-light btn-lg" type="submit" value="Back Home"></a>' +
      '</center>';
  }
};
