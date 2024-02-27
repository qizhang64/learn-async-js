const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json()) // an error function always return the next block of chain
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');

// return a Promise, cannot do more until there is a block to send it to next step
  