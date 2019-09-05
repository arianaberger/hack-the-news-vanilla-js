// Check that document is loaded and JS is working
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event);
  else
    document.addEventListener("DOMContentLoaded", callbackFunction);
}
ready(event => {
  console.log('JS is ready to go!');
  searchOnClick()
})

function searchOnClick() {
  const searchButton = getSearchButton();
  searchButton.addEventListener("click", getSearchResults);
}

// Use fetch request to make call to API
function getSearchResults() {
  const searchValue = getSearchTerm().value;
  fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(json) {
    console.log(json.hits);
    resetForm();
  })
}

function resetForm() {
  const searchForm = getSearchTerm();
  searchForm.value = "";
}

// Grab elements from DOM
function getSearchButton() {
  return document.getElementById("searchButton");
}

function getSearchTerm() {
  return document.getElementById("searchValue")
}
