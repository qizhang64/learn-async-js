interface Product {
    name: string;
    price: number;
    image: string;
    type: string;
  }

const fetchPromise3 = fetch( // if this fetch failed, directly go to catch error: Failed to get products: TypeError: fetch failed
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise3
    .then((response: Response) => {
        if(response.ok) {
            return response.json() as Promise<Product[]>; // Failed to get products: Error: Bad Response : 404
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`);
    });

    console.log('Chaining promises ... ');
  