// importi
import { cart } from "./index.js";
import { Checkout } from "./checkout.js";

export class ShoppingCart {
  // staticki niz za ajteme u korpi
  static allCartItems = [];

  // polja instanci
  product;
  quantity;

  // konstruktor
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  //staticki metod za dodavanje ajtema u niz
  static addToCart(product, quantity) {
    // trazimo da li proizvod vec postoji u korpi
    let match = ShoppingCart.allCartItems.find(
      (item) => item.product.title == product.title
    );
    if (match) {
      // ako postoji, sabiramo kolicinu
      match.quantity += Number(quantity);
      console.log(ShoppingCart.allCartItems);
      // pozivamo metod displayCart()
      ShoppingCart.displayCart();
    } else {
      // pravimo novu instancu ShoppingCart-a
      // prosledjujemo ceo product objekat i kolicinu
      let p = new ShoppingCart(product, quantity);

      // guramo proizvod u allCartItems niz
      ShoppingCart.allCartItems.push(p);
      console.log(ShoppingCart.allCartItems);
      // prikazujemo ponovo ceo cart
      ShoppingCart.displayCart();
    }
  }

  // staticki metod za brisanje ajtema iz korpe
  static removeFromCart(index) {
    ShoppingCart.allCartItems.splice(index, 1);
    ShoppingCart.displayCart();
  }

  // staticki metod za prikazivanje korpe
  static displayCart() {
    // HTML struktura za jedan kupljeni ajtem
    cart.innerHTML = "";
    cart.style.display = "flex";
    // id brojac za dugmice za brisanje ajtema iz korpe
    // preko njega cemo gadjati odgovarajuci index ajtema u nizu
    let idCount = 0;

    // HTML struktura za svaki pojedinacni ajtem iz korpe (cart-a)
    ShoppingCart.allCartItems.forEach(function (item) {
      const jedanKupljeniProizvod = document.createElement("div");
      jedanKupljeniProizvod.classList.add("jedanKupljeniProizvod");

      const imeKupljenogProizvoda = document.createElement("p");
      imeKupljenogProizvoda.classList.add("imeKupljenogProizvoda");
      imeKupljenogProizvoda.textContent = `${item.product.title}`;

      const kolicinaKupljenogProizvoda = document.createElement("p");
      kolicinaKupljenogProizvoda.classList.add("kolicinaKupljenogProizvoda");
      kolicinaKupljenogProizvoda.textContent = `Kolicina: ${item.quantity}`;

      let medjuzbirBroj = item.quantity * item.product.price;
      const medjuzbir = document.createElement("p");
      medjuzbir.classList.add("medjuzbir");
      medjuzbir.textContent = `Medjuzbir: ${medjuzbirBroj.toFixed(2)}`;

      const izbaciIzKorpe = document.createElement("button");
      izbaciIzKorpe.classList.add("izbaciIzKorpe");
      izbaciIzKorpe.textContent = "Izbaci iz korpe";
      izbaciIzKorpe.id = idCount++;
      izbaciIzKorpe.style.background = "white";
      izbaciIzKorpe.style.padding = "2px 10px";
      izbaciIzKorpe.style.borderRadius = "10px";
      izbaciIzKorpe.style.fontSize = "0.75rem";
      izbaciIzKorpe.style.color = "#023047";
      izbaciIzKorpe.style.fontWeight = "700";

      // izbaci iz korpe listener
      izbaciIzKorpe.addEventListener("click", function (e) {
        jedanKupljeniProizvod.remove();
        // zovemo removeFromCart i prosledjujemo id dugmeta za brisanje
        ShoppingCart.removeFromCart(izbaciIzKorpe.id);
        if (ShoppingCart.allCartItems.length === 0) {
          cart.innerHTML = "";
          cart.style.display = "none";
          Checkout.removeFromDOM();
        }
        console.log(ShoppingCart.allCartItems);
      });

      // apendovanja
      jedanKupljeniProizvod.append(
        imeKupljenogProizvoda,
        kolicinaKupljenogProizvoda,
        medjuzbir,
        izbaciIzKorpe
      );

      cart.append(jedanKupljeniProizvod);
    });

    // checkout dugme
    const checkout = document.createElement("button");
    checkout.classList.add("checkout");
    checkout.textContent = "Racun";

    // listener na checkout dugmetu
    checkout.addEventListener("click", function () {
      // pozivamo printCheck metodu na Checkout klasi
      // prosledjujemo ceo niz kupljenih proizvoda
      Checkout.printCheck(ShoppingCart.allCartItems);
    });

    // apendujemo checkout dugme na cart (korpu)
    cart.append(checkout);

    // vracamo celu korpu
    return cart;
  }
}
