export async function geocodeLocation(query) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      query
    )}&count=1`
  );
  if (!res.ok) throw new Error("Failed to fetch geocode");
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("Location not found");
  }
  return data.results[0];
}
