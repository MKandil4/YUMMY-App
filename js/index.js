import { Home } from "./home.js";
import { Details } from "./details.js";
import { Categories } from "./categories.js";
import { Search } from "./search.js";
import { Area } from "./area.js";
import { Ingredients } from "./ingredients.js";
import { ContactUs } from "./contactUs.js";
import { Ui } from "./ui.js";

const home = new Home();
const details = new Details();
const categories = new Categories();
const search = new Search();
const area = new Area();
const ingredients = new Ingredients();
const contactUs = new ContactUs();
const ui = new Ui();

$(".open").click(function () {
  $(".side-nav-menu").animate({ left: "0px" }, 600);

  $(".searchP").slideUp(300);
  $(".searchP").hide(300);
  $(".searchP").show(300);

  $(".categoryP").slideUp(400);
  $(".categoryP").hide(400);
  $(".categoryP").show(400);

  $(".areaP").slideUp(500);
  $(".areaP").hide(500);
  $(".areaP").show(500);

  $(".ingredientsP").slideUp(600);
  $(".ingredientsP").hide(600);
  $(".ingredientsP").show(600);

  $(".contactP").slideUp(700);
  $(".contactP").hide(700);
  $(".contactP").show(700);
});

$(".close").click(function () {
  $(".side-nav-menu").animate({ left: "-270px" }, 600);
});
