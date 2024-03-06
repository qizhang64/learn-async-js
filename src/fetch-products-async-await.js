async function fetchProducts() {
    console.log('Begin fetch ... ');
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
    const response = await fetch( // synchronous?
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    console.log('Fetch done');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log('response created');
    return data[0].name;
  }
  
  async function main() {
    console.log('Begin main ... ')
    try {
        const productName = await fetchProducts(); // do not get a response of json until we get result from fetch
        console.log(productName);
    }
    catch(err) {
        console.log(`Failure: ${err.message}`);
    }
  }
  main();
  console.log('End main thread');
  
  // node src/fetch-products-async-await.js