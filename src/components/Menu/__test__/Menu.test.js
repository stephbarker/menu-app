import React from 'react';
import { render } from "@testing-library/react";

import Menu from './../Menu';

test('renders menu items', () => {
    const menuItems = [{id: 0, img: './img/steak.jpg', title: "Steak & Frites", price: 32.99, desc: "Yummy and delicious"}];
    render(<Menu items={menuItems} />);
});