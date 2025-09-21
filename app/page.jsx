"use client"
import { useState } from "react";
import { geocodeLocation } from "./utils/geocodeLocation";
import { getWeather } from "./utils/getWeather";

export default function WeatherSearch() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const loc = await geocodeLocation(query);
      setLocation(loc);
      const w = await getWeather(loc.latitude, loc.longitude);
      setWeather(w);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setLocation(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          Search
        </button>
      </form>

      {loading && <p>Loading weather...</p>}
      {error && <p className="error">{error}</p>}

      {weather && location && !loading && (
        <div>
          <h1 className="!text-2xl">
            Weather in {location.name}, {location.country}
          </h1>
          <p className="mt-2">Current Temp: {weather.current.temperature_2m}°C</p>
        </div>
      )}
    </main>
  );
}
