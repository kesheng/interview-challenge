import React, { useMemo, useContext } from "react";

import MenuPreviewList from "./../components/MenuPreviewList";
import HomeContext from "./../contexts/HomeContext";

const MenuPreviewContainer = () => {
    const contextValue = useContext(HomeContext);

    return useMemo(() => {
        return <MenuPreviewList menus={ contextValue.state.addedMenus } />;
        },
        [contextValue.state.addedMenus.length]
    );
};

export default MenuPreviewContainer;