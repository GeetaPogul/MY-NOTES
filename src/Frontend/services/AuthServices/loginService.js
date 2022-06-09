import axios from "axios";
const loginHandler = async ({ email, password }) => {
  console.log("email", email, password);
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export { loginHandler };
