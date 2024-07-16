export class Search {
  constructor() {
    this.getSearchName();
   
  }

  async getSearchName() {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const response = await api.json();
    console.log(response);
  }
}
