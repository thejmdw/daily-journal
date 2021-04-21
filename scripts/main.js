import { DailyJournal } from "./DailyJournal.js"

//set variable equal to the html element
const container = document.getElementById("entries")

const render = () => {
  container.innerHTML = DailyJournal()
}

render()