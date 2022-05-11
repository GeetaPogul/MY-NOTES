import axios from "axios";

const deleteFromArchiveService = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${id}`, {
      hearder: {
        authorization: authToken,
      },
    });
    return data.archives;
  } catch (err) {
    console.error(err);
  }
};

export { deleteFromArchiveService };
