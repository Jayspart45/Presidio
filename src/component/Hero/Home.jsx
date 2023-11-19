import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Hero/Modal";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [isModal, setModal] = useState(false);
  const [src, setSrc] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getPhoto");
      console.log(response);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
