// Search.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

// Reusable Input Component
const InputField = React.memo(React.forwardRef(({ placeholder, ...props }, ref) => (
  <div className="relative flex-grow">
    <input
      ref={ref}
      className="w-full border border-gray-300 rounded-l-3xl py-2 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      placeholder={placeholder}
      aria-label={placeholder}
      {...props}
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
)));

// Reusable Button Component
const SearchButton = ({ children }) => (
  <button
    type="submit"
    className="bg-blue-600 text-white rounded-r-3xl px-4 py-2.5 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    {children}
  </button>
);

function Search() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data?.query.trim()) {
      console.log("Search query:", data.query);
      navigate(`/search/${data.query.trim()}`);
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full max-w-lg rounded-full overflow-hidden"
    >
      <InputField
        placeholder="Search..."
        {...register("query", { required: true })}
      />
      <SearchButton>Search</SearchButton>
      {errors.query && <span className="text-red-500 text-sm ml-2">This field is required</span>}
    </form>
  );
}

export default Search;