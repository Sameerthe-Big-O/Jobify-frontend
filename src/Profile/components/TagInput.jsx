import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      e.preventDefault();
      if (!tags.includes(input)) {
        setTags([...tags, input]);
        setInput("");
      }
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="mb-4">
      <div className="tag-input-container flex ">
        {tags.map((tag, index) => (
          <div key={index} className="tag  p-1">
            <span>{tag}</span>
            <button type="button" onClick={() => removeTag(index)}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="tags"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={input}
        placeholder="Enter tags"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TagInput;
