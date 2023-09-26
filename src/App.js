import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section";
import BasicTabs from "./components/TabPanel";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const generateData = async () => {
    try {
      const topAlbums = await fetchTopAlbums();
      const newAlbums = await fetchNewAlbums();
      setTopAlbums(topAlbums);
      setNewAlbums(newAlbums);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title={"Top albums"} data={topAlbums} />
      <Section title={"New albums"} data={newAlbums} />
      <BasicTabs title="Songs"/>
    </div>
  );
}

export default App;
