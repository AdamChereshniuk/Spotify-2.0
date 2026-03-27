import { Pause, Play } from "lucide-react";
import { SearchField } from "./components/elements/search-field/SearchField";
import { TRACKS } from "./data/tracks.data";
import { Track } from "./components/elements/track-item/Track";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { playerStore } from "./store/player.store";
import banner from "./assets/banner.jpg";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useQueryState("q");

  const filteredTracks = useMemo(() => {
    if(!searchTerm) return TRACKS;
    
    return TRACKS.filter(track => track.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  return (
    <div>
      <SearchField value={searchTerm || ""} onChange={e => setSearchTerm(e.target.value)} />

      <div className="relative">
        <img className="rounded-xl" src={banner} alt="Баннер" />

        <div className="flex items-center justify-between absolute bottom-layout left-0 px-layout w-full">
          <div>
            <h1 className="text-2xl font-semibold mb-[0.18rem] text-white">Daft Punk</h1>
            <h2 className="text-primary font-medium">6.8m listeners</h2>
          </div>
          
          <button
            className="rounded-full bg-gradient-to-r from-[#2F3034] to-[#1F2026] p-5 border border-player-bg border-solid duration-300 hover:translate-y-[-2px] hover:shadow"
            onClick={() => playerStore.togglePlayPause()}
          >
            {
              playerStore.isPlaying
              ? <Pause className="text-primary" fill="var(--color-primary)" />
              : <Play className="text-primary" fill="var(--color-primary)" />
            }
          </button>
        </div>
      </div>

      <div>{filteredTracks.map((track, index) => <Track track={track} key={index} />)}</div>
    </div>
  );
};

export default App;