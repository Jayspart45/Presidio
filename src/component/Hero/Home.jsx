import { useState } from "react";
import Card from "./Card";
import Modal from "../Hero/Modal";
// import axios from "axios";
const Home = () => {
  const [isModal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const data = [
    {
      title: "Guy to Buy a Juice",
      user: "sam",
      src: "https://i.ibb.co/VLFg6dL/img1.jpg",
    },
    {
      title: "Tax car is running",
      user: "noem",
      src: "https://i.ibb.co/HCZ6WmZ/img2.jpg",
    },
    {
      title: "Cute Baby seeing",
      user: "ricky",
      src: "https://i.ibb.co/PgcM21F/img3.jpg",
    },
    {
      title: "Two Birds in a symentry",
      user: "peter",
      src: "https://i.ibb.co/sjq7bgR/img4.jpg",
    },
    {
      title: "A Picture of Door in Wall",
      user: "tarik",
      src: "https://i.ibb.co/xqCShtt/img5.jpg",
    },
    {
      title: "Scooter standing under shadow of tree",
      user: "yuno",
      src: "https://i.ibb.co/86NdXBX/img6.jpg",
    },
    {
      title: "Photograher taking pictures",
      user: "asta",
      src: "https://i.ibb.co/F6KKtg3/img7.jpg",
    },
    {
      title: "Island with tree and clouds",
      user: "naruto",
      src: "https://i.ibb.co/RhHfNk5/img8.jpg",
    },
    {
      title: "Couple under the tree",
      user: "sasuke",
      src: "https://i.ibb.co/dLD5thc/img9.jpg",
    },
    {
      title: "Picture of entrance of tree",
      user: "Ayanakoji",
      src: "https://i.ibb.co/2tDsxY5/img10.jpg",
    },
    {
      title: "Palace garden",
      user: "kushida",
      src: "https://i.ibb.co/XxyJHZ0/img11.jpg",
    },
    {
      title: "shutter and door",
      user: "horikita",
      src: "https://i.ibb.co/JkbWvWj/img12.jpg",
    },
    {
      title: "Architechure Beautiful",
      user: "eren",
      src: "https://i.ibb.co/g7KsBDJ/img13.jpg",
    },
    {
      title: "Painting with paint brush",
      user: "mikasa",
      src: "https://i.ibb.co/tbGJqHH/img14.jpg",
    },
    {
      title: "Color Pencil in Line up and downn",
      user: "armin",
      src: "https://i.ibb.co/4ZCRMfc/img15.jpg",
    },
  ];
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/getPhoto");
  //     console.log(response);
  //     const data = response.data;
  //     setData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-hidden mt-10 w-full h-[80vh] overflow-y-scroll md:px-6 lg:px-8">
      {isModal ? <Modal src={src} setModal={setModal} /> : <></>}

      {data.map((item, index) => (
        <Card
          setSrc={setSrc}
          setModal={setModal}
          key={index}
          src={item.src}
          desc={item.title}
          user={item.user}
        />
      ))}
    </div>
  );
};

export default Home;
