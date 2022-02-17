// importi
import { Product, ProductGroup } from "./products.js";

// DOM elementi
const shoppingItems = document.querySelector(".shoppingItems");
export const cart = document.querySelector(".cart");

// grupe proizvoda
let konditorskiProizvodi = new ProductGroup("Konditorski Proizvodi", 20);
let svezeMeso = new ProductGroup("Sveze Meso", 10);
let voce = new ProductGroup("Voce", 5);

// dodavanje svih grupa na klasu ProductGroup
ProductGroup.grupe.push(konditorskiProizvodi, svezeMeso, voce);

// ispisivanje artikala na DOM
Product.proizvodi.push(
  new Product("11001100110011", "Bananica", 14.99, konditorskiProizvodi),
  new Product("10101010101010", "Noblice", 89.99, konditorskiProizvodi),
  new Product("11100011100010", "Milka 100g", 129.99, konditorskiProizvodi),
  new Product("11110000111101", "Cevapi", 189.99, svezeMeso),
  new Product("11100011101010", "Juneci But", 289.99, svezeMeso),
  new Product("11110000000001", "Mandarine", 129.99, voce),
  new Product("10000111100001", "Jabuke", 79.99, voce),
  new Product("11111111111101", "Breskve", 99.99, voce)
);

shoppingItems.append(Product.displayProducts());
