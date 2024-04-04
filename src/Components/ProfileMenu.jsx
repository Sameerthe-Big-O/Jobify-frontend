import React, { useState } from "react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => {
    // Implement action handling here, such as navigating to dashboard, settings, or logging out
    console.log("Action selected:", action);
  };

  return (
    <div className="relative inline-block text-left w-auto">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-full focus:outline-none"
          onClick={toggleDropdown}
        >
          <img
            className="h-[20%] w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Avatar"
          />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleItemClick("Dashboard")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Dashboard
            </button>
            <button
              onClick={() => handleItemClick("Settings")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Settings
            </button>
            <button
              onClick={() => handleItemClick("Logout")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
