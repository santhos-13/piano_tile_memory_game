let randomarray = [];

let points = 0;
let i = 0;
let clickedtiles = [];

function soundclick() {
  var audio = new Audio();
  audio.src = "mixkit-arcade-game-jump-coin-216.wav";
  audio.play();
}

function gameover() {
  var audio = new Audio();
  audio.src = "mixkit-piano-game-over-1941.wav";
  audio.play();
}

function clicked(Event) {
  soundclick();
  let tile = Event.target.getAttribute("id");

  clickedtiles.push(tile);
  console.log(clickedtiles);

  if (clickedtiles.length == randomarray.length) {
    console.log("length equal");
    checker();
  }
}

function checker2() {
  for (let k = 0; k < randomarray.length; ++k) {
    console.log("checker2 run");
    if (randomarray[k] !== parseInt(clickedtiles[k])) {
      console.log(randomarray[k]);

      console.log(clickedtiles[k]);
      console.log("helo1");
      return false;
    } else {
      console.log("helo2");
      return true;
    }
  }
}

function checker() {
  const ans = clickedtiles.every((i) => {
    return randomarray.includes(parseInt(i));
  });
  if (randomarray.length === clickedtiles.length) {
    console.log("if is true");

    if (checker2()) {
      while (clickedtiles.length) {
        clickedtiles.pop();
      }
      console.log("checker2 is true");
      points++;
      console.log(points);
      random();
    } else {
      gameover();
      alert("game over points scored:" + points);
    }
  }
}

function anime(randomarray) {
  for (let i = 0; i < randomarray.length; i++) {
    setTimeout(() => {
      document.getElementById(randomarray[i]).classList.remove("animate");
      setTimeout(() => {
        document.getElementById(randomarray[i]).classList.add("animate");
      }, 2000);
    }, 2000);
  }
}

function random() {
  let random_no = Math.floor(Math.random() * 36);
  if (randomarray.includes(random_no)) {
    random();
  } else {
    randomarray.push(random_no);
    console.log(randomarray);
    anime(randomarray);
  }
}
for (let j = 0; j < 36; j++) {
  document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", clicked);
  });
}

random();
