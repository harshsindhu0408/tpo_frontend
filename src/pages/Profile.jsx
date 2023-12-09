import React, { useEffect } from "react";
import { GetStudentProfile } from "../actions/studentActions";
import DangerAlert from "../components/common/DangerAlert";

const Profile = () => {
  const [student, setStudent] = React.useState();
  const [error, setError] = React.useState("");
  useEffect(() => {
    GetStudentProfile()
      .then((data) => setStudent(data))
      .catch((err) => setError(err.response.message || err.response));
  }, []);
  console.log("student data: ", student);
  return (
    <div>
      <DangerAlert message={error} />
    </div>
  );
};

export default Profile;
