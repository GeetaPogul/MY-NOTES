import axios from "axios";

const signupService = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export { signupService };
