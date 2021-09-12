// importi
import { ShoppingCart } from "./shoppingCart.js";

// ProductGroup klasa
export class ProductGroup {
  // staticki niz svih grupa proizvoda
  static grupe = [];

  // instance polja
  title;
  vat;

  // konstruktor
  constructor(title, vat) {
    this.title = title;
    this.vat = vat;
  }
  // nema metoda
}

export class Product {
  // staticka lista svih proizvoda
  static proizvodi = [];

  // instance polja
  barcode;
  title;
  price;
  productGroup;

  // konstruktor
  constructor(barcode, title, price, productGroup) {
    this.barcode = barcode;
    this.title = title;
    this.price = price;
    this.productGroup = productGroup;
  }

  // prikazivanje proizvoda na lageru
  static displayProducts() {
    // kontejner div
    const listaProizvoda = document.createElement("div");
    listaProizvoda.classList.add("listaProizvoda");

    // HTML struktura za svaki pojedinacni proizvod u nizu proizvodi
    Product.proizvodi.forEach(function (proizvod) {
      const jedanProizvod = document.createElement("div");
      jedanProizvod.classList.add("jedanProizvod");

      const ime = document.createElement("p");
      ime.classList.add("imeProizvoda");
      ime.textContent = `Proizvod: ${proizvod.title}`;

      const cena = document.createElement("p");
      cena.classList.add("cena");
      cena.textContent = `Cena: ${proizvod.price}`;

      const kolicina = document.createElement("input");
      kolicina.type = "number";
      // ovim dozvoljavamo decimalne brojeve u polju kolicina
      kolicina.step = "any";
      kolicina.classList.add("kolicina");

      const ubaciUKorpu = document.createElement("button");
      ubaciUKorpu.classList.add("ubaciUKorpu");
      ubaciUKorpu.textContent = "Ubaci u korpu";

      const warning = document.createElement("p");
      warning.classList.add("warning");
      warning.style.color = "red";

      // listener za dodavanje u korpu
      ubaciUKorpu.addEventListener("click", function (e) {
        e.preventDefault();

        // ako vrednost postoji i veca je od nule
        if (kolicina.value !== "" && kolicina.value > 0) {
          // pozivamo ShoppingCart.addToCart()
          ShoppingCart.addToCart(proizvod, Number(kolicina.value));
          // resetujemo polje za kolicinu
          kolicina.value = "";
        } else {
          // obavestenje o neispravnom unosu
          warning.textContent =
            "Neispravan unos. Kolicina mora biti veca od 0.";

          setTimeout(() => (warning.innerHTML = ""), 3000);
          kolicina.value = "";
        }
      });

      // apendujemo elemente na jedanProizvod, a jedanProizvod na listaProizvoda
      jedanProizvod.append(ime, cena, kolicina, ubaciUKorpu, warning);
      listaProizvoda.append(jedanProizvod);
    });

    // ovaj metod vraca listu proizvoda
    return listaProizvoda;
  }
}
