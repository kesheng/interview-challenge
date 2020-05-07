import React, { useContext, useMemo } from "react";

import MenuList from "./MenuList";
import HomeContext from "./../contexts/HomeContext";

const MenuContainer = () => {
    const contextValue = useContext(HomeContext);

    return useMemo(
        () => {
            return <MenuList menus={ contextValue.state.menus } />
        },
        [contextValue.state.menus.length]
    );
};

export default MenuContainer;