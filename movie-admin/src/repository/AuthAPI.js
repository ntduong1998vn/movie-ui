import { ACCESS_TOKEN } from "../constants/auth";
import axios, { setAuthToken } from "./../helpers/axios.instance";

export async function loginWithEmailPasswordAsync(email, password) {
  return await axios
    .post("/api/auth/login", {
      usernameOrEmail: email,
      password: password,
    })
    .then((res) => {
      const token = res.data.accessToken;
      setAuthToken(token);
      return res.data;
    })
    .catch((error) => error.response.data);
}

// export function getCurrentUser() {
//   if (!localStorage.getItem(ACCESS_TOKEN)) {
//     return Promise.reject("No access token set.");
//   }

//   axios
//     .get(API_BASE_URL + "/user/me", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
//       },
//     })
//     .then((res) => res.data)
//     .catch((error) => error.response.data);
// }

// export function forgetPassword() {
//   return request({
//     url: API_BASE_URL + "/forgetpassword",
//     method: "GET",
//   });
// }

// export function sendMail() {
//   return request({
//     url: API_BASE_URL + "/sendmail",
//     method: "GET",
//   });
// }

// export async function signup(signupRequest) {
//   const response = await fetch(`${API_BASE_URL}/auth/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(signupRequest),
//   });

//   const json = response.json();
//   if (!response.ok) return Promise.reject(json);
//   return json;
// }

// export async function updateUser(userObject) {
//   const headers = new Headers();
//   if (localStorage.getItem(ACCESS_TOKEN)) {
//     const auth = localStorage.getItem(ACCESS_TOKEN);
//     const response = await fetch(`${API_BASE_URL}/user/`, {
//       method: "PATCH",
//       headers: {
//         Authorization: `Bearer ${auth}`,
//       },
//       body: userObject,
//     });

//     const json = await response.json();

//     if (response.status !== 202) {
//       return Promise.reject(json);
//     }

//     return json;
//   } else {
//     return Promise.reject(new Error("Bạn chưa đăng nhập!"));
//   }
// }
