import { getJournalEntries } from "./database.js"


export const Entries = () => {
  const entries = getJournalEntries() 
  let allEntriesAsHTML = ""
  console.log(entries)
  for (const entry of entries) {

    allEntriesAsHTML += `
    <h3>${entry.concept}</h3>
    <div>${entry.journalEntry}</div>
    <div>${entry.journalDate}</div>
    `
    
  }
  
  return allEntriesAsHTML
}