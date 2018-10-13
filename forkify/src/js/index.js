import Search from './models/Search'
import * as searchView from './views/searchView'
import {elements} from './views/base'

/** Global State
* - Search Object
* - Current Recipe Object
* - Shopping list Object
* - Liked Recipe
*/
const state = {}

const controlSearch = async () => {
  // 1. Get the query from the view
  const query = searchView.getInput();
  console.log(query);

  if(query)
  {
    //2. New search object and add it to state
    state.search = new Search(query)

    //3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();


    //4. Search for recipes
    await state.search.getResults()

    //5. render results on UI
    //console.log(state.search.result);
    searchView.renderResults(state.search.result)
  }

}

//controlSearch()
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

//const search = new Search('coffee')
//console.log(search);
//search.getResults()
//9f42e3245897d4d603ba338a55adc80d

//https://www.food2fork.com/api/search

//getResults('coffee');
