function resultsArray(data) {
  return data.hits.map(x => new resultsObject(x))
}

class resultsObject {
  constructor(obj) {
    this.author = obj.author
    this.title = obj.title || obj.story_title
    this.url = obj.url || obj.story_url
    this.date = createDate(obj.created_at)

    debugger
  }
}

function getMonth(date) {
  let num = date.getMonth()
  return months[num]
}

function createDate(obj) {
  let dateObj = new Date(obj)
  let month = getMonth(dateObj)
  let year = dateObj.getFullYear()
  let day = dateObj.getDate()

  return `${month} ${day}, ${year}`
}

const months = [
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
