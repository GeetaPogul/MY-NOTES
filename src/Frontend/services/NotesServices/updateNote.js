import axios from "axios";

const updateNoteService = async (id, note, authToken) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );

    return data.notes;
  } catch (err) {
    console.log("err");
  }
};

export { updateNoteService };
