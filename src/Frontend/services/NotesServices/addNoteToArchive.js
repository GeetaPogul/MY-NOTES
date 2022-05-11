import axios from "axios";

const addNoteToArchiveService = async (is, note, authToken) => {
  try {
    const { data } = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(e);
  }
};

export { addNoteToArchiveService };
