import { DailyJournal } from "./DailyJournal.js"
import { JournalForm } from "./JournalForm.js"

//set variable equal to the html element by id
const container = document.getElementById("entries")
const formContainer = document.getElementById("form")

const render = () => {
  container.innerHTML = DailyJournal()
  formContainer.innerHTML = JournalForm()
}

render()