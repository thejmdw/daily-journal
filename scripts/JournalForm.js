

export const JournalForm = () => {
  const formHTML = `
    <form action="">
      <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
      </fieldset>
      <fieldset>
        <label for="concepts">Concepts Covered</label>
        <input type="text" name="concepts" id="concepts">
      </fieldset>
      <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea type="text" name="journalEntry" id="journalEntry" rows="5" cols="30"></textarea>
      </fieldset>
      <fieldset>
        <label for="mood">Mood for the Day</label>
        <select name="mood" id="mood">
          <option value="fun">Fun</option>
          <option value="happy">Happy</option>
          <option value="ok">Ok</option>
          <option value="fine">Fine</option>
          <option value="meh">Meh</option>
          <option value="sad">Sad</option>
          <option value="harrowing">Harrowing</option>
        </select>
      </fieldset>
      <input type="submit" value="Submit Journal Entry">
    </form>
  `
  return formHTML
}