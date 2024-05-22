import React, { useEffect, useState } from "react";
import TagInput from "../components/TagInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfileForm() {
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    gender: "",
    picture: "",
    education: "",
    experience: "",
    skills: [],
    personWebsite: "",
    dateOfBirth: "",
    about: "",
    nationality: "",
    userId: "",
  });
  const [profileExists, setProfileExists] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const userId = JSON.parse(token).data.id;
        setFormData((prev) => ({
          ...prev,
          userId: userId,
        }));

        // Fetch user profile data
        fetch(`http://localhost:3000/api/user/userProfile/${userId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Specific Data=>", data.data[0].userProfile);
            if (data) {
              const userProfile = data.data[0].userProfile[0];
              console.log("Done hai", token);
              // Assuming the profile data is the first item
              setFormData({
                phoneNumber: userProfile.phoneNumber || "",
                gender: userProfile.gender || "",
                picture: userProfile.picture || "",
                education: userProfile.education || "",
                experience: userProfile.experience || "",
                skills: userProfile.skills || [],
                personWebsite: userProfile.personWebsite || "",
                dateOfBirth: userProfile.dateOfBirth || "",
                about: userProfile.about || "",
                nationality: userProfile.nationality || "",
                userId: userId,
              });
              setProfileExists(true);
            }
          })
          .catch((error) =>
            console.error("Failed to fetch user profile", error)
          );
      } catch (error) {
        console.error("Failed to parse token", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData((prevState) => ({
        ...prevState,
        picture: base64String,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Validate form fields
    if (!formData.about) {
      toast.error("About is required ")
      // newErrors.role = "Role is required";
      formIsValid = false;
    }
    if (!formData.dateOfBirth) {
      console.log("ERROR HAI ");
      toast.error("DOB is required ")
      // newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!formData.education) {
      toast.error("Education is required ")
      // newErrors.email = "Email is required";
      formIsValid = false;
    }
    if (!formData.experience) {
      toast.error("Experience is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.gender) {
      toast.error("Gender is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.nationality) {
      toast.error("Nationality is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.personWebsite) {
      toast.error("Website is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.phoneNumber) {
      toast.error("PhoneNumber is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.picture) {
      toast.error("Picture is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    if (!formData.skills) {
      toast.error("Skill is required ")
      newErrors.password = "Password is required";
      formIsValid = false;
    }
    // If form is not valid, set errors and return
    if (!formIsValid) {
      setErrors("ERROR ARE OCCURS");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/user/profile", {
        method: profileExists ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("User profile saved:", result);
      setProfileExists(true);
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token.data.name);

  return (
    <>
    <ToastContainer />
    <section className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <h1 className="text-xl font-bold text-black capitalize dark:text-black">
        Profile settings
      </h1>
      {profileExists ? (
        <>
          <section className="pt-16 bg-blueGray-50">
            <div className="w-full lg:w-full px-4 mx-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                      <div className="relative">
                        <img
                          src={formData.picture}
                          alt="Profile"
                          className="w-32 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 text-center mt-10">
                      <div className="flex justify-center flex-col md:flex-row py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {formData.experience}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Experience
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {formData.education}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Education
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {formData.phoneNumber}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Phone Number
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold leading-normal  text-blueGray-700 mb-2">
                      Name
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {token.data.name}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      <strong>Nationality</strong> : {formData.nationality}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      <strong>Website:</strong> {formData.personWebsite}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      <strong>Skills:</strong> {formData.skills.join(", ")}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      <strong>Gender:</strong> {formData.gender}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          <strong>About:</strong> {formData.about}
                        </p>
                        <button
                          onClick={() => setProfileExists(false)}
                          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative  pt-8 pb-6 mt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 flex gap-2 justify-center font-semibold py-1">
                      Jobify
                      <a>IN React js</a>
                      by
                      <a>Sameer And Umar</a>.
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 xmd:grid-cols-2">
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black dark:text-gray-200" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="picture"
              >
                Picture
              </label>
              <input
                id="picture"
                type="file"
                onChange={handleFileChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="education"
              >
                Education
              </label>
              <input
                id="education"
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="experience"
              >
                Experience (years)
              </label>
              <input
                id="experience"
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black dark:text-gray-200" htmlFor="skills">
                Skills (comma separated)
              </label>
              <TagInput
                tags={formData.skills}
                setTags={(tags) => setFormData({ ...formData, skills: tags })}
              />
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="personWebsite"
              >
                Website
              </label>
              <input
                id="personWebsite"
                type="text"
                name="personWebsite"
                value={formData.personWebsite}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black dark:text-gray-200" htmlFor="about">
                About
              </label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <input
                id="nationality"
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </section>
    </>
  );
}

export default UserProfileForm;
