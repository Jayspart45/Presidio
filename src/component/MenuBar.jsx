/* eslint-disable react/prop-types */
export default function MenuBar({ link, setToggle }) {
  console.log(link);
  return (
    <div className="z-10 w-[18rem] py-5 px-4 flex  flex-col  min-h-screen bg-white absolute top-0 -left-10">
      <div className="flex justify-between items-center w-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => setToggle(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <button className=" text-color3 bg-color3 bg-opacity-10 border px-4 py-2 rounded-full">
          Log in
        </button>
      </div>

      {link.map((item, index) => (
        <div className="my-4 font-semibold" key={index}>
          {item}
        </div>
      ))}
      <button className="w-1/2 mt-10 bg-color3 text-gray-100 py-2 px-4 rounded-full">
        Sign Up
      </button>
    </div>
  );
}
