# My Menu App :)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

My Menu App is a responsive, react application that allows a user to see a list of menu items, each displayed on a card providing a picture, title, price and description.

Using react router, the user can navigate to an "Add Item" page, which allows them to add a menu item.

From the main list, a user can also delete items. Complete with a warning pop up, just to be sure!

## Getting Started:

### `npm install`

Make sure to download my depencies. In this case I used react-router-dom and sweetalert2.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Things to Note

Since this app is pulling from a local data file, it is currently set to only add one item at a time. Instead of continually adding to the list, it swaps with the latest added. The deletion works in a similar fashion. Since we are filtering by id to complete the deletion, it only removes one at a time and refreshes with the full list that pulls from the data file.

## Future Goals

- Adding the inline editable UI! That is definetly a goal.

- Testing. I currently do not have experince writing unit tests, but I would like to learn how to implement testing with Jest, since it is included with React.

Hope you enjoy!

--Steph
