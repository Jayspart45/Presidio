import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Hero/Modal";
const Home = () => {
  const [data, setData] = useState([]);
  const [isModal, setModal] = useState(false);
  const [src, setSrc] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=KlcDksCEoro8kUDKEk5XWf0LcLlVMn5Mko1ktUE2CdI"
      );
      const data = await response.json();
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
          src={item.urls.raw}
          desc={item.alt_description}
          user={item.user.username}
        />
      ))}
    </div>
  );
};

export default Home;
