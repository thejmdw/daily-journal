import { useEntries } from "./database.js"
import { getEntries } from "./database.js"



export const Entries = () => {
  const newEntries = useEntries() 
  let allEntriesAsHTML = ""
  // console.log(newEntries)
  for (const entry of newEntries) {

    allEntriesAsHTML += `
    <h3>${entry.concept}</h3>
    <div>${entry.journalEntry}</div>
    <div>${entry.journalDate}</div>
    `
    
  }
  
  return allEntriesAsHTML
}