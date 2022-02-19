# My Menu App :)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

My Menu App is a responsive, react application that allows a user to see a list of menu items, each displayed on a card providing a picture, title, price and description.

Using react router, the user can navigate to an "Add Item" page, which allows them to add a menu items.

From the main list, a user can edit the title, price and description by clicking on each. They can also delete an item. Complete with a warning pop up, just to be sure!

## Getting Started:

### `npm install`

Make sure to install depencies. In this case, I used react-router-dom, react-easy-edit and sweetalert2.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Things to Note

Currently, you cannot edit the image for a menu item but you can edit all other information by clicking the text. I noticed a console error saying that "placeholder" was an invalid prop for my EasyEdit component, however, it is giving the desired outcome on the screen - without it, it does not. So for now, I've chosen to leave it in.

## Future Goals

- Adding inline, editable functionality to the image of each menu item.

- Testing. I currently do not have experince writing unit tests, but I would like to learn how to implement testing with Jest, since it is included with React.

Hope you enjoy!

--Steph
