import { useState } from "react";
import colorIcon from "../../assets/img3.png";
import Sort from "./Sort";
export default function Category() {
  const categoryData = [
    {
      title: "Creative Fields",
      d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z",
      list: [
        "All Creative Fields",
        "Architecture",
        "Art Direction",
        "Branding",
        "Fashion",
        "Graphic Design",
        "Illustration",
        "Industrial Design",
        "Interaction Design",
        "Motion Graphics",
        "Photography",
        "UI/UX",
        "Web Design",
      ],
      active: false,
    },
    {
      title: "Tools",
      d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
      list: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe After Effects",
        "Adobe Photoshop Lightroom",
      ],
      active: false,
    },
    {
      title: "Color",
      d: false,
      list: false,
      active: false,
    },
    {
      title: "Location",
      d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
      list: ["Dummy", "Dummy", "Dummy", "Dummy", "Dummy", "Dummy"],
      active: false,
    },
    {
      title: "Schools",
      d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
      list: [
        "Pratt Institute",
        "Savannah College of Art and Design (SCAD)",
        "Rhode Island School Of Design (RISD)",
        "Maryland Institute College of Art (MICA)",
        "School Of Visual Arts (SVA)",
      ],
      active: false,
    },
    {
      title: "Assets",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13",
      list: [
        "All Projects",
        "Projects with Assets",
        "All Prices",
        "Free",
        "Paid",
        "Subscription Only",
        "All Categories",
        "Fonts",
        "Illustrations",
        "Photos",
        "Templates",
        "Vectors",
      ],
      active: false,
    },
    {
      title: "Subscriptions",
      d: "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z",
      list: ["All", "Premium Projects"],
      active: false,
    },
  ];
  const [toggle, setToggle] = useState(categoryData);
  const handleToggle = (item) => {
    setToggle((prevToggle) => {
      const updatedToggle = prevToggle.map((data) => {
        if (data.title === item.title) {
          return { ...data, active: !data.active };
        }

        return data;
      });
      console.log(updatedToggle);
      return updatedToggle;
    });
    console.log(toggle);
  };

  return (
    <div className="hidden md:flex relative space-x-2 font-Poppins justify-between lg:mx-8 md:mx-6">
      <div className="overflow-y-visible  flex space-x-2  overflow-x-scroll">
        {toggle.map((item, index) => (
          <button
            className=" px-4 py-1 text-sm font-semibold flex items-center border border-gray-300 rounded"
            key={index}
            onClick={() => handleToggle(item)}
          >
            {item.d ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
              </svg>
            ) : (
              <>
                <img
                  src={colorIcon}
                  alt="colorIcon"
                  className="w-4 rounded-full mr-1"
                />
              </>
            )}
            {item.title}
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
            {item.list ? (
              <div
                className={`${
                  item.active ? "block" : "hidden"
                }  z-20 border font-semibold text-gray-500 absolute space-y-2 p-2 top-full px-2 w-[18rem] min-h-[5rem] bg-white `}
              >
                {item.list.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute -top-6 left-0 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            ) : (
              <></>
            )}
          </button>
        ))}
      </div>
      <span className="border"></span>
      <Sort />
    </div>
  );
}
