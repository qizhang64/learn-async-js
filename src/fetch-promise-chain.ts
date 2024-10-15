interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise4
    .then((response: Response) => response.json() as Promise<Product[]>) // it will return a result, the result will be forward to next iterate -> chaining
    .then((products: Product[]) => { // each are independent and decoupled from each other
        products.forEach((product: Product) => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  