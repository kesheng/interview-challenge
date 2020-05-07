import React from "react";

import MenuListItem from "./MenuListItem";

const MenuList = (props) => {
    console.log('Menu list component loaded!');

    const { menus } = props;

    return (menus && menus.length > 0) ?
        <ul className="item-picker">
            {
                menus.map(item => {
                    return <MenuListItem key={item.id} {...item} />
                })
            }
        </ul>
    :
    null;
};

export default MenuList;