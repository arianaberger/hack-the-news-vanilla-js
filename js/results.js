// Check that document is loaded and JS is working
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event);
  else
    document.addEventListener("DOMContentLoaded", callbackFunction);
}
ready(event => {
  console.log('JS is ready to go!');
  getSearchResults('hello')
})

function getSearchResults(search) {
  fetch(`http://hn.algolia.com/api/v1/search?query=${search}`)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(json) {
      console.log(json.hits);
    })
}
