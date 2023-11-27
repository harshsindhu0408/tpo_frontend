import axios from "axios";

const apiConnector = async (url, method = "get", data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle successful response
    return response.data;
  } catch (error) {
    // Handle errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("General error:", error.message);
    }

    // Create a custom error object to propagate the error information
    const customError = new Error("API call failed");
    customError.response = error.response ? error.response.data : "Internal server error!";
    throw customError; // Throw the custom error to indicate API call failure
  }
};

export default apiConnector;
