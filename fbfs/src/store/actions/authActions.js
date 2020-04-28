export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        console.log("Login Success!");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        console.log("Login Failed!");
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
