const count = {
  installs: 0,
  activations: 0,
  fetches: 0,
};

// eslint-disable-next-line
self.addEventListener("install", () => {
  console.log("install"); // eslint-disable-line
  console.log(count.installs + 1); // eslint-disable-line
});

// eslint-disable-next-line
self.addEventListener("activate", () => {
  console.log("activate"); // eslint-disable-line
  console.log(count.activations + 1); // eslint-disable-line
});

// eslint-disable-next-line
self.addEventListener("fetch", () => {
  console.log("fetch"); // eslint-disable-line
  console.log(count.fetches + 1); // eslint-disable-line
});
