if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log("Registration succeeded"); // eslint-disable-line
    })
    .catch((error) => {
      console.log(`Registration failed with ${error}`); // eslint-disable-line
    });
}
