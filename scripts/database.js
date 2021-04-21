//  Data provider for Daily Journal application
//  Holds the raw data about each entry and exports
//  functions that other modules can use to filter
//  the entries for different purposes.


export const database = {
  entries: [
      {
          id: 1,
          journalDate: "07/24/2025",
          concept: "HTML & CSS",
          journalEntry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
          mood: "Ok"
      },
      {
          id: 2,
          journalDate: "04/19/21",
          concept: "JavaScript",
          journalEntry: "This ES6 is very different from ES5",
          mood: "fun"
      },
      {
          id: 3,
          journalDate: "04/20/2021",
          concept: "Modern Farm / JavaScript Testing",
          journalEntry: "Though I had the tests completed, but obviously I don't.",
          mood: "meh"

      }
  ]
}


// You export a function that provides a version of the
// raw data in the format that you want

export const getJournalEntries = () => {
  const copyOfData = [...database.entries]
  console.log(copyOfData)
  return copyOfData
  
}

