const imagePaths = [];
//          note relative path vvv                 vvv this gets rid of promises
Object.values(
  import.meta.glob("../public/test/*.jpg", { eager: true })
).forEach(({ default: path }) => {
  const url = new URL(path, import.meta.url);
  const data = {
    path: url.pathname,
  };
  imagePaths.push(data);
});

return imagePaths;
