import { useState } from "react";

export default function Sort() {
  const data = [
    {
      title: "Recommended",
      active: true,
    },
    {
      title: "Currated",
      active: false,
    },
    {
      title: "Most Appreciated",
      active: false,
    },
    {
      title: "Most Viewed",
      active: false,
    },
    {
      title: "Most Discussed",
      active: false,
    },
    {
      title: "Most Recent",
      active: false,
    },
  ];
  const [active, setActive] = useState("Recommended");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <label className=" text-sm font-medium font-Poppins">
        Sort
        <p
          onClick={() => setToggle((state) => !state)}
          className="text-sm cursor-pointer font-Monst flex items-center "
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
        </p>
        <ul
          className={`${
            toggle ? "block" : "hidden"
          } w-[12rem] absolute top-full z-10 bg-white right-0 font-Monst border rounded text-sm p-2 `}
        >
          {data.map((item, index) => (
            <li
              className={`px-4 p-2  text-sm ${
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
      </label>
    </div>
  );
}
