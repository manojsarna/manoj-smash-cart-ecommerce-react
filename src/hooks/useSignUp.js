export const useSignUp = async () => {
  try {
    const res = await axios.post("/api/auth/signup", {
      firstName: "Manoj",
      lastName: "Sarna",
      email: "manojsarna@gmail.com",
      password: "Qwerty123",
    });
    localStorage.setItem("encodedToken", res.data.encodedToken);
  } catch (error) {
    console.log(error);
  }
};
