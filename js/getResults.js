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
      let resultsHTML = createResultsHTML(results);
      document.getElementById("results").innerHTML = resultsHTML;
      resetForm();
    })
  } else {
    console.log("you empty!");
  }
}

function createResultsHTML(results) {
  const resultsHTML = []
  results.forEach(r => {
     let html = (`
      <h3><a href="${r.url}" target="_blank">${r.title}</a></h3>
      <div> ${r.author} | ${r.date}</div>
    `)
    resultsHTML.push(html)
  })
  return resultsHTML.join('')
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
  return document.getElementById("searchValue");
}
