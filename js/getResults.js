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

// Add event listener to submit button
function searchOnClick() {
  const searchButton = getSearchButton();
  searchButton.addEventListener("click", getSearchResults);
}

// Use fetch request to make call to API
function getSearchResults() {
  if (getSearchTerm().value != '') {
    const searchValue = getSearchTerm().value;
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(json) {
      console.log(json.hits);
      let results = new resultsArray(json);
      console.log(results)
      resetForm();
    })
  } else {
    console.log("you empty!")
  }
}


// Reset form after submission
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
