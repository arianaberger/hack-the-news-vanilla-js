// Check that document is loaded and JS is working
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event);
  else
    document.addEventListener("DOMContentLoaded", callbackFunction);
}
ready(event => {
  console.log('JS is ready to go!');
  getSearchResults()
})

// Use fetch request to make call to API
function getSearchResults() {
  const searchValue = getSearchValue();
  fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(json) {
      console.log(json.hits);
    })
}

// Grab search value from DOM
function getSearchValue() {
  return document.getElementById("searchValue").innerHTML
}
