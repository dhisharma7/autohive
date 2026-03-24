const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export async function fetchCars() {
  const res = await fetch(`${API_BASE}/cars`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  return res.json();
}

export async function fetchCarBySlug(slug) {
  const res = await fetch(`${API_BASE}/cars/slug/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchDealers() {
  const res = await fetch(`${API_BASE}/dealers`);
  if (!res.ok) throw new Error("Failed to fetch dealers");
  return res.json();
}

export async function fetchDealerBySlug(slug) {
  const res = await fetch(`${API_BASE}/dealers/slug/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchDealerById(id) {
  const res = await fetch(`${API_BASE}/dealers/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchCarsByDealer(dealerId) {
  const res = await fetch(`${API_BASE}/dealers/${dealerId}/cars`);
  if (!res.ok) return [];
  return res.json();
}
