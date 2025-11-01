// Lazy loader for medications data
let medicationsCache: any[] | null = null;

export async function loadMedications() {
  if (medicationsCache) {
    return medicationsCache;
  }
  
  try {
    const module = await import('./medications-cnops.json');
    medicationsCache = module.default;
    return medicationsCache;
  } catch (error) {
    console.error('Failed to load medications:', error);
    return [];
  }
}

export function searchMedications(query: string, limit: number = 50) {
  if (!medicationsCache) {
    return [];
  }
  
  const searchTerm = query.toLowerCase();
  const results = medicationsCache.filter((med: any) =>
    med.name.toLowerCase().includes(searchTerm) ||
    med.dci?.toLowerCase().includes(searchTerm)
  );
  
  return results.slice(0, limit);
}
