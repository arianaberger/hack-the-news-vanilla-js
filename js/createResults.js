function resultsArray(data) {
  return data.hits.map(x => new resultsObject(x))
}

class resultsObject {
  constructor(obj) {
    this.author = obj.author
    this.title = obj.title || obj.story_title
    this.url = obj.url || obj.story_url
    this.date = createDate(obj)

    debugger
  }
}

function getMonth(date) {
  let num = date.getMonth()
  return month[num]
}

function createDate(obj) {
  let dateObj = new Date(obj.created_at)
  let month = getMonth(dateObj)
  let year = dateObj.getFullYear()
  let day = dateObj.getDate()

  return `${month} ${day}, ${year}`
}

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]
