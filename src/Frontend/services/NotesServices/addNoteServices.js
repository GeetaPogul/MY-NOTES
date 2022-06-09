import axios from "axios";

const addNoteService = async (authToken, note) => {
  console.log(note);
  try {
    const { data } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.notes;
  } catch (err) {
    console.error(err);
  }
};

export { addNoteService };
