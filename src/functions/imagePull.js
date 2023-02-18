export const imagePull = () => {
  const imagePaths = [];
  Object.values(import.meta.glob("./test/*.jpg", { eager: true })).forEach(
    ({ default: path }) => {
      const url = new URL(path, import.meta.url);
      const data = {
        path: url.pathname,
      };
      imagePaths.push(data);
    }
  );

  console.log(imagePaths);
};
// Thanks Honza Kvoch! https://stackoverflow.com/questions/74088009/vite-react-import-images-dynamically-from-public-url
