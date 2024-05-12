import React, { useState } from "react";

function ForgetPassword() {
    const [email,setEmail]=useState(null);
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ok");
    
        try {
          const response = await fetch("http://localhost:3000/api/auth/forgotPassword", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:email
            }),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
    
            throw new Error(errorData.message);
          }
    
        //   const token = await response.json();
        //   console.log(token.data.password);
        //   localStorage.setItem("token", token.data.password);
        //   setFormData({
        //     email: "",
        //     password: "",
        //   });
    
        //   setError(false); // Clear any previous errors
        //   const localdata = localStorage.getItem("token");
          console.log(localdata);
        //   if (localdata != null) {
        //     navigate("/");
        //     console.log("Sccuess");
        //     dispatch(login());
        //     localStorage.setItem("Login", true);
        //     const LoginData = localStorage.getItem("Login");
        //     console.log("SignIn=>", LoginData);
        //     dispatch(toggleLogin());
        //   }
        //    else {
        //     setError(true);
        //     navigate("/signin");
        //   }
        } catch (error) {
          setError(error.message || "An error occurred. Please try again.");
        }
      };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot your password?
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Don't fret! Just type in your email and we will send you a code to
              reset your password!
            </p>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div> */}
              <button
                type="submit"
                className="w-full text-black bg-gray-200 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;
