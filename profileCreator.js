/* profiles side  */
const Title = document.getElementById("Title");
const Quantity = document.getElementById("Quantity");
const image = document.getElementById("img");
const profileContainer = document.getElementById("Profiles-container");
const profilesList = document.getElementById("Profiles-list");
const Submit = document.getElementById("submit");
const clearBtn = document.getElementById("clear-btn");
const alert = document.getElementById("alert");
const Statut = document.getElementById("Statut");
const Category = document.getElementById("Category");
const Price = document.getElementById("Price");
const addInputBtn = document.querySelectorAll(".add-input-btn");
// event listeners

Submit.addEventListener("click", addProfileList);
clearBtn.addEventListener("click", clearProfiles);
addInputBtn.forEach(element => element.addEventListener("click", changeColor));












// added functioins
var listofid = [];
function addProfileList() {
  var imgSrc = image.getAttribute("src");
  var article = document.createElement("article");
  var id = new Date().getTime().toString();

  //Title.value && imgSrc
  listofid.push("fist" + id);
  profilesList.classList.add("Profiles-list");
  // article.setAttribute();
  var generalID = listofid[listofid.length - 1];
  article.innerHTML = ` <div class="Profile-bar" } ><input type="checkbox" name="myCheckbox" id="myCheckbox">
            <label for="myCheckbox"></label>
                <div class="Profile-pic"><img id="profile-img" src="${imgSrc}" alt=""></div>
                <div class="Profile-text">
                  <p>${Title.value}</p><p>${Quantity.value}</p><p>${Category.value}</p><p>${Statut.value}</p><p>${Price.value}</p>
  
                </div>
                <button id="delet" class=${generalID}  ><i class="fa-solid fa-trash-can"></i></button>
            <i class="fa-solid fa-pen-to-square"  id="edit"  ></i>
              </div> `;
  profilesList.appendChild(article);
  article.setAttribute("id", generalID);
  clearBtn.style.display = "block";
  const clearItem = article.querySelector("#delet");
  clearItem.addEventListener("click", clearTheItem);
  // displayAlert(listofid, "danger");
}



// clear the chosen profile
function clearTheItem(e) {
  // displayAlert("parentId", "danger");
  // const parentId = clearItem.getAttribute("class");
  const parentId = e.currentTarget.parentElement.parentElement;
  const specificeID = e.currentTarget.parentElement.parentElement.getAttribute("id");
  // const myArticle = document.getElementById("myArticle");
  var indexID = listofid.indexOf(specificeID);
  listofid.splice(specificeID, 1);
  parentId.remove();
  // displayAlert(listofid, "danger");
  
  
  // myArticle.remove();
  
}




// clear profiles
function clearProfiles() {
  if (profilesList.getAttribute("class") == "Profiles-list") {
    profilesList.innerHTML = "";
    profilesList.classList.remove("Profiles-list");
    displayAlert("profiles removed successfully", "success");
  } else {
    displayAlert("No profiles created yet !", "danger");
  }
  listofid = [];
}




// display the alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.classList.remove(`alert-${action}`);
    alert.innerHTML = "";
  }, 1700);
}

function insertImg(event) {
  var myIMG = document.getElementById("img");
  myIMG.src = URL.createObjectURL(event.target.files[0]);
}






function changeColor() {
  if (this.style.backgroundColor == "blue") {
    this.style.backgroundColor = "white";
    this.style.color = "black";
    removeThisInput(this);
  } else {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    addThisInput(this);
  }
  // displayAlert("boxAttribut", "success");
}



function addThisInput(e) {
  var myId = document.getElementById(e.dataset.id);
  myId.style.display = "block";
  displayAlert(e.dataset.id, "success");
};

function removeThisInput(e) {
  var myId = document.getElementById(e.dataset.id);
  myId.style.display = "none";
  displayAlert(e.dataset.id, "success");
};

// const barMonths = document.getElementById("months");
// const barDays = document.getElementById("days");
// const barYears = document.getElementById("years");
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function monthInsert() {
//   // alert("sldfh");

//   for (let i = 0; i < months.length; i++) {
//     const option = document.createElement("option");
//     option.setAttribute("value", months[i]);
//     option.textContent = months[i];
//     barMonths.appendChild(option);
//   }

//   //     let currMonth = barMonths.value;
//   //     function daySelect(currMonth) {
//   //         let dayNum;
//   //           if (currMonth === "December" || currMonth == "November" || currMonth == "October" ||
//   //            currMonth == "September") {
//   //             alert("dlkfjhv");
//   //           }
//   //         }
//   //         daySelect(currMonth);
//   //   alert(barMonths.value)

//   barMonths.addEventListener("input", extractMonth);
//   let dayNum = function () {
//     if (barMonths.value == "January") {
//       dayNum = 28;
//     }
//   };
//   dayNum();
//   function extractMonth(ev) {
//     let select = ev.target;
//     let month = select.value;
//     let currMonth = month;
//     function daySelect(currMonth) {
//       if (
//         currMonth == "December" ||
//         currMonth == "November" ||
//         currMonth == "October" ||
//         currMonth == "September"
//       ) {
//         dayNum = 30;
//       } else if (
//         currMonth == "August" ||
//         currMonth == "July" ||
//         currMonth == "June" ||
//         currMonth == "May" ||
//         currMonth == "February" ||
//         currMonth == "March" ||
//         currMonth == "April"
//       ) {
//         dayNum = 31;
//       } else if (currMonth == "January") {
//         dayNum = 28;
//       }
//       dayInsert(dayNum);
//     }
//     daySelect(currMonth);
//   }

//   dayInsert(dayNum);

//   function dayInsert(num) {
//     for (let i = 1; i <= num; i++) {
//       const option2 = document.createElement("option");
//       option2.textContent = i;
//       barDays.appendChild(option2);
//     }
//   }

//   function yearInsert() {
//     for (let i = 0; i <= 100; i++) {
//       let year = new Date().getFullYear();
//       const option3 = document.createElement("option");
//       option3.textContent = year - i;
//       barYears.appendChild(option3);
//     }
//   }
//   yearInsert();
// }

// monthInsert();
