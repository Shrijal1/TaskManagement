export const generateAuthTokens = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";
  const tokenLength = 100;
  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
};

export const sessionTimeOut = (navigate) => {
  const currentTime = new Date().getTime();
  const loggedInTime = JSON.parse(localStorage.getItem("loggedIn"));

  if (loggedInTime) {
    const timeDifference = currentTime - loggedInTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference > 8) {
      // session timeout at 8 hrs
      localStorage.removeItem("loggedIn");
      localStorage.setItem("token");
      navigate("/login");
    }
  }
};
