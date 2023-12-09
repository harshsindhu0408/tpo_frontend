import { StudentEndpoints } from "./api";
import apiConnector from "./apiConnector";

export async function GetStudentProfile() {
  return await apiConnector(StudentEndpoints.GET_PROFILE_API)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}
