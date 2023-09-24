import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { fetchAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const generateData = async () => {
    try{
      const data = await fetchAlbums();
      setTopAlbums(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    generateData();
  },[]);


  return (
    <div>
      <Navbar/>
      <Hero />
      <Section title={"Top albums"} data={topAlbums}/>
    </div>
  );
}

export default App;
