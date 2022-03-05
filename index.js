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
for (let i = 1; i < 6; i++) {
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
  document.getElementById(ans1).innerText = eq1;
  document.getElementById(ans2).innerText = eq1 - 1;
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

  for (const rb of rbs1) {
    if (rb.checked) {
      if (document.querySelector('#r11').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs2) {
    if (rb.checked) {
      if (document.querySelector('#r21').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs3) {
    if (rb.checked) {
      if (document.querySelector('#r31').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs4) {
    if (rb.checked) {
      if (document.querySelector('#r41').value == rb.value)
        c += 2;
      break;
    }
  }
  for (const rb of rbs5) {
    if (rb.checked) {
      if (document.querySelector('#r51').value == rb.value)
        c += 2;
      break;
    }
  }

  if (c >= 7) {
    document.getElementById('next-page').action = "hard.html";
  } else if (c >= 5) {
    document.getElementById('next-page').action = "intermediate.html";
  } else if (c < 5) {
    document.getElementById('next-page').action = "easy.html";
  }
};
