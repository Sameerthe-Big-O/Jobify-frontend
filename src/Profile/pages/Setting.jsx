import React, { useEffect, useState } from "react";
import TagInput from "../components/TagInput";
import { ToastContainer, toast } from "react-toastify";

function Setting() {
  const [formData, setFormData] = useState({
    name: "",
    picture: "",
    locations: [],
    techStack: [],
    industryType: "",
    employees: "",
    phoneNumber: "",
    dateFound: "",
    aboutUs: "",
    benefits: [],
    websiteUrl: "",
    linkdenURL: "",
    facebookURL: "",
    instagramURL: "",
    vision: "",
    userId: "",
  });
  const [error, setError] = useState(null);
  const [profileExists, setProfileExists] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const companyId = JSON.parse(token);
          console.log("Company Id=>", companyId.data.id);
          setFormData((prev) => ({
            ...prev,
            userId: companyId.data.id,
          }));
          const response = await fetch(
            `http://localhost:3000/api/company/${companyId.data.id}`
          );
          const result = await response.json();
          console.log("Data Com=>", result.data[0].company[0]);
          if (result.data[0].company[0]) {
            const userProfile = result.data[0].company[0];
            setFormData({
              name: userProfile.name || "",
              picture: userProfile.picture || "",
              locations: userProfile.locations || [],
              techStack: userProfile.techStack || [],
              industryType: userProfile.industryType || "",
              employees: userProfile.employees || "",
              phoneNumber: userProfile.phoneNumber || "",
              dateFound: userProfile.dateFound || "",
              aboutUs: userProfile.aboutUs || "",
              benefits: userProfile.benefits || [],
              websiteUrl: userProfile.websiteUrl || "",
              linkdenURL: userProfile.linkdenURL || "",
              facebookURL: userProfile.facebookURL || "",
              instagramURL: userProfile.instagramURL || "",
              vision: userProfile.vision || "",
              userId: companyId.data.id,
            });
            setProfileExists(true);
          }
          console.log("USER ID=>", formData);
          toast.success("ID Save successfully!");
        } catch (error) {
          console.error("Failed to fetch data", error);
          setError("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Convert the file to a Base64 string
      const base64String = reader.result;

      setFormData((prevState) => ({
        ...prevState,
        picture: base64String,
      }));
    };

    // Read the file as Data URL
    reader.readAsDataURL(file);
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     picture: file,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
    try {
      const response = await fetch(
        "http://localhost:3000/api/company/profile",
        {
          method: profileExists ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // setFormData({
        //   name: "",
        //   picture: "",
        //   locations: [],
        //   techStack: [],
        //   industryType: "",
        //   employees: "",
        //   phoneNumber: "",
        //   dateFound: "",
        //   aboutUs: "",
        //   benefits: [],
        //   websiteUrl: "",
        //   linkdenURL: "",
        //   facebookURL: "",
        //   instagramURL: "",
        //   vision: "",
        //   userId: "",
        // });
        setProfileExists(true);
        toast.success("Profile Complete  successfully!");
      } else {
        toast.error("Failed to Profile. Please try again.");
        setError(error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display an error message)
    }
  };
  if (error) {
    return <div>Error: {error}</div>;
  }
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token.data.name);

  return (
    <>
    <ToastContainer />
      {profileExists ? (
        <section className="bg-blueGray-50">
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
                          {formData.vision}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Experience
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {formData.locations}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Location
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
                    <strong>Nationality</strong> : {formData.industryType}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <strong>Website:</strong> {formData.websiteUrl}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <strong>Skills:</strong> {formData.techStack.join(", ")}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    <strong>Gender:</strong> {formData.employees}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <strong>About:</strong> {formData.aboutUs}
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
      ) : (
        <section className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-black capitalize dark:text-black">
            Account settings
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 xmd:grid-cols-2">
              <div>
                <label className="text-black dark:text-gray-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
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
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="tags"
                >
                  Locations (Search or write tag and hit enter)
                </label>
                <TagInput
                  tags={formData.locations}
                  setTags={(tags) =>
                    setFormData({ ...formData, locations: tags })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="tags"
                >
                  Tech Stack (Search or write tag and hit enter)
                </label>
                <TagInput
                  tags={formData.techStack}
                  setTags={(tags) =>
                    setFormData({ ...formData, techStack: tags })
                  }
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="industryType"
                >
                  Industry Type
                </label>
                <input
                  id="industryType"
                  type="text"
                  value={formData.industryType}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="employees"
                >
                  Employees
                </label>
                <input
                  id="employees"
                  type="number"
                  value={formData.employees}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
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
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="dateFound"
                >
                  Date Found
                </label>
                <input
                  id="dateFound"
                  type="date"
                  value={formData.dateFound}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="aboutUs"
                >
                  About Us
                </label>
                <textarea
                  id="aboutUs"
                  value={formData.aboutUs}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="tags"
                >
                  Benefits (Search or write tag and hit enter)
                </label>
                <TagInput
                  tags={formData.benefits}
                  setTags={(tags) =>
                    setFormData({ ...formData, benefits: tags })
                  }
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="websiteUrl"
                >
                  Website URL
                </label>
                <input
                  id="websiteUrl"
                  type="text"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="linkdenURL"
                >
                  LinkedIn URL
                </label>
                <input
                  id="linkdenURL"
                  type="text"
                  value={formData.linkdenURL}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="facebookURL"
                >
                  Facebook URL
                </label>
                <input
                  id="facebookURL"
                  type="text"
                  value={formData.facebookURL}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="instagramURL"
                >
                  Instagram URL
                </label>
                <input
                  id="instagramURL"
                  type="text"
                  value={formData.instagramURL}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="vision"
                >
                  Vision
                </label>
                <textarea
                  id="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
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
        </section>
      )}
    </>
  );
}
export default Setting;
