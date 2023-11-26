const BASE_URL = "https://bq7xt4nx-8080.inc1.devtunnels.ms/api/v1";

export const StudentEndpoints = {
  LOGIN_API: BASE_URL + "/student/login",
  GET_PROFILE_API: BASE_URL + "/student/profile",
  CHANGE_PASSWORD_API: BASE_URL + "/student/update-password",
  GET_NOC: BASE_URL + "/student/get-student-nocs",
};

export const NocEndpoints = {
  CREATE_NOC_API: BASE_URL + "/noc/create-noc",
};
