import React, { useCallback, useContext } from "react";

import HomeContext from "./../contexts/HomeContext";

const MenuListItem = (props) => {
    const contextValue = useContext(HomeContext);

    const handleItemClickAdd = useCallback(() => {
        contextValue.dispatch({
            type: "ADD_MENU",
            payload: {
                menu: {
                    id: props.id,
                    name: props.name,
                    dietaries: props.dietaries
                }
            }
        })
    }, [contextValue.state.menus.length]);

    const dietaries = (props.dietaries && props.dietaries.length > 0) ?
        props.dietaries.map(dietary =>
            <span key={ Math.random() } className="dietary">{ dietary }</span>
        )
        :
        null;

    return <li className="item" onClick={ handleItemClickAdd } style={{ cursor: "pointer" }}>
        <h2>{ props.name }</h2>
        <p>
            { dietaries }
        </p>
    </li>;
};

export default MenuListItem;