import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const NewSpotify = (): SpotifyApi =>
  SpotifyApi.withClientCredentials(
    "16f6ab8688d042b893b99a482f5edbdd",
    "3b91a232d647447caee44df1cbd70965"
  );

const spotify = NewSpotify();

function App() {
  const getArtists = async (spotify: SpotifyApi, word: string) => {
    const items = await spotify.search(word, ["artist"], undefined, 49);
    return items.artists.items;
  };
  console.log(getArtists(spotify, "WANDS"));
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
