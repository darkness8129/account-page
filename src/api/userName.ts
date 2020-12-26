const userNameApi = {
  async validateUserName(name: string) {
    try {
      const apiResponse = await fetch(
        `https://api.ryddm.com/v1/auth/username-available/${name}`
      );

      // response successful - continue, else - throw err
      if (!apiResponse.ok) {
        const error = new Error(
          `Error ${apiResponse.status}: ${apiResponse.statusText}`
        );
        console.error(error);
        throw error;
      }

      const data = await apiResponse.json();

      // if name not valid or unavailable
      if (!data.usernameAvailable) {
        const error = new Error(`Error! Username is not available!`);
        console.log(error.message);
        throw error;
      }
      if (!data.usernameValid) {
        const error = new Error(`Error! Username is not valid!`);
        console.log(error.message);
        throw error;
      }
    } catch (error) {
      return error.message;
    }
    return null;
  },
};

export default userNameApi;
