export class Checkout {
  // staticki niz svih ajtema
  // ovde cemo svaki kupljeni ajtem uneti kao zaseban objekat
  static allItems = [];

  // polja za instance
  productGroup;
  productTitle;
  productPrice;
  productQuantity;
  productVAT;
  productSubtotal;

  // konstruktor
  constructor(
    productGroup,
    productTitle,
    productPrice,
    productQuantity,
    productVAT,
    productSubtotal
  ) {
    this.productGroup = productGroup;
    this.productTitle = productTitle;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.productVAT = productVAT;
    this.productSubtotal = productSubtotal;
  }

  // printCheck prima ceo niz ajtema iz klase ShoppingCart
  static printCheck(shoppingCart) {
    const checkoutContainer = document.querySelector(".checkoutContainer");
    checkoutContainer.style.display = "flex";
    Checkout.allItems = [];
    // pravimo Checkout objekat od dobijenih objekata
    shoppingCart.forEach(function (item) {
      let c = new Checkout(
        // resavamo se nestovanih objekata
        item.product.productGroup.title,
        item.product.title,
        item.product.price,
        item.quantity,
        item.product.productGroup.vat,
        item.product.price * item.quantity
      );
      // sve ajteme guramo u allItems niz
      Checkout.allItems.push(c);
      console.log(Checkout.allItems);
    });

    // HTML struktura tabele
    // // div tabele
    checkoutContainer.innerHTML = "";

    // // // tabela
    const table = document.createElement("table");
    table.style.border = "solid black 2px";
    table.style.textAlign = "center";

    // // // header
    const header = document.createElement("thead");

    // // // // red table header polja
    const redHeadera = document.createElement("tr");

    // // // // // pojedinacna header polja
    const prodGroup = document.createElement("th");
    prodGroup.style.width = "300px";
    prodGroup.textContent = "Prod Group";

    const product = document.createElement("th");
    product.style.width = "300px";
    product.textContent = "Product";

    const price = document.createElement("th");
    price.style.width = "300px";
    price.textContent = "Price";

    const quantity = document.createElement("th");
    quantity.style.width = "300px";
    quantity.textContent = "Quantity";

    const vat = document.createElement("th");
    vat.style.width = "300px";
    vat.textContent = "VAT";

    const subtotal = document.createElement("th");
    subtotal.style.width = "300px";
    subtotal.textContent = "Subtotal";

    redHeadera.append(prodGroup, product, price, quantity, vat, subtotal);
    header.append(redHeadera);
    table.append(header);
    checkoutContainer.append(table);

    // redovi za svaki pojedinacni ajtem
    Checkout.allItems.forEach(function (item) {
      const prodRow = document.createElement("tr");
      const data1 = document.createElement("td");
      data1.style.width = "300px";
      data1.textContent = item.productGroup;
      const data2 = document.createElement("td");
      data2.style.width = "300px";
      data2.textContent = item.productTitle;
      const data3 = document.createElement("td");
      data3.style.width = "300px";
      data3.textContent = item.productPrice;
      const data4 = document.createElement("td");
      data4.style.width = "300px";
      data4.textContent = item.productQuantity;
      const data5 = document.createElement("td");
      data5.style.width = "300px";
      data5.textContent = item.productVAT;
      const data6 = document.createElement("td");
      data6.style.width = "300px";
      data6.textContent = item.productPrice * item.productQuantity;

      prodRow.append(data1, data2, data3, data4, data5, data6);
      table.append(prodRow);
    });

    // totalni VAT
    let totalVat = 0;
    Checkout.allItems.forEach(function (item) {
      totalVat += item.productVAT;
    });
    console.log(totalVat);

    // ukupna cena
    let totalPrice = 0;
    Checkout.allItems.forEach(function (item) {
      totalPrice += item.productSubtotal;
    });

    // poslednji red u tabeli
    const lastRow = document.createElement("tr");
    const totalData = document.createElement("td");
    totalData.style.width = "300px";
    totalData.textContent = `VAT/TOTAL: ${totalVat}/${totalPrice}`;
    lastRow.append(totalData);
    table.append(lastRow);
  }

  static removeFromDOM() {
    const checkoutContainer = document.querySelector(".checkoutContainer");
    checkoutContainer.style.display = "none";
  }
}
