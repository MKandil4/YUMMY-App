export class Ui {
  constructor() {}
}

var allDetails = [];
var req = new XMLHttpRequest();
req.open("GET", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`);
req.send();
req.addEventListener("loadend", function () {
  if (req.status >= 200 && req.status < 300) {
    allDetails = JSON.parse(req.response).meals;
    displayDetails();
  }
});

function displayDetails() {
  var cartoona = "";
  for (var i = 0; i < allDetails.length; i++) {
    cartoona += `<div class="col-md-4">
              <img
                class="w-100 rounded-3"
                src="${allDetails[i].strMealThumb}"
                alt=""
              />
              <h2>${allDetails[i].strMeal}</h2>
            </div>

            <div class="col-md-8">
              <h2>Instructions</h2>
              <p>${allDetails[i].strInstructions}</p>
              <h3><span class="fw-bolder">Area : </span>${allDetails[i].strArea}</h3>
              <h3><span class="fw-bolder">Category : </span>${allDetails[i].strCategory}</h3>
              <h3>Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">1 cup Lentils</li>
                <li class="alert alert-info m-2 p-1">1 large Onion</li>
                <li class="alert alert-info m-2 p-1">1 large Carrots</li>
                <li class="alert alert-info m-2 p-1">1 tbs Tomato Puree</li>
                <li class="alert alert-info m-2 p-1">2 tsp Cumin</li>
                <li class="alert alert-info m-2 p-1">1 tsp Paprika</li>
                <li class="alert alert-info m-2 p-1">1/2 tsp Mint</li>
                <li class="alert alert-info m-2 p-1">1/2 tsp Thyme</li>
                <li class="alert alert-info m-2 p-1">1/4 tsp Black Pepper</li>
                <li class="alert alert-info m-2 p-1">
                  1/4 tsp Red Pepper Flakes
                </li>
                <li class="alert alert-info m-2 p-1">4 cups Vegetable Stock</li>
                <li class="alert alert-info m-2 p-1">1 cup Water</li>
                <li class="alert alert-info m-2 p-1">Pinch Sea Salt</li>
              </ul>

              <h3>Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1">Soup</li>
              </ul>

              <a
                target="_blank"
                href="${allDetails[i].strSource}"
                class="btn btn-success"
                >Source</a
              >
              <a
                target="_blank"
                href="${allDetails[i].strYoutube}"
                class="btn btn-danger"
                >Youtube</a
              >
            </div>`;
  }
  document.querySelector(".allDetails").innerHTML = cartoona;
}

/*******************  Search Inputs *******************************/

/*** Search By Name ***/
var allSearch = [];
var myInput = document.querySelector("#search");

myInput.addEventListener("input", function () {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${myInput.value}`
  );
  req.send();
  req.addEventListener("loadend", function () {
    if (req.status >= 200 && req.status < 300) {
      allSearch = JSON.parse(req.response).meals;
      displaySearch();
    }
  });
});
function displaySearch() {
  var cartoona = "";
  for (var i = 0; i < allSearch.length; i++) {
    cartoona += `
    
          <div class="col-md-3">
           <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <figure class="position-relative overflow-hidden rounded-2"role="button" >
             <img src="${allSearch[i].strMealThumb}" class="w-100" alt="meals description"/>
              <figcaption class="layer position-absolute text-black p-2">
               <h3>${allSearch[i].strMeal}</h3>
              </figcaption>
            </figure>
          </div>
        </div>`;
  }
  document.querySelector("#searchContainer").innerHTML = cartoona;
}

/*** Search By Letter ***/

var SearchLetter = [];
var myInputLetter = document.querySelector("#searchInputFLetter");

myInputLetter.addEventListener("input", function () {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${myInputLetter.value}`
  );
  req.send();
  req.addEventListener("loadend", function () {
    if (req.status >= 200 && req.status < 300) {
      SearchLetter = JSON.parse(req.response).meals;
      displaySearchLetter();
    }
  });
});
function displaySearchLetter() {
  var cartoona = "";
  for (var i = 0; i < SearchLetter.length; i++) {
    cartoona += `
    
          <div class="col-md-3">
           <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <figure class="position-relative overflow-hidden rounded-2"role="button" >
             <img src="${SearchLetter[i].strMealThumb}" class="w-100" alt="meals description"/>
              <figcaption class="layer position-absolute d-flex align-items-center text-black p-2">
               <h3>${SearchLetter[i].strMeal}</h3>
              </figcaption>
            </figure>
          </div>
        </div>`;
  }
  document.querySelector("#searchContainer").innerHTML = cartoona;
}

/************************ Categories **********************************/
var allCategories = [];
var req = new XMLHttpRequest();
req.open("GET", `https://www.themealdb.com/api/json/v1/1/categories.php`);
req.send();
req.addEventListener("loadend", function () {
  if (req.status >= 200 && req.status < 300) {
    allCategories = JSON.parse(req.response).categories;
    displayCategories();
  }
});

function displayCategories() {
  var cartoona = "";

  for (let i = 0; i < allCategories.length; i++) {
    cartoona += `<div class="col-md-3">
            <div class="category">

               <figure class="position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img src="${
                    allCategories[i].strCategoryThumb
                  }" class="w-100" alt="category"/>
  
                  <figcaption class="layer position-absolute d-flex flex-wrap align-items-center justify-content-center text-black p-2">
                    <h3>${allCategories[i].strCategory}</h3>
                    <p>${allCategories[i].strCategoryDescription.slice(
                      0,
                      135
                    )}</p>
                  </figcaption>
                </figure>
                
            </div>
          </div> `;
    document.querySelector(".allCategories").innerHTML = cartoona;
  }
}
