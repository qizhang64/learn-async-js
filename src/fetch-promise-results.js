const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json(); // return json data with a return of promise object not value
  jsonPromise.then((products) => { // dependency: we have a Promise in the first
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... '); // main
