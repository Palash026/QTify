import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section";
import BasicTabs from "./components/TabPanel";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  const generateData = async () => {
    try {
      const topAlbums = await fetchTopAlbums();
      const newAlbums = await fetchNewAlbums();
      const allSongs = await fetchSongs();
      setAllSongs(allSongs);
      setTopAlbums(topAlbums);
      setNewAlbums(newAlbums);
    } catch (err) {
      console.log(err);
    }
  };

  const filter = (query, data) => {
    query = query.toLowerCase();
    return query === 'all'
      ? data
      : data.filter((song) => song.genre.key.toLowerCase() === query);
  };
  

  const tabs = ['All', 'Rock', 'Pop', 'Jazz', 'Blues']

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title={"Top albums"} data={topAlbums} />
      <Section title={"New albums"} data={newAlbums} />
      <BasicTabs title="Songs" tabs={tabs} filterCallback={filter} data={allSongs}/>
    </div>
  );
}

export default App;
