import React from "react";

import MenuPreviewListItem from "./MenuPreviewListItem";

const MenuPreviewList = (props) => {
    console.log('Menu preview list component loaded!');

    const { menus } = props;

    return <React.Fragment>
        <h2>Menu preview</h2>
        <ul className="menu-preview">
            {
                menus.map(item => {
                    return <MenuPreviewListItem key={item.id} {...item} />
                })
            }
        </ul>
    </React.Fragment>
};

export default MenuPreviewList;