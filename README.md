## JS Market

The JS Market is a basic, one-page JavaScript app. It allows the user to add existing products from the list into the shopping cart and get the bill broken down by products.

## Motivation

The project was made during the sixth week of the IT Bootcamp's Front End Development Course as the first experiment object-oriented programming and classes in JavaScript. Also, it is one of the first projects to utilize JS modules.

## Build status

The project is considered finished, and there won't be any expansions in terms of features. The project was overhauled recently with responsive design and code cleanup.

## Tech/framework used

This project was done in JavaScript, without the use of any frameworks or libraries. Vanilla CSS was used for styling.

<b>Built with</b>
Aside from React.js, I also used

- HTML
- CSS
- JavaScript

## Features

Main features of this app include:

- fetching/displaying the list of products

- adding products to the cart

- calculating the price of the shopping cart

## Installation

1. To install this project on your machine and get it up and running, you should first clone this repository. Open the terminal, navigate to the desired destination on your drive, and run the following command:

git clone https://github.com/TatsuKenshi/Nedelja9DomaciZaNedelju

2. When the download is done, navigate to the project's folder with the following command:

cd Nedelja9DomaciZaNedelju

3. Open the project in the code editor or IDE of your choice and open index.html.

4. To spin up the local dev environment (if you're using VS Code), right-click anywhere in the index.html document and select the "Open With Live Server" option from the context menu.

## API Reference

No APIs were used in this project.

## How to use?

- how to add a product to the cart
  Pick any product on the list ("Katalog Artikala" section), select the amount you want to add via the buttons in the select menu, and press the "Ubaci u korpu" button. The Item will appear below in the "Vasa Korpa" section. If you try to add 0 or less items, you'll get an error message.

  Before every addition, the application always checks whether that particular item has already been added to the cart. If not, it adds the selected product. If yes, it adds the amount you selected to the already existing item of the same name in the cart. You can add as many items as you wish.

- how to edit the amount for an added item
  You can only increase the amount for added items. Subtraction is unavailable. How do you increase the amount? Just add the desired item again from the "Katalog Artikala" section.

- how to remove an item from the cart
  Locate the item you want to remove from the cart in the "Vasa Korpa" section, and press the "Izbaci iz korpe" button. The item will disappear from the "Vasa Korpa" list. If you remove the last item from the cart, the cart will disappear from the screen.

- how to get the bill
  To get the total cost of your shopping cart, you should press the "Racun" button in the "Vasa Korpa" section. Keep in mind that you should press the "Racun" button every time you make a change to your cart (add an item, increase an amount, or remove an item).
