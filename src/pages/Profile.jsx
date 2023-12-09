import React, { useEffect } from "react";
import { GetStudentProfile } from "../actions/studentActions";
import DangerAlert from "../components/common/DangerAlert";
import Loading from "../components/common/Loading";

const Profile = () => {
  const [student, setStudent] = React.useState();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetStudentProfile()
      .then((data) => setStudent(data))
      .catch((err) => setError(err.response.message || err.response))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen p-4">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center text-center">
          <Loading />
        </div>
      ) : (
        <div>
          <DangerAlert message={error} />

          {student && (
            <div className="md:container mx-auto mt-8 p-8 bg-white rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Student Information
              </h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Father's Name
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Date of Birth
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                {/* Repeat the above pattern for other form fields */}

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Registration Number
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Roll Number
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Branch
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-4 mb-4 ">
                  <label className="block text-sm font-medium text-gray-600">
                    Admission Year
                  </label>
                  <div className="mt-1 p-2 w-full border rounded-md bg-gray-100">
                    {}
                  </div>
                </div>

                <div className="w-full text-center">
                  <label className="block text-sm font-medium text-gray-600">
                    Last Login : <i>{}</i>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
