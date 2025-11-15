export function asset(path) {
  if (!path) return path;
  // Remove any leading slash to avoid double slashes when BASE_URL ends with '/'
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL || '/'}${normalized}`;
}

export default asset;
