export class Categories {
  constructor() {
    this.getCategories();
  }

  async getCategories() {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const response = await api.json();
    console.log(response);
  }
}


