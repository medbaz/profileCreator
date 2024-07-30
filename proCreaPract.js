function insertImg(event) {
  var myIMG = document.getElementById("img");
  myIMG.src = URL.createObjectURL(event.target.files[0]);
}

const barMonths = document.getElementById("months");
const barDays = document.getElementById("days");
const barYears = document.getElementById("years");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function monthInsert() {
  // alert("sldfh");

  for (let i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", months[i]);
    option.textContent = months[i];
    barMonths.appendChild(option);
  }



  barMonths.addEventListener("input", extractMonth);
  let dayNum = function () {
    if (barMonths.value == "January") {
      dayNum = 28;
    }
  };
  dayNum();
  function extractMonth(ev) {
    let select = ev.target;
    let month = select.value;
    let currMonth = month;
    function daySelect(currMonth) {
      if (
        currMonth == "December" ||
        currMonth == "November" ||
        currMonth == "October" ||
        currMonth == "September"
      ) {
        dayNum = 30;
      } else if (
        currMonth == "August" ||
        currMonth == "July" ||
        currMonth == "June" ||
        currMonth == "May" ||
        currMonth == "February" ||
        currMonth == "March" ||
        currMonth == "April"
      ) {
        dayNum = 31;
      } else if (currMonth == "January") {
        dayNum = 28;
      }
      dayInsert(dayNum);
    }
    daySelect(currMonth);
  }

  dayInsert(dayNum);

  function dayInsert(num) {
    for (let i = 1; i <= num; i++) {
      const option2 = document.createElement("option");
      option2.textContent = i;
      barDays.appendChild(option2);
    }
  }

  function yearInsert() {
    for (let i = 0; i <= 100; i++) {
      let year = new Date().getFullYear();
      const option3 = document.createElement("option");
      option3.textContent = year - i;
      barYears.appendChild(option3);
    }
  }
  yearInsert();
}

monthInsert();

// audio play

const playme = document.getElementById("play-icon");
const audioHolder = document.getElementById("audio-holder");
playme.addEventListener("click", playAudio);

function playAudio() {
  audioHolder.play();
}

// function replaceAudio(event) {
//   alert("dslgfh")
//   const newAudio = documet.getElementById("audio-holder");
//   newAudio.src = URL.createObjectURL(event.target.files[0]);
// };

function replaceAudio(event) {
  audioHolder.setAttribute("src", URL.createObjectURL(event.target.files[0]));
  alert("gfds");
}

const plotValue = document.getElementById("slide");
const placeValue = document.getElementById("plotHeightValue");
const slideRelica = document.querySelector(".setTheHeight");
const getHeight = document.querySelector(".height");
redifineHeight(slideRelica);

function redifineHeight(eliment) {
  var pos1, pos2;

  eliment.onmousedown = getvalues;

  function getvalues(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = e.clientY;
    document.onmousemove = chageRelicaHeight;
    document.onmouseup = stopAllTheOperations;
  }

  function chageRelicaHeight(e) {
    e = e || window.event;
    e.preventDefault();
    pos2 = -e.clientY;
    eliment.style.height = +600 + pos2 + "px";

    plotValue.value = +600 + pos2;
    defineValue();
  }
  function stopAllTheOperations() {
    document.onmousemove = NaN;
    document.onmouseup = NaN;
  }
}

function defineValue() {
  var Thevalue = plotValue.value;
  placeValue.innerHTML = Thevalue;
}

// function shoosNumber() {

// }

const decriment = document.getElementById("increment");
const incriment = document.getElementById("decriment");
const weightValue = document.getElementById("weightValue");

function attributValue(e) {
  let yes = e.getAttribute("class");
  if (yes == "increment" && Number(weightValue.value) < 30) {
    weightValue.value = Number(weightValue.value) + 1;
  } else if (yes == "decriment" && Number(weightValue.value) > 15) {
    weightValue.value = Number(weightValue.value) - 1;
  }
}

/* profiles side  */
const fullName = document.getElementById("fullname");
const image = document.getElementById("img");
const profileContainer = document.getElementById("Profiles-container");
const profilesList = document.getElementById("Profiles-list");
const submit = document.getElementById("submit");
const clearBtn = document.getElementById("clear-btn");
const alert = document.querySelector(".alert");
// event listeners

submit.addEventListener("click", addProfileList);
clearBtn.addEventListener("click", clearProfiles);

// added functioins
var idList = [];

function addProfileList() {

  var imgSrc = image.getAttribute("src");
  var article = document.createElement("article");
  var id = new Date().getTime().toString();
  
    //fullName.value && imgSrc
    idList.push("fist" + id);
    // alert(idList[idList.length - 1]);
    profilesList.classList.add("Profiles-list");
    article.innerHTML = ` <div class="Profile-bar" id="${
      idList[idList.length - 1]
    }" >
                <div class="Profile-pic"><img id="profile-img" src="${imgSrc}" alt=""></div>
                <div class="Profile-text">
                  <h1>${fullName.value}</h1>
                  <p>Hi guys this is my profile creator project 
feel free to open and enjoy using it .</p>
                  <button class="show-profile-btn" >Show profile</button>
                </div>
              </div> `;
    profilesList.appendChild(article);
    clearBtn.style.display = "block";
  
}

// clear profiles
function clearProfiles() {
  for (let i = 0; i < idList.length; i++) {
    document.getElementById(idList[i]).remove();
  }
  idList = [];
  profilesList.classList.remove("Profiles-list");
  displayAlert("profiles removed successfully", "success");
  clearBtn.style.display = "none";
}

// display the alert

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.classList.remove(`alert-${action}`);
    alert.innerHTML = "";
  }, 2000);
}
