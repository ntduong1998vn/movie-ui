import axios, { setAuthToken } from "./../helpers/axios.instance";
import { ACCESS_TOKEN } from "../constants/auth";

export async function loginWithEmailPasswordAsync(username, password) {
  return await axios
    .post("/api/auth/login", {
      usernameOrEmail: username,
      password: password,
    })
    .then((res) => {
      const token = res.data.accessToken;
      setAuthToken(token);
      return res.data;
    })
    .catch((error) => error.response.data);
}

export async function getCurrentUser() {
  return await axios
    .get("/api/user/me")
    .then((res) => res.data)
    .catch((error) => error.response.data);
}

export function logOut() {
  localStorage.removeItem(ACCESS_TOKEN);
}
// export function forgetPassword() {
//   return request({
//     url: API_BASE_URL + "/forgetpassword",
//     method: "GET",
//   });
// }

export async function register(registerForm) {
  return await axios
    .post(`/api/auth/register`, registerForm)
    .then((res) => true)
    .catch((error) => {
      console.log(error.response);
      return false;
    });
}

export default {
  getCurrentUser,
  register,
  loginWithEmailPasswordAsync,
};
