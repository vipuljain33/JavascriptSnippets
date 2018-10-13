import Search from './models/Search'

/** Global State
* - Search Object
* - Current Recipe Object
* - Shopping list Object
* - Liked Recipe
*/
const state = {}

const controlSearch = async () => {
  // 1. Get the query from the view
  const query = 'pizza' //todo

  if(query)
  {
    //2. New search object and add it to state
    state.search = new Search(query)

    //3. Prepare UI for results


    //4. Search for recipes
    await state.search.getResults()

    //5. render results on UI
    console.log(state.search.result);
  }

}

//controlSearch()
document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

//const search = new Search('coffee')
//console.log(search);
//search.getResults()
//9f42e3245897d4d603ba338a55adc80d

//https://www.food2fork.com/api/search

//getResults('coffee');
