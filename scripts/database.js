//  Data provider for Daily Journal application
//  Holds the raw data about each entry and exports
//  functions that other modules can use to filter
//  the entries for different purposes.


const database = {
  entries: [
      
  ]
}


// You export a function that provides a version of the
// raw data in the format that you want

export const useEntries = () => {
  
  const copyOfData = [...database.entries]
  
  return copyOfData
  
}

export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json()) //parse as JSON
    .then(data => {
      //what should happen when we finally have the array?
      
      database.entries = data
      
    }
    )

}

