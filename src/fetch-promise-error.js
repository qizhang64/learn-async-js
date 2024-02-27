const fetchPromise = fetch( // if this fetch fails, directly go to catch
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(`Bad Response : ${response.status}`) // need to use messge to see which block returns error
    })
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`);
    });

    console.log('Chaining promises ... ');

// asynchonous: only start when it is trigered
  