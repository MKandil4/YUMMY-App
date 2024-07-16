export class Ingredients {
  constructor() {
    this.getIngredients();
  }

  async getIngredients() {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const response = await api.json();
    console.log(response);
  }
}

var allIngredients = [];
var req = new XMLHttpRequest();
req.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
req.send();
req.addEventListener("loadend", function () {
  if (req.status >= 200 && req.status < 300) {
    allIngredients = JSON.parse(req.response).meals;
    displayIngredients();
  }
});

function displayIngredients() {
  var cartoona = "";
  for (let i = 0; i < 20; i++) {
    cartoona += `<div class="col-md-3">
            <div
              onclick="getIngredientsMeals('Chicken')"
              class="rounded-2 text-center cursor-pointer"
            >
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${allIngredients[i].strIngredient}</h3>
              <p>${allIngredients[i].strDescription.slice(0,108)}</p>
            </div>
          </div>`;
  }
  document.querySelector(".allIngredients").innerHTML = cartoona;
}
