import { Home } from "./home.js";
import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    // this.loading = document.querySelector(".loading");
    this.getDetails(id);
  }

  async getDetails(id) {
    // this.loading.classList.remove("d-none");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const response = await api.json();
    // console.log(response);
  }
}
