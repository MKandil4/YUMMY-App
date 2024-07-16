import { Categories } from "./categories.js";
import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home {
  constructor() {
    $(".searchP").click(function () {
      $(".allSearch").removeClass("d-none");

      $(".allMeals").addClass("d-none");
      $(".allAreas").addClass("d-none");
      $(".allCategories").addClass("d-none");
      $(".allIngredients").addClass("d-none");
      $(".allContact").addClass("d-none");

      $(".side-nav-menu").animate({ left: "-270px" }, 500);
    });

    $(".categoryP").click(function () {
      $(".allCategories").removeClass("d-none");

      $(".allMeals").addClass("d-none");
      $(".allSearch").addClass("d-none");
      $(".allAreas").addClass("d-none");
      $(".allIngredients").addClass("d-none");
      $(".allContact").addClass("d-none");

      $(".side-nav-menu").animate({ left: "-270px" }, 500);
    });

    $(".areaP").click(function () {
      console.log("Areaaaaa");
      $(".allAreas").removeClass("d-none");

      $(".allMeals").addClass("d-none");
      $(".allSearch").addClass("d-none");
      $(".allCategories").addClass("d-none");
      $(".allIngredients").addClass("d-none");
      $(".allContact").addClass("d-none");

      $(".side-nav-menu").animate({ left: "-270px" }, 500);
    });

    $(".ingredientsP").click(function () {
      $(".allIngredients").removeClass("d-none");

      $(".allMeals").addClass("d-none");
      $(".allSearch").addClass("d-none");
      $(".allAreas").addClass("d-none");
      $(".allCategories").addClass("d-none");
      $(".allContact").addClass("d-none");

      $(".side-nav-menu").animate({ left: "-270px" }, 500);
    });

    $(".contactP").click(function () {
      $(".allContact").removeClass("d-none");

      $(".allMeals").addClass("d-none");
      $(".allSearch").addClass("d-none");
      $(".allAreas").addClass("d-none");
      $(".allCategories").addClass("d-none");
      $(".allIngredients").addClass("d-none");

      $(".side-nav-menu").animate({ left: "-270px" }, 500);
    });

    this.loading = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.meals = document.getElementById("meals");
    this.categories = document.getElementById("categories");
    this.ui = new Ui();
    this.search = document.getElementById("search");

    let allMeals = [];
    let req = new XMLHttpRequest();
    req.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    req.send();

    req.addEventListener("loadend", function () {
      if (req.status >= 200 && req.status < 300) {
        allMeals = JSON.parse(req.response).meals;
        displayMeals();
      }
    });

    function displayMeals() {
      let cartoona = "";

      for (let i = 0; i < allMeals.length; i++) {
        cartoona += `
        <div class="col-md-3">
           <div class="meal">
            <figure class="position-relative overflow-hidden rounded-2"role="button" >
             <img src="${allMeals[i].strMealThumb}" class="w-100" alt="meals"/>
              <figcaption class="layer position-absolute d-flex align-items-center text-black p-2">
               <h3>${allMeals[i].strMeal}</h3>
              </figcaption>
            </figure>
          </div>
        </div>`;
      }
      document.querySelector(".allMeals").innerHTML = cartoona;

      document.getElementById("meals").addEventListener("click", function () {
        addEventListener("click", function () {
          console.log("mealzzzz");
          this.meals.classList.add("d-none");
          this.details.classList.remove("d-none");
          new Details();
        });
      });
    }
  }
}
