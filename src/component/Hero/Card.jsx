import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ src, desc, user, setModal, setSrc }) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((count) => !count);
  };
  const openModal = () => {
    setSrc(src);
    setModal(true);
  };
  return (
    <div className="font-Monst relative group">
      <div
        onClick={() => openModal()}
        className="relative overflow-hidden group-hover:after:bg-black group-hover:after:bg-opacity-25 group-hover:after:absolute group-hover:after:inset-0 group-hover:after:w-full group-hover:after:h-full"
      >
        <img
          src={src}
          alt="desc"
          className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>
      <div className="absolute -top-2 right-0 p-2 hidden group-hover:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clipRule="evenodd"
          />
        </svg>
        <p className="absolute font-Poppins text-gray-100 font-bold top-5 right-[1.35rem]">
          BE
        </p>
      </div>
      <div className="text-sm font-Poppins bg-zinc-600 rounded-full text-gray-100 absolute top-2 left-2 p-1 hidden items-center  group-hover:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
        </svg>
        save
      </div>
      <div className="flex justify-between py-1 pr-5">
        <p className="text-sm px-1 font-bold mr-1 text-color2 w-3/4">
          {desc ? desc : "NaN"}
        </p>
        <div className="flex space-x-2 items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-4 h-4 ${
              like ? "text-pink-500" : "text-gray-500"
            } cursor-pointer`}
            onClick={() => handleLike()}
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
          <span className="mx-1 text-sm">{like ? 21 : 20}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-1 text-sm">35k</span>
        </div>
      </div>
      <p className="text-sm px-1 text-gray-500">{user ? user : "NaN"}</p>
    </div>
  );
}
