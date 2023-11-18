import { useState } from "react";
export default function SearchBar() {
  const Filterdata = [
    { title: "Projects", active: true },
    { title: "Assets", active: false },
    { title: "Images", active: false },
    { title: "People", active: false },
  ];
  const [active, setActive] = useState("Projects");
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const mockSuggestions = [
    "Apple",
    "Banana",
    "Car",
    "Dog",
    "Elephant",
    "Flower",
    "Grape",
    "Hat",
    "Ice Cream",
    "Jellyfish",
    "Kangaroo",
    "Lemon",
    "Mountain",
    "Notebook",
    "Orange",
    "Penguin",
    "Queen",
    "Rainbow",
    "Sunflower",
    "Turtle",
    "Umbrella",
    "Violin",
    "Watermelon",
    "Xylophone",
    "Yogurt",
    "Zebra",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredSuggestions = mockSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };
  return (
    <div className="flex md:mx-6 lg:mx-8 my-4 border border-zinc-300 rounded-full">
      <div className="relative text-xl w-3/4 p-2 border-r-2 border-zinc-300 flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search the creative world at work"
          className="outline-none placeholder:font-medium w-3/4 font-Poppins"
          value={searchTerm}
          onChange={handleInputChange}
        />

        {suggestions.length > 0 && (
          <ul className="absolute z-10 top-full left-0 mt-1 w-3/4 bg-white border border-gray-300 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="py-1 px-3 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="hidden lg:flex space-x-4 px-5 py-2">
        {Filterdata.map((data, index) => (
          <button
            onClick={() => setActive(data.title)}
            className={`font-Poppins ${
              data.title == active ? "bg-color1 text-gray-100" : "bg-white"
            } rounded-full px-4`}
            key={index}
          >
            {data.title}
          </button>
        ))}
      </div>
      <div
        onClick={() => setToggle((state) => !state)}
        className="relative cursor-pointer mx-auto lg:hidden text-sm font-Monst flex items-center "
      >
        {active}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <ul
          className={` ${
            toggle ? "block" : "hidden"
          } w-[12rem]  absolute top-full z-10 bg-white right-0 font-Monst border rounded text-sm p-2 `}
        >
          {Filterdata.map((item, index) => (
            <li
              className={`px-4 p-2 text-sm cursor-pointer ${
                item.title == active ? "text-color3" : "text-color1"
              }`}
              onClick={() => setActive(item.title)}
              key={index}
              value={item.title}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
