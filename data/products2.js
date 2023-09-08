
export let products2 = JSON.parse(localStorage.getItem('products2'));

if (products2 === null) {
  products2 = [];
}

products2 = products2.slice(products2.length - 1);
