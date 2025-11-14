const imageModules = import.meta.glob('/public/images/Pictures/*', { eager: true });

export const getGalleryImageMap = () => {
  const imageMap = {};
  for (const path in imageModules) {
    const filename = path.split('/').pop();
    // The path from import.meta.glob for /public is already the correct URL path.
    // e.g., /public/images/Pictures/foo.jpg becomes /images/Pictures/foo.jpg
    imageMap[filename] = imageModules[path].default.replace('/public', '');
  }
  return imageMap;
};
