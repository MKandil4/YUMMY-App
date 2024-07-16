export class Area {
  constructor() {
    this.getArea();
  }

  async getArea() {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const response = await api.json();
    console.log(response);
  }
}
/********************** Area ******************************/
var allAreas = [];
var req = new XMLHttpRequest();
req.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
req.send();
req.addEventListener("loadend", function () {
  if (req.status >= 200 && req.status < 300) {
    allAreas = JSON.parse(req.response).meals;
    displayAreas();
  }
});
function displayAreas() {
  var cartoona = "";
  for (let i = 0; i < allAreas.length; i++) {
    cartoona += `<div class="col-md-3">
            <div
              role="button"
              onclick="getAreaMeals('American')"
              class="rounded-2 text-center cursor-pointer"
            >
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${allAreas[i].strArea}</h3>
            </div>
          </div>`;
  }
  document.querySelector(".allAreas").innerHTML = cartoona;
}