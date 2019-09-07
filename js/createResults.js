function resultsArray(data) {
  return data.hits.map(x => new resultsObject(x))
}

class resultsObject {
  constructor(obj) {
    this.author = obj.author
    this.title = obj.title || obj.story_title
    this.url = obj.url || obj.story_url

    let createDate = new Date(obj.created_at)
    let month = getMonth(createDate)
    let year = createDate.getFullYear()
    let day = createDate.getDate()

    this.date = `${month} ${day}, ${year}`

    debugger
  }
}

function getMonth(date) {
  let num = date.getMonth()
  return month[num]
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
