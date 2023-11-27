import { StudentEndpoints } from "./api";
import apiConnector from "./apiConnector";

export async function LoginStudent(registerationNumber, password) {
  return await apiConnector(StudentEndpoints.LOGIN_API, "POST", {
    registerationNumber,
    password,
  })
    .then((res) => {
      sessionStorage.setItem("_token", res.token);
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export function isAuthenticated() {
  if (sessionStorage.getItem("_token")) {
    return true;
  } else {
    return false;
  }
}
