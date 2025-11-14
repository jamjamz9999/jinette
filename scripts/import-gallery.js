const imageModules = import.meta.glob('/public/images/Pictures/*');

export const getGalleryImageMap = () => {
  const imageMap = {};
  for (const path in imageModules) {
    const filename = path.split('/').pop();
    imageMap[filename] = new URL(path, import.meta.url).href;
  }
  return imageMap;
};
