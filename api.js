const BASE_URL = "http://localhost:8080/api/n1";

export const studentEndpoints = {
    LOGIN_API: BASE_URL + "/student/login",
    GET_PROFILE_API: BASE_URL + "/student/profile",
    CHANGE_PASSWORD_API: BASE_URL + "/student/update-password",
    GET_NOC: BASE_URL + "/student/get-student-nocs",
}

export const nocEndpoints = {
    CREATE_NOC_API: BASE_URL + "/noc/create-noc",
}