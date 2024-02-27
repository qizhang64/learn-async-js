const fetchPromise = fetch( // but not fetch it immediately
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise); // make Promise <pending>
  
  fetchPromise.then((response) => { // only execute when pending Promise completed, means get a response from server
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  
  console.log("Started request…");
  