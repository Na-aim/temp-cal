function convertCelsius() {
  var errorString = "try entering just a number...";
  var degFahren = document.getElementById("degFahren").value;
  var degCent = (5 / 9) * (degFahren - 32);
  var resultCelsius =
    degFahren +
    " &deg;F converts to approximately " +
    Math.round(degCent) +
    " &deg;C";
  if (!isNaN(degFahren)) {
    document.getElementById("resultCelsius").innerHTML = resultCelsius;
    return false;
  } else {
    document.getElementById("resultCelsius").innerHTML = errorString;
    return false;
  }
}

function convertFahrenheit() {
  var errorString = "try entering just a number...";
  var degCelsius = document.getElementById("degCelsius").value;
  var degFahren = (9 / 5) * degCelsius + 32;
  var resultFahren =
    degCelsius +
    " &deg;C converts to approximately " +
    Math.round(degFahren) +
    " &deg;F";
  if (!isNaN(degCelsius)) {
    document.getElementById("resultFahren").innerHTML = resultFahren;
    return false;
  } else {
    document.getElementById("resultFahren").innerHTML = errorString;
    return false;
  }
}

function clearSum() {
  document.getElementById("degFahren").value = "";
  document.getElementById("resultCelsius").innerHTML = "";
}

function clearWords() {
  document.getElementById("degCelsius").value = "";
  document.getElementById("resultFahren").innerHTML = "";
}

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
