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
for (let i = 1; i < 11; i++) {
  let x = getRandomInt(1, 10);
  let y = getRandomInt(1, x);
  let eq = "";
  let op = getRandomoperate();
  switch (op) {
    case 1:
      op = " + ";
      break;
    case 2:
      op = " - ";
      break;
    case 3:
      op = " * ";
      break;
    case 4:
      op = " / ";
      break;
    default:

  }
  eq = x + op + y;
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
  if (c >= 15) {



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
  } else if (c >= 10) {
    document.body.innerHTML = '<center>' +
      '<h1 id="con">Good Job 😊</h1>' +
      '<h1 id="mark">your Mark is: ' + c + '</h1>' +
      '<a href="index.html"><input id="btns" class="submit btn btn-outline-light btn-lg" type="submit" value="Back Home"></a>' +
      '</center>';
  } else if (c < 10) {
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
