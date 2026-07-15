const safeParse = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null || raw === "undefined" || raw === "") {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
};

export const fetchSessionUser = () => safeParse("user", null);

export const fetchSessionCart = () => safeParse("cartItems", []) || [];

export const fetchSessionUserMode = () => {
  // Prefer adminMode; migrate any legacy userMode key
  const mode = safeParse("adminMode", null);
  if (mode !== null) return Boolean(mode);

  const legacy = safeParse("userMode", false);
  return Boolean(legacy);
};
