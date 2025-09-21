export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}
