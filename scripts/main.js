import { DailyJournal } from "./DailyJournal.js"
import { JournalForm } from "./JournalForm.js"
import { getEntries } from "./database.js"

//set variable equal to the html element by id
const container = document.getElementById("entries")
const formContainer = document.getElementById("form")

const render = () => {
  getEntries()
  .then(() => {
      container.innerHTML = DailyJournal()
      formContainer.innerHTML = JournalForm()
    }
  )
}

render()