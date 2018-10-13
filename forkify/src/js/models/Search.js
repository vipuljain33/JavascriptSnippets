import axios from 'axios';

export default class Search{
  constructor(query)
  {
    this.query = query;
  }

  async getResults()
  {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '9f42e3245897d4d603ba338a55adc80d';

    try{
      const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = result.data.recipes
      //console.log(this.result);
    }catch(error){
      alert(error)
    }
  }
}
